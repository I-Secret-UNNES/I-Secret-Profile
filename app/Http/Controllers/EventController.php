<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


class EventController extends Controller
{
    public function index() {
        $events = Event::latest()->get();

        return Inertia::render('Events/index', [
            'events' => $events,
        ]);
    }

    public function indexGuest() {
        $events = Event::latest()->get();

        return Inertia::render('Events/Landing/Events', [
            'events' => $events,
        ]);
    }

    public function showGuest(Event $event) {

        return Inertia::render('Events/Landing/MainEvents', [
            'event' => $event,
        ]);
    }

    public function create() {
        return Inertia::render('Events/create');
    }

    public function store(Request $request) {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'date' => 'required|date',
            'time' => 'required',
            'description' => 'required',
        ]);

        Event::create($data);

        return Redirect::route('admin.events.index')->with('message', 'Event created successfully.');
    }

    public function edit(Event $event) {

        return Inertia::render('Events/edit', [
            'event' => $event,
        ]);
    }

    public function update(Request $request, Event $event) {
        $data = $request->validate([
                'title' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'date' => 'required|date',
                'time' => 'required',
                'description' => 'required',
                ]);
            
        $event->update($data);
        
        return Redirect::route('admin.events.index')->with('message', 'Event updated successfully.');
    }

    public function destroy(Event $event) {
        $event->delete();

        return back()->with('message', 'Event deleted successfuly');
    }
}
