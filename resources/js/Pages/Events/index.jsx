import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import ConfirmDelete from './Components/ConfirmDelete';
import { useState } from 'react';

export default function EventsIndex({
  auth,
  events, 
}) {
  
  const [showConfirm, setShowConfirm] = useState(false);
  const [eventProps, setEventProps] = useState({
    id: '',
  });
  const { flash } = usePage().props;

  const handleConfirmation = (id) => {
    setShowConfirm(true);
    setEventProps({id: id});
  }


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Events
        </h2>
      }
    >
      { flash.message && (
        <div className="py-2 px-4 bg-green-300 text-black text-center mt-0">
          {flash.message}
      </div>)}
      <Head title='Events' />
      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
          <div className='overflow-x-auto'>
            <a href="/admin/events/create">
          <button
          className='btn m-3 bg-secondary border-none text-white shadow-md hover:bg-tertiary'
          >
            Create Event
          </button>
          </a>

            <table className='table'>
              <thead>
                <tr>
                  <th className='text-gray-700'>No</th>
                  <th className='text-gray-700'>Title</th>
                  <th className='text-gray-700'>Category</th>
                  <th className='text-gray-700'>Location</th>
                  <th className='text-gray-700'>Date</th>
                  <th className='text-gray-700'>Actions</th>
                </tr>
              </thead>
              <tbody>
              { events.map((event, index) => (
                  <tr key={ index }>
                    <td>
                      <div>
                        <div className='text-gray-700'>{index + 1}</div>
                      </div>
                    </td>
                    <td>
                    <div>
                      <div className='text-gray-700'>{event.title}</div>
                    </div>
                    </td>
                    <td>
                    <div>
                      <div className='text-gray-700'>{event.category}</div>
                    </div>
                    </td>
                    <td>
                    <div>
                      <div className='text-gray-700'>{event.location}</div>
                    </div>
                    </td>
                    <td>
                    <div>
                      <div className='text-gray-700'>{event.date}</div>
                    </div>
                    </td>
                    <td>
                  <a href={`/admin/events/edit/${event.id}`}>
                  <button
                    className='btn bg-secondary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-blue-900'
                  >
                    Edit
                  </button>
                  </a>
                  <button
                    className='btn bg-primary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-red-600'
                    onClick={() => handleConfirmation(event.id)}
                  >
                    Delete
                  </button>
                  {showConfirm && (
                  <ConfirmDelete 
                    eventProps={eventProps}
                    setShowConfirm={setShowConfirm} />)}
                  </td>
                  </tr>
              )) }
              
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
      
    </AuthenticatedLayout>
  );
}
