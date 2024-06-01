import React from 'react';
import Modal from '@/Components/Modal';

export default function FormModal({
  isModalOpen,
  closeModal,
  handleSubmit,
  isEditMode,
  data,
  handleChange,
  errors,
  processing,
  roles,
}) {
  return (
    <Modal show={isModalOpen} onClose={closeModal} maxWidth='md'>
      <form className='p-6' onSubmit={handleSubmit}>
        <h2 className='text-lg font-medium text-gray-900'>
          {isEditMode ? 'Edit Employee' : 'Add Employee'}
        </h2>

        <div className='mt-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            className='mt-1 input input-bordered w-full max-w-sm text-gray-700 bg-white'
            placeholder='Full name'
            id='name'
            value={data.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className='text-red-500 text-xs italic'>{errors.name}</p>
          )}
        </div>

        <div className='mt-4'>
          <label
            htmlFor='role'
            className='block text-sm font-medium text-gray-700'
          >
            Role
          </label>
          <select
            className='mt-1 select select-bordered w-full max-w-sm bg-white text-gray-700'
            id='role'
            value={data.role}
            onChange={handleChange}
            required
          >
            <option disabled value=''>
              Role
            </option>
            {roles.map(role => (
              <option key={role.value} value={role.value}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className='text-red-500 text-xs italic'>{errors.role}</p>
          )}
        </div>

        <div className='mt-4'>
          <label
            htmlFor='profile_img'
            className='block text-sm font-medium text-gray-700'
          >
            Profile Image
          </label>
          <input
            type='file'
            id='profile_img'
            className='mt-1 file-input file-input-bordered w-full max-w-sm text-gray-700 bg-white'
            onChange={handleChange}
          />
        </div>

        <div className='mt-6 flex justify-end'>
          <button
            type='button'
            className='btn bg-gray-300 border-none text-gray-700 shadow-md hover:bg-gray-400 mr-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='btn bg-primary border-none text-white shadow-md hover:bg-red-700'
            disabled={processing}
          >
            {isEditMode ? 'Update' : 'Save'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
