<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function PHPSTORM_META\map;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Project::factory(30)->create([
            'id' => fake()->uuid(),
            'slug' => fake()->unique()->slug(),
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'creator' => 1,
            'devision' => 1,
            'highlight' => 1,
            'image' => 'project_image/what-is-lorem-ipsum5294e6d0-53ed-4a4a-a350-7eaeab72ac93.png'
        ]);
    }
}
