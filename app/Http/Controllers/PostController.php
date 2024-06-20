<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('category')->orderBy('id', 'desc')->paginate(10);
        $categories = PostCategory::all();
        $users = User::all();

        return Inertia::render('Blog/Blog', [
            'posts' => $posts,
            'categories' => $categories,
            'users' => $users
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:posts,slug'],
            'thumbnail_img' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:8192'],
            'body' => ['required', 'string'],
        ]);

        $validatedData['user_id'] = auth()->id();
        $validatedData['category_id'] = (int) $request['category_id'];

        // Handle file upload if a thumbnail image is provided
        if ($request->hasFile('thumbnail_img')) {;
            $path = $request->file('thumbnail_img')->store('public/post_thumbnail_images');
            $validatedData['thumbnail_img'] = Storage::url($path);
        }

        Post::create($validatedData);

        return to_route('posts.index');
    }

    public function search(Request $request)
    {
        $query = $request->get('query', '');

        $posts = Post::where('title', 'like', "%{$query}%")
            ->orWhere('body', 'like', "%{$query}%")
            ->orWhere('slug', 'like', "%{$query}%")
            ->orderBy('id', 'desc')
            ->paginate(10);

        return response()->json($posts);
    }

    /**
     * Display the specified resource.
     */
    // public function show(Post $post)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Post $post)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:posts,slug,' . $post->id],
            'thumbnail_img' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:8192'],
            'body' => ['required', 'string'],
        ]);

        $validatedData['category_id'] = (int) $request['category_id'];

        if ($request->hasFile('thumbnail_img')) {
            // Delete the old thumbnail image if it exists
            if ($post->thumbnail_img) {
                $path = str_replace('/storage', 'public', $post->thumbnail_img);
                Storage::delete($path);
            }
            // Store the new thumbnail image
            $path = $request->file('thumbnail_img')->store('public/post_thumbnail_images');
            $validatedData['thumbnail_img'] = Storage::url($path);
        }

        $post->update($validatedData);

        return to_route('posts.index')->with('success', 'ok');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        if ($post->thumbnail_img) {
            $path = str_replace('/storage', 'public', $post->thumbnail_img);
            Storage::delete($path);
        }

        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully!');
    }
}
