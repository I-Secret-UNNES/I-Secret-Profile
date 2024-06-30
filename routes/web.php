<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/projects', function () {
//     return Inertia::render('Projects/Landing/MainProjects');
// })->name('MainProjects');


Route::get('/projects', [ProjectController::class, 'showProjects'])->name('MainProjects');

Route::get('/projects/{slug}', [ProjectController::class, 'showSingleProjects'])->name('detail.project');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/employee', function() {
    return Inertia::render('Employee/Employee');
})->name('employee');

Route::middleware('auth')->group(function () {
    Route::post('/dashboard/project/update', [ProjectController::class, 'update'])->name('update.project');
    Route::resource('/dashboard/project', ProjectController::class)->except('update');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
