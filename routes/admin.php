<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CertificateController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/admin/login', [AdminController::class, 'login']);
Route::post('/admin/login', [AdminController::class, 'auth'])->name('admin.login');
Route::post('/certificates', [CertificateController::class, 'store']);

Route::prefix('admin')->middleware(AdminMiddleware::class)->group(function () {
    Route::get('/', [AdminController::class, 'employers'])->name('admin.dashboard');
    Route::get('/employees', [AdminController::class, 'employees'])->name('admin.employees');
    Route::get('/employers', [AdminController::class, 'employers'])->name('admin.employers');
    Route::get('/companies', [AdminController::class, 'componies'])->name('admin.companies');
    Route::get('/certificates', [AdminController::class, 'certificates'])->name('admin.certificates');
    Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout');
});

