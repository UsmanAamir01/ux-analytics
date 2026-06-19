<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::query()
                ->where('user_id', $request->user()->id)
                ->latest()
                ->get(['id', 'name', 'website_url', 'tracking_key', 'created_at']),
            'trackerBaseUrl' => rtrim(config('app.url'), '/'),
            'testBaseUrl' => rtrim(config('app.url'), '/').'/test',
        ]);
    }

    public function create(Request $request): Response|RedirectResponse
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'website_url' => ['required', 'url', 'max:500'],
        ]);

        Project::create([
            'user_id' => $request->user()->id,
            'name' => $data['name'],
            'website_url' => $data['website_url'],
            'tracking_key' => $this->generateTrackingKey(),
        ]);

        return redirect()->route('projects.index')->with('success', 'Project created.');
    }

    private function generateTrackingKey(): string
    {
        do {
            $key = 'uxi_'.Str::random(32);
        } while (Project::where('tracking_key', $key)->exists());

        return $key;
    }
}
