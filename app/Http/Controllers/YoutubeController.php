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
        //
    }

    public function show(Youtube $youtube)
    {
        //
    }

    public function edit(Youtube $youtube)
    {
        //
    }

    public function update(Request $request, Youtube $youtube)
    {
        //
    }

    public function destroy(Youtube $youtube)
    {
        //
    }
}
