<?php

use Illuminate\Support\Facades\Route;
use Modules\Timesheet\Http\Controllers\TrackController;

Route::middleware('auth')->group(function () {
    Route::get('/timesheet', [TrackController::class, 'index'])->name('timesheet.tracking.index');
});

// Route::get('/timesheets', [TimesheetController::class, 'index'])->name('timesheets.index');
// Route::get('/timesheets/create', [TimesheetController::class, 'create'])->name('timesheets.create');
// Route::post('/timesheets', [TimesheetController::class, 'store'])->name('timesheets.store');
// Route::get('/timesheets/{timesheet}', [TimesheetController::class, 'show'])->name('timesheets.show');
// Route::get('/timesheets/{timesheet}/edit', [TimesheetController::class, 'edit'])->name('timesheets.edit');
// Route::put('/timesheets/{timesheet}', [TimesheetController::class, 'update'])->name('timesheets.update');
// Route::delete('/timesheets/{timesheet}', [TimesheetController::class, 'destroy'])->name('timesheets.destroy');
