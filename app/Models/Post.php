<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

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
