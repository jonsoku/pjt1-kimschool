<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Youtube extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getAll()
    {
        $youtubes = self::with('user')->latest()->get();
        return $youtubes;
    }
}
