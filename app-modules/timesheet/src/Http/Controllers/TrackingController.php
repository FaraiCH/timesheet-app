<?php

namespace Modules\Timesheet\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\Timesheet\DTO\TimeSheetDTO;
use Modules\Timesheet\Services\TimeSheetService;
class TrackingController
{
    private TimeSheetService $timeSheetService;
    public function __construct(TimeSheetService $timeSheetService)
    {
        $this->timeSheetService = $timeSheetService;
    }
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
        //Todo: use data retrieved to store it in the Time Sheet Data Transfer Object. Template bellow
//        $timesheetDTO = new TimeSheetDTO(
//            $request->input('name'),
//            $request->input('email'),
//            $request->input('password'),
//            $request->input('password'),
//            $request->input('password'),
//            $request->input('password'),
//            $request->input('password'),
//            $request->input('password'),
//            $request->input('password'),
//            $request->input('password'),
//        );

        $timesheet = $this->timeSheetService->createTimeSheetRecord($timesheetDTO);

        // Use dd() to check data in real-time (if no logging)
        dd($request->all());
    }
}
