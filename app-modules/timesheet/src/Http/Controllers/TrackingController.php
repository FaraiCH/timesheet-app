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

        foreach ($request->all()['rows'] as $row){

            $startTime = new \DateTime($row['startTime']);
            $endTime = new \DateTime($row['endTime']);
            //Todo: use data retrieved to store it in the Time Sheet Data Transfer Object. Template bellow
            $timesheetDTO = new TimeSheetDTO(
                $startTime->format('H:i:s'),
                $endTime->format('H:i:s'),
                $row['normal'],
                $row['overtime'],
                $row['doubleTime'],
                $row['dateCaptured'],
                $row['dateFormat'],
                $row['hourRange'],
                $row['shift'],
            );
        }

        $this->timeSheetService->createTimeSheetRecord($timesheetDTO);
    }
}
