<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class UploadImageHelper
{
    public static function validateAndStoreBase64Image($base64Image, $path, &$errors)
    {
        // Decode base64 image
        $image = str_replace('data:image/png;base64,', '', $base64Image);
        $image = str_replace(' ', '+', $image);
        $imageData = base64_decode($image);

        // Create temp file for validation
        $tempFilePath = sys_get_temp_dir() . '/' . Str::random(10) . '.png';
        file_put_contents($tempFilePath, $imageData);

        // Create an instance from temp file
        $tempFile = new \Illuminate\Http\File($tempFilePath);

        // Validate file
        $validator = Validator::make(
            ['thumbnail_img' => $tempFile],
            ['thumbnail_img' => ['nullable', 'image', 'max:8192', 'mimes:jpeg,jpg,png,svg']]
        );

        if ($validator->fails()) {
            // Delete temp file if the validation failed
            unlink($tempFilePath);
            $errors = $validator->errors();
            return false;
        }

        // Save file to storage if the validation success
        $imageName = Str::random(40) . '.png';
        Storage::disk('public')->put($path . '/' . $imageName, $imageData);

        // Hapus file sementara
        unlink($tempFilePath);

        // Get URL from the image that has been saved
        return Storage::url($path . '/' . $imageName);
    }
}
