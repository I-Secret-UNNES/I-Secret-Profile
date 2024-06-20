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
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|unique:post_categories,slug'
        ]);

        PostCategory::create($validatedData);

        return to_route('posts.categories.index');
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

        return to_route('posts.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PostCategory $category)
    {
        $category->posts()->delete();
        $category->delete();

        return to_route('posts.categories.index');
    }
}
