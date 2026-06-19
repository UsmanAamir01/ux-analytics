<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    public function plans(): Response
    {
        return Inertia::render('Billing/Plans', [
            'plans' => [
                [
                    'name' => 'MVP',
                    'price' => '$15',
                    'features' => [
                        'Project tracking keys',
                        'Session list',
                        'rrweb replay',
                        'MySQL storage',
                    ],
                ],
                [
                    'name' => 'Next',
                    'price' => '$49',
                    'features' => ['Multiple projects', 'Funnels', 'Heatmaps', 'Team access'],
                ],
            ],
        ]);
    }
}
