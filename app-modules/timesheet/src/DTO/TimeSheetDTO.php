<?php

namespace Modules\Timesheet\DTO;

class TimeSheetDTO
{
    public $id;
    public $startTime;
    public $endTime;
    public $normal;
    public $overTime;
    public $doubleTime;
    public $dateCaptured;
    public $dateFormat;
    public $hourRange;
    public $shift;
    public $member_id;

    public function __construct($startTime, $endTime, $normal, $overTime, $doubleTime, $dateCaptured, $dateFormat, $hourRange, $shift, $member_id)
    {
        // We initialise all our fields to save to the Timesheet data table
        $this->startTime = $startTime;
        $this->endTime = $endTime;
        $this->normal = $normal;
        $this->overTime = $overTime;
        $this->doubleTime = $doubleTime;
        $this->dateCaptured = $dateCaptured;
        $this->dateFormat = $dateFormat;
        $this->hourRange = $hourRange;
        $this->shift = $shift;
        $this->member_id = $member_id;
    }
}
