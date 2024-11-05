<?php

namespace Modules\Team\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MemberController
{
    public function index() : Response
    {
        return Inertia::render(
            'Team::User',
            [
                'laravelVersion' => Application::VERSION,
                'phpVersion'     => PHP_VERSION,
            ]
        );
    }
}
