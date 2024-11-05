<?php

use Illuminate\Support\Facades\Route;
use \Modules\Team\Http\Controllers\OrganisationController;
use \Modules\Team\Http\Controllers\MemberController;

Route::middleware('auth')->group(function () {
    Route::get('/organisation', [OrganisationController::class, 'index'])->name('team.organisation.index');
    Route::get('/team', [MemberController::class, 'index'])->name('team.user.index');
});
// Route::get('/teams', [TeamController::class, 'index'])->name('teams.index');
// Route::get('/teams/create', [TeamController::class, 'create'])->name('teams.create');
// Route::post('/teams', [TeamController::class, 'store'])->name('teams.store');
// Route::get('/teams/{team}', [TeamController::class, 'show'])->name('teams.show');
// Route::get('/teams/{team}/edit', [TeamController::class, 'edit'])->name('teams.edit');
// Route::put('/teams/{team}', [TeamController::class, 'update'])->name('teams.update');
// Route::delete('/teams/{team}', [TeamController::class, 'destroy'])->name('teams.destroy');
