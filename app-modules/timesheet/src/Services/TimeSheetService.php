<?php

namespace Modules\Timesheet\Services;

use Modules\Timesheet\DTO\TimeSheetDTO;
use Modules\Timesheet\Models\Tracking;

class TimeSheetService
{
    public function createTimeSheetRecord(TimeSheetDTO $timeSheetDTO) : Tracking
    {
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
        $timesheet->save();
        return $timesheet;
    }
}
