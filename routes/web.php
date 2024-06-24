<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/employee', function () {
    return Inertia::render('Employee/Employee');
})->name('employee');

Route::get('/latihan', function () {
    return Inertia::render('Latihan/Latihan');
})->name('latihan');

Route::get('/adika', function () {
    return Inertia::render('Latihan/Adika');
})->name('adika');

Route::get('/rahman', function () {
    return Inertia::render('Latihan/Rahman');
})->name('rahman');

Route::get('/izza', function () {
    return Inertia::render('Latihan/Izza');
})->name('izza');

Route::get('/aziz', function () {
    return Inertia::render('Latihan/Aziz');
})->name('aziz');

Route::get('/aboutus', function () {
    return Inertia::render('Assignment/Layout/AboutUs');
})->name('aboutus');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';