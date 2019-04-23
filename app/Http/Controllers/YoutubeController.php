<?php

namespace App\Http\Controllers;

use App\Youtube;
use Illuminate\Http\Request;

class YoutubeController extends Controller
{
    public function __construct(Youtube $youtube)
    {
        $this->youtube = $youtube;
    }

    public function index()
    {
        $youtubes = $this->youtube->getAll();
        return response()->json([
            'youtubes' => $youtubes,
        ]);

    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $this->youtube->saveAll($request);
        // $user = $request->user();
        // $user->youtubes()->create($request->all());
    }

    public function show(Youtube $youtube)
    {
        $youtube->user;
        $youtube->categories;
        return response()->json([
            'youtube' => $youtube,
        ]);
    }

    public function edit(Youtube $youtube)
    {
        //
    }

    public function update(Request $request, Youtube $youtube)
    {
        $youtube->categories()->detach($youtube->category);
        $youtube->update($request->all());
        $youtube->categories()->attach($request->get('category'));
    }

    public function destroy(Youtube $youtube)
    {
        //
    }
}
