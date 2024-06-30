<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EventController;
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

//guest event
Route::get('events', [EventController::class, 'indexGuest'])->name('events');
Route::get('events/{event}', [EventController::class, 'showGuest'])->name('events.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/employee', function() {
    return Inertia::render('Employee/Employee');
})->name('employee');





Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    //admin event
    Route::get('/admin/events', [EventController::class, 'index'])->name('admin.events.index');
    Route::get('/admin/events/create', [EventController::class, 'create'])->name('admin.events.create');
    Route::post('/admin/events', [EventController::class, 'store'])->name('admin.events.store');
    Route::get('/admin/events/edit/{event}', [EventController::class, 'edit'])->name('admin.events.edit');
    Route::patch('/admin/events/edit/{event}', [EventController::class, 'update'])->name('admin.events.update');
    Route::delete('/admin/events/{event}/delete', [EventController::class, 'destroy'])->name('admin.events.delete');
});

require __DIR__.'/auth.php';