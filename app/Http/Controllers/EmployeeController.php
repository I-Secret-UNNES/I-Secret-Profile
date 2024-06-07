<?php
namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    protected $roleMapping = [
        1 => 'Ketua',
        2 => 'Wakil Ketua',
        3 => 'Sekretaris',
        4 => 'Bendahara',
        5 => 'Media and UI',
        6 => 'Networking',
        7 => 'Research',
        8 => 'Programming',
    ];

    public function index()
    {
        $employees = Employee::orderBy('id', 'desc')->paginate(10); // Fetch employees with pagination, 10 per page
        return Inertia::render('Employee/Employee', [
            'employees' => $employees,
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->get('query', '');
        $roleId = array_search($query, $this->roleMapping);

        $employees = Employee::where('name', 'like', "%{$query}%")
            ->orWhere('role', 'like', "%{$query}%")
            ->orWhere('role', $roleId)
            ->paginate(10);

        return response()->json($employees);
    }


    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name'          => 'required|string|max:255',
            'role'          => 'required|string|max:255',
            'profile_img'   => 'image|mimes:jpeg,png,jpg,gif|max:10240', // Assuming max size is 10MB
        ]);

        // Handle file upload if a profile image is provided
        if ($request->hasFile('profile_img')) {
            $path = $request->file('profile_img')->store('public/profile_images');
            $validatedData['profile_img'] = Storage::url($path);
        }

        // Create a new employee record with the validated data
        Employee::create($validatedData);

        return redirect()->route('employees.index')->with('success', 'Employee created successfully!');
    }

    public function update(Request $request, Employee $employee)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'profile_img' => 'image|mimes:jpeg,png,jpg,gif|max:10240',
        ]);

        if ($request->hasFile('profile_img')) {
            // Delete the old profile image if it exists
            if ($employee->profile_img) {
                $path = str_replace('/storage/', 'public/', $employee->profile_img);
                Storage::delete($path);
            }
            // Store the new profile image
            $path = $request->file('profile_img')->store('public/profile_images');
            $validatedData['profile_img'] = Storage::url($path);
        }

        // Update employee data
        $employee->update($validatedData);

        return redirect()->route('employees.index')->with('success', 'Employee updated successfully');
    }

    public function destroy(Employee $employee)
    {
        if ($employee->profile_img) {
            $path = str_replace('/storage/', 'profile_images/', $employee->profile_img);
            Storage::delete($path);
        }

        $employee->delete();

        return redirect()->route('employees.index')->with('success', 'Employee deleted successfully!');
    }
}
