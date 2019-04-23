<?php

namespace App;

use App\Category;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Youtube extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function getAll()
    {
        $youtubes = self::with('user', 'categories')->latest()->get();
        return $youtubes;
    }

    public function saveAll($request)
    {
        $user = $request->user();
        $user->youtubes()->create($request->all());
        $youtube = $user->youtubes()->latest()->first();
        $youtube->categories()->attach($request->get('category'));

    }

}
