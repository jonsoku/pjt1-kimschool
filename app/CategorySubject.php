<?php

namespace App;

use App\Category;
use Illuminate\Database\Eloquent\Model;

class CategorySubject extends Model
{
    protected $guarded = [];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
