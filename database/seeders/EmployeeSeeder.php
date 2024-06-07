<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 50; $i++) { // Adjust the number of employees to be inserted
            DB::table('employees')->insert([
                'name'        => 'Employee ' . ($i + 1),
                'role'        => rand(1, 8), // Generate a random number between 1 and 8
                'profile_img' => '/public/profile_images/UE4dG9bcXLnkD2UkszSdwaMAXTGHY61Jjt7jorIH.png',
            ]);
        }
    }
}
