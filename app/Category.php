<?php

namespace App;

use App\Youtube;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function youtubes()
    {
        return $this->belongsToMany(Youtube::class);
    }
}
