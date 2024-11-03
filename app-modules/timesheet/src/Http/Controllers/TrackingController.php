<?php

namespace Modules\Timesheet\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class TrackingController
{
    public function index()
    {
        return Inertia::render(
            'Timesheet::Tracking',
            [
                'laravelVersion' => Application::VERSION,
                'phpVersion'     => PHP_VERSION,
            ]
        );
    }

    public function store(Request $request)
    {
        // Log the received data for inspection
        Log::info('Request Data:', $request->all());

        // Use dd() to check data in real-time (if no logging)
        dd($request->all());
    }
}
