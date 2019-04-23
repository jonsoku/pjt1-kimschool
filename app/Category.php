<?php

namespace App;

use App\CategorySubject;
use App\Youtube;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function youtubes()
    {
        return $this->belongsToMany(Youtube::class);
    }
    public function categorySubjects()
    {
        return $this->belongsToMany(CategorySubject::class);
    }
}
