<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCV extends Model
{
    use HasFactory;

    protected $fillable = [
        'area',
        'city',
        'device',
    ];
}
