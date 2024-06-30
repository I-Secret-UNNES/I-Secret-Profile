import { Head } from '@inertiajs/react';
import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';

export default function Dashboard({ auth }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Employee
        </h2>
      }
    >
      <Head title='Dashboard' />

      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>
              <button
                className='btn bg-secondary border-none text-white shadow-md hover:bg-tertiary'
                onClick={openModal}
              >
                Open Modal
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={isModalOpen} onClose={closeModal} maxWidth='md'>
        <form className='p-6'>
          <h2 className='text-lg font-medium text-gray-900'>Form Title</h2>

          <div className='mt-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Field 1
            </label>
            <input
              type='text'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
              placeholder='Enter field 1'
            />
          </div>

          <div className='mt-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Field 2
            </label>
            <input
              type='text'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50'
              placeholder='Enter field 2'
            />
          </div>

          <div className='mt-6 flex justify-end'>
            <button
              type='button'
              className='btn bg-gray-500 text-white mr-3'
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type='submit' className='btn bg-primary text-white'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </AuthenticatedLayout>
  );
}
