import React from 'react';
import { Head , router, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function edit({ event, auth }) {

  const { data, setData} = useForm({
    title: event.title,
    category: event.category,
    location: event.location,
    date: event.date,
    time: event.time,
    description: event.description,
  });

  const { errors } = usePage().props;

  const handleDescriptionChange = (content) => {
    setData('description', content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(`/admin/events/edit/${event.id}`, {
      _method: "patch",
      title: data.title,
      category: data.category,
      location: data.location,
      date: data.date,
      time: data.time,
      description: data.description,
    });
  };


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Edit Event
        </h2>
      }
    >
      <Head title='Create_Events' />
      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='overflow-x-auto'>

            <form onSubmit={handleSubmit} className="max-w-m m-5 mx-5">
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                <input type="text" 
                id="title" 
                value={data.title} 
                onChange={(e) => setData('title', e.target.value)} 
                name="title" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                {errors.title && <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 mt-2 text-red-700">
                {errors.title}
                </div>}
            </div>
            <div className="mb-5">
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                <input type="text" 
                id="Category" 
                value={data.category} 
                onChange={(e) => setData('category', e.target.value)} 
                name="category" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                {errors.category && <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 mt-2 text-red-700">
                {errors.category}
                </div>}
            </div>
            <div className="mb-5">
                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
                <input type="text" 
                id="location" 
                name="location"
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Location" />
                {errors.location && <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 mt-2 text-red-700">
                  {errors.location}
                </div>}
            </div>
            <div className="mb-5">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date</label>
                <input type="date" 
                id="date" 
                name="date"
                value={data.date}
                onChange={(e) => setData('date', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5" />
                {errors.date && <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 mt-2 text-red-700">
                  {errors.date}
                </div>}
            </div>
            <div className="mb-5">
                <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 ">Time</label>
                <input type="time" 
                id="time" 
                name="time"
                value={data.time}
                onChange={(e) => setData('time', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5" />
                {errors.time && <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 mt-2 text-red-700">
                  {errors.time}
                </div>}
            </div>
            <div className="mb-8">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <ReactQuill
                    value={data.description}
                    onChange={handleDescriptionChange}
                    style={{ height: '100%', width: '100%' }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5"
                    modules={{
                      toolbar: [
                        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                        [{size: []}],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{'list': 'ordered'}, {'list': 'bullet'}, 
                         {'indent': '-1'}, {'indent': '+1'}],
                        ['link', 'image', 'video'],
                        ['clean']
                      ],
                      clipboard: {
                        matchVisual: false,
                      }
                    }}
                  />
                {errors.description && <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 mt-2 text-red-700">
                {errors.description}
                </div>}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>

            </div>
          </div>
        </div>
      </div>

      
    </AuthenticatedLayout>
  );
}
