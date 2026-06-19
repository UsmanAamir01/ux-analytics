<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\SessionEvent;
use App\Models\UserSession;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $projectIds = Project::query()
            ->where('user_id', $request->user()->id)
            ->pluck('id');

        return Inertia::render('Dashboard', [
            'stats' => [
                'projects' => $projectIds->count(),
                'sessions' => UserSession::whereIn('project_id', $projectIds)->count(),
                'events' => SessionEvent::whereIn('project_id', $projectIds)->count(),
            ],
            'recentSessions' => UserSession::query()
                ->with('project:id,name')
                ->whereIn('project_id', $projectIds)
                ->latest()
                ->limit(5)
                ->get(['id', 'project_id', 'session_id', 'page_url', 'created_at']),
        ]);
    }
}
