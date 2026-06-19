<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    public function plans(): Response
    {
        return Inertia::render('Billing/Plans', [
            'plans' => $this->plansData(),
            'publicPage' => false,
        ]);
    }

    public function publicPlans(): Response
    {
        return Inertia::render('Billing/Plans', [
            'plans' => $this->plansData(),
            'publicPage' => true,
        ]);
    }

    private function plansData(): array
    {
        return [
            [
                'name' => 'Free',
                'price' => '$0',
                'period' => '/month',
                'yearlyPrice' => '$0',
                'yearlyPeriod' => '/year',
                'yearlyNote' => 'Free forever',
                'description' => 'For small websites and users testing UX Analytics.',
                'badge' => null,
                'features' => [
                    '1 Project',
                    '5,000 Sessions / Month',
                    '7-Day Data Retention',
                    'Basic Session Replay',
                    'Basic Heatmaps',
                    'Basic Funnel Analytics',
                ],
                'button' => 'Start Free',
                'highlighted' => false,
            ],
            [
                'name' => 'Professional',
                'price' => '$29',
                'period' => '/month',
                'yearlyPrice' => '$290',
                'yearlyPeriod' => '/year',
                'yearlyNote' => 'Save $58 yearly',
                'description' => 'For startups, SaaS products, and growing websites.',
                'badge' => 'Most Popular',
                'features' => [
                    '10 Projects',
                    '50,000 Sessions / Month',
                    '90-Day Data Retention',
                    'Session Replay',
                    'Advanced Heatmaps',
                    'Funnel Analysis',
                    'Rage Click / Tap Detection',
                    'Crash Reporting',
                    'Exception Tracking',
                    'Team Members',
                ],
                'button' => 'Upgrade Now',
                'highlighted' => true,
            ],
            [
                'name' => 'Agency / Enterprise',
                'price' => '$99',
                'period' => '/month',
                'yearlyPrice' => '$990',
                'yearlyPeriod' => '/year',
                'yearlyNote' => 'Save $198 yearly',
                'description' => 'For agencies, teams, and high-traffic businesses.',
                'badge' => null,
                'features' => [
                    'Unlimited Projects',
                    'Unlimited Sessions',
                    'Custom Data Retention',
                    'All Professional Features',
                    'Unlimited Team Members',
                    'White Label Reports',
                    'API Access',
                    'Priority Support',
                    'Custom Integrations',
                ],
                'button' => 'Contact Sales',
                'highlighted' => false,
            ],
        ];
    }
}
