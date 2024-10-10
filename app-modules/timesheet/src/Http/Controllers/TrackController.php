<?php

namespace Modules\Timesheet\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrackController
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
}
