<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'category_id',
        'thumbnail_img',
        'body',
    ];

    public function category()
    {
        return $this->belongsTo(PostCategory::class);
    }
}
