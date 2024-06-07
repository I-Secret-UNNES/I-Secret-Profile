<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search') ?? "";
        $project = Project::whereAny([
            'title',
        ], 'LIKE', '%' . $search . '%')->with('user')->paginate(10);
        return Inertia::render('Projects/Dashboard/Projects', [
            'APP_URL' => env('APP_URL'),
            'projects' => $project,
            'searchKeyword' => $search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'slug' => 'required|unique:projects,slug',
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|file|extensions:jpg,png',
            'creator' => 'required',
            'devision' => 'required',
            'highlight' => 'required',
        ]);

        $image = $request->file('image');

        $validated['image'] = $image->storeAs('project_image', $validated['title'] . $image->getClientOriginalName());
        $validated['slug'] = Str::of($validated['slug'])->slug('-');

        $project = Project::create($validated);

        if ($project) {
            return redirect()->route('project.index')->with('success', 'Data stored!');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $project = Project::where('id', $request->get('id'));
        $validated = [
            'slug' => [
                'sometimes',
                'required',
                Rule::unique('projects', 'id')->ignore($request->get('id'))
            ],
            'title' => [
                'sometimes', 
                'required'
            ],
            'description' => [
                'sometimes', 
                'required'
            ],
            'creator' => [
                'sometimes', 
                'required'
            ],
            'devision' => [
                'sometimes', 
                'required'
            ],
            'highlight' => [
                'sometimes', 
                'required'
            ],
        ];
        if ($request->hasFile('image')) {
            $validated += ['image' => ['required','file','extensions:jpg,png']];
        }

        $validate = Validator::make($request->all(), $validated);
        $validated = $validate->validated();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $validated['image'] = $image->storeAs('project_image', $validated['title'] . $image->getClientOriginalName());
        }


        $project = $project->update($validated);
        if ($project && !$validate->fails()) {
            return redirect()->route('project.index')->with('success', 'Data updated!');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $project = Project::where('id', $id);

        if ($project->delete()) {
            return redirect()->route('project.index')->with('success', 'Data deleted!');
        }
    }
}
