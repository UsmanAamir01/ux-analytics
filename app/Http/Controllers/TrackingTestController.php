<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Contracts\View\View;

class TrackingTestController extends Controller
{
    public function show(Project $project): View
    {
        return view('tracking-test', [
            'project' => $project,
            'trackerUrl' => rtrim(config('app.url'), '/').'/tracker.js',
        ]);
    }
}
