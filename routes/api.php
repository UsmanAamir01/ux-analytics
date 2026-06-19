<?php

use App\Http\Controllers\Api\TrackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::options('/track', fn () => response('', 204)
    ->header('Access-Control-Allow-Origin', '*')
    ->header('Access-Control-Allow-Methods', 'POST, OPTIONS')
    ->header('Access-Control-Allow-Headers', 'Content-Type'));

Route::post('/track', TrackController::class);

Route::get('/health', fn (Request $request) => response()->json(['ok' => true]));
