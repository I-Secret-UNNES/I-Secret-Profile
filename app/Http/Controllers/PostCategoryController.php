<?php

namespace App\Http\Controllers;

use App\Models\PostCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = PostCategory::withCount('posts')->orderBy('id', 'desc')->paginate(10);

        return Inertia::render('Blog/Category/Category', [
            'categories' => $categories
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->get('query', '');

        $categories = PostCategory::where('name', 'like', "%{$query}%")
            ->orWhere('slug', 'like', "%{$query}%")
            ->orderBy('id', 'desc')
            ->paginate(10);

        return response()->json($categories);
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:post_categories,slug'
        ]);

        PostCategory::create($validatedData);

        return to_route('posts.categories.index')->with('success', 'ok');
    }

    /**
     * Display the specified resource.
     */
    public function show(PostCategory $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PostCategory $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PostCategory $category)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:post_categories,slug,' . $category->id
        ]);

        $category->update($validatedData);

        return to_route('posts.categories.index')->with('success', 'ok');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostCategory $category)
    {
        $category->delete();

        return to_route('posts.categories.index')->with('success', 'ok');
    }
}
