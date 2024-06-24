<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasUuids;
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'slug',
        'title',
        'description',
        'creator',
        'image',
        'devision',
        'highlight'
    ];

    protected $primaryKey = 'id';

    public function user() {
        return $this->belongsTo(User::class, 'creator');
    }
}
