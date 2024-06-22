<?php

namespace App\Http\Controllers;

use App\Helpers\UploadImageHelper;
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
            'body' => ['nullable', 'string'],
        ]);

        $validatedData['user_id'] = auth()->id();
        $validatedData['category_id'] = (int) $request['category_id'];

        if ($request->has('thumbnail_img')) {
            $imageUrl = UploadImageHelper::validateAndStoreBase64Image($request->thumbnail_img, 'post_thumbnail_images', $errors);

            if (!$imageUrl) {
                return redirect()->back()->withErrors($errors)->withInput();
            }

            // Simpan URL gambar ke dalam validatedData
            $validatedData['thumbnail_img'] = $imageUrl;
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validatedData = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:posts,slug,' . $post->id],
            'body' => ['required', 'string'],
        ]);

        $validatedData['category_id'] = (int) $request['category_id'];
        $validatedData['thumbnail_img'] = $request['thumbnail_img'];

        if ($request->has('thumbnail_img')) {
            // Store the new thumbnail image
            $imageUrl = UploadImageHelper::validateAndStoreBase64Image($request->thumbnail_img, 'post_thumbnail_images', $errors);

            if (!$imageUrl) {
                return redirect()->back()->withErrors($errors)->withInput();

                // Delete the old thumbnail image if it exists
                if ($post->thumbnail_img !== null) {
                    $path = str_replace('/storage', 'public', $post->thumbnail_img);
                    Storage::delete($path);
                }
            }

            // Simpan URL gambar ke dalam validatedData
            $validatedData['thumbnail_img'] = $imageUrl;
        }

        $post->update($validatedData);

        return to_route('posts.index');
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

        return redirect()->route('posts.index');
    }
}
