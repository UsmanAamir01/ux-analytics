<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\UserSession;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SessionController extends Controller
{
    public function index(Request $request): Response
    {
        $projectIds = Project::query()
            ->where('user_id', $request->user()->id)
            ->pluck('id');

        return Inertia::render('Sessions/Index', [
            'sessions' => UserSession::query()
                ->with('project:id,name')
                ->withCount('events')
                ->whereIn('project_id', $projectIds)
                ->latest()
                ->paginate(20)
                ->through(fn (UserSession $session) => [
                    'id' => $session->id,
                    'session_id' => $session->session_id,
                    'project' => $session->project?->name,
                    'page_url' => $session->page_url,
                    'browser' => $session->browser,
                    'user_agent' => $session->user_agent,
                    'events_count' => $session->events_count,
                    'created_at' => $session->created_at?->toDateTimeString(),
                ]),
        ]);
    }

    public function replay(Request $request, UserSession $session): Response
    {
        $session->loadMissing('project:id,user_id,name');

        abort_unless($session->project?->user_id === $request->user()->id, 403);

        return Inertia::render('Sessions/Replay', [
            'session' => [
                'id' => $session->id,
                'session_id' => $session->session_id,
                'project' => $session->project?->name,
                'page_url' => $session->page_url,
                'browser' => $session->browser,
                'user_agent' => $session->user_agent,
                'created_at' => $session->created_at?->toDateTimeString(),
            ],
            'events' => $session->events()
                ->orderBy('id')
                ->get(['event'])
                ->map(function ($event) {
                    if (is_array($event->event)) {
                        return $event->event;
                    }

                    return json_decode($event->event, true);
                })
                ->filter(fn ($event) => is_array($event))
                ->values(),
        ]);
    }
}
