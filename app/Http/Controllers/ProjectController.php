<?php

namespace App\Http\Controllers;

use App\Models\Project;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ProjectController extends Controller
{


    /**
     * CONTROLLER FOR HANDLE FRONT-END
     */

    public function showProjects(Request $request)
    {
        $search = $request->get('search') ?? "";
        $project = Project::whereAny([
            'title',
        ], 'LIKE', '%' . $search . '%')->with('user')->paginate(10);

        $highlight = Project::where('highlight', 1)->limit(4)->with('user')->get();
        return Inertia::render('Projects/Landing/MainProjects', [
            'APP_URL' => env('APP_URL'),
            'projects' => $project,
            'searchKeyword' => $search,
            'highlight' => $highlight
        ]);
    }

    public function showSingleProjects($slug)
    {
        $project = Project::where('slug', $slug)->with('user')->first();
        $recent = Project::limit(3)->get();
        return Inertia::render('Projects/Landing/Projects', [
            'project' => $project,
            'recent' => $recent
        ]);
    }


    /**
     * CONTROLLER FOR HANDLE BACK-END
     */
    
     public function getProjects($search = NULL){
        $project = Project::whereAny([
            'title',
        ], 'LIKE', '%' . $search . '%')->with('user')->paginate(10);
        return $project;
     }

     public function getSearch($request){
        $search = $request->get('search') ?? "";
        return $search;
     }


    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $this->getSearch($request);
        $project = $this->getProjects($search);
        return Inertia::render('Projects/Dashboard/Projects', [
            'APP_URL' => env('APP_URL'),
            'projects' => $project,
            'searchKeyword' => $search,
            'formHandler' => [
                'active' => false,
                'type' => NULL,
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $search = $this->getSearch($request);
        $project = $this->getProjects();
        return Inertia::render('Projects/Dashboard/Projects', [
            'APP_URL' => env('APP_URL'),
            'projects' => $project,
            'searchKeyword' => $search,
            'formHandler' => [
                'active' => true,
                'type' => 'create',
            ],
            'old' => session()->getOldInput()
        ]);
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
            'highlight' => 'sometimes',
        ]);

        $image = $request->file('image');

        $validated['image'] = $image->storeAs('project_image', $validated['slug'] . $image->getClientOriginalName());
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
    public function edit(Request $request, $slug)
    {
        $search = $this->getSearch($request);
        $project = $this->getProjects();
        $update = Project::where('slug', $slug)->first();
        return Inertia::render('Projects/Dashboard/Projects', [
            'APP_URL' => env('APP_URL'),
            'projects' => $project,
            'searchKeyword' => $search,
            'updateData' => $update,
            'formHandler' => [
                'active' => true,
                'type' => 'update',
            ],
            'old' => session()->getOldInput()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $project = Project::where('id', $request->get('id'));
        $validated = [
            'slug' => [
                'required',
                Rule::unique('projects')->ignore($request->get('id'), 'id')
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
