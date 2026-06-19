<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\UserSession;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TrackController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $payload = [
            ...$request->all(),
            'tracking_key' => $request->input('tracking_key', $request->input('project_key')),
        ];

        $validator = Validator::make($payload, [
            'tracking_key' => ['required', 'string', 'exists:projects,tracking_key'],
            'session_id' => ['required', 'string', 'max:120'],
            'url' => ['nullable', 'string', 'max:2048'],
            'user_agent' => ['nullable', 'string', 'max:2048'],
            'events' => ['required', 'array', 'min:1', 'max:50'],
            'events.*' => ['required', 'array'],
        ]);

        if ($validator->fails()) {
            return response()
                ->json(['ok' => false, 'errors' => $validator->errors()], 422)
                ->withHeaders($this->corsHeaders());
        }

        $data = $validator->validated();
        $project = Project::where('tracking_key', $data['tracking_key'])->firstOrFail();

        $session = UserSession::updateOrCreate(
            [
                'project_id' => $project->id,
                'session_id' => $data['session_id'],
            ],
            [
                'page_url' => $data['url'] ?? null,
                'user_agent' => $data['user_agent'] ?? $request->userAgent(),
                'browser' => $this->browser($data['user_agent'] ?? $request->userAgent() ?? ''),
                'device' => $this->device($data['user_agent'] ?? $request->userAgent() ?? ''),
                'last_seen_at' => now(),
            ],
        );

        $rows = collect($data['events'])
            ->map(fn (array $event) => [
                'user_session_id' => $session->id,
                'project_id' => $project->id,
                'page_url' => $data['url'] ?? null,
                'event' => json_encode($event),
                'created_at' => now(),
                'updated_at' => now(),
            ])
            ->all();

        $session->events()->insert($rows);

        return response()
            ->json(['ok' => true, 'ingested' => count($rows)])
            ->withHeaders($this->corsHeaders());
    }

    private function corsHeaders(): array
    {
        return [
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'POST, OPTIONS',
            'Access-Control-Allow-Headers' => 'Content-Type',
        ];
    }

    private function browser(string $userAgent): string
    {
        return match (true) {
            str_contains($userAgent, 'Edg/') => 'Edge',
            str_contains($userAgent, 'Chrome/') => 'Chrome',
            str_contains($userAgent, 'Safari/') => 'Safari',
            str_contains($userAgent, 'Firefox/') => 'Firefox',
            default => 'Unknown',
        };
    }

    private function device(string $userAgent): string
    {
        return preg_match('/Mobile|Android|iPhone|iPad/i', $userAgent) ? 'Mobile' : 'Desktop';
    }
}
