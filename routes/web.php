<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BillingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\TrackingTestController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => Inertia::render('Landing', [
    'trackerBaseUrl' => rtrim(config('app.url'), '/'),
]))->name('landing');

Route::get('/demo', fn () => Inertia::render('Demo', [
    'trackerBaseUrl' => rtrim(config('app.url'), '/'),
]))->name('demo');

Route::get('/pricing', [BillingController::class, 'publicPlans'])->name('pricing');

Route::get('/test/{project:tracking_key}', [TrackingTestController::class, 'show'])
    ->name('tracking-test.show');

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
    Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::resource('projects', ProjectController::class)->only(['index', 'create', 'store']);
    Route::get('/sessions', [SessionController::class, 'index'])->name('sessions.index');
    Route::get('/sessions/{session}/replay', [SessionController::class, 'replay'])
        ->name('sessions.replay');
    Route::get('/billing/plans', [BillingController::class, 'plans'])->name('billing.plans');
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
