<?php
public function show(Employee $employee)
    {
        return Inertia::render('Employee/Employee', [
            'employees' => $employee
        ]);
    }