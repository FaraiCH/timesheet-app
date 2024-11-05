<?php

namespace Modules\Team\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrganisationController
{
    public function index() : Response
    {
        return Inertia::render(
            'Team::Organisation',
            [
                'laravelVersion' => Application::VERSION,
                'phpVersion'     => PHP_VERSION,
            ]
        );
    }
}
