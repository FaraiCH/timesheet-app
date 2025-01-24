<?php

namespace Modules\Timesheet\Services;

use Modules\Timesheet\DTO\TimeSheetDTO;
use Modules\Timesheet\Models\Tracking;

class TimeSheetService
{
    public function createTimeSheetRecord(TimeSheetDTO $timeSheetDTO) : Tracking
    {
        //Here we can create and save our data from time tracking DTO and saving to the Tracking Model
        //This helps to de-couple the business logic from the presentation logic
        $timesheet = new Tracking();
        $timesheet->start_time = $timeSheetDTO->startTime;
        $timesheet->end_time = $timeSheetDTO->endTime;
        $timesheet->normal = $timeSheetDTO->normal;
        $timesheet->overtime = $timeSheetDTO->overTime;
        $timesheet->double_time = $timeSheetDTO->doubleTime;
        $timesheet->date_captured = $timeSheetDTO->dateCaptured;
        $timesheet->date_format = $timeSheetDTO->dateFormat;
        $timesheet->hour_range = $timeSheetDTO->hourRange;
        $timesheet->shift = $timeSheetDTO->shift;
        $timesheet->member_id = $timeSheetDTO->member_id;
        $timesheet->save();
        return $timesheet;
    }
}
