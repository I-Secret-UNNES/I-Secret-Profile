import Modal from '@/Components/Modal';
import { useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function FormModal({
    isModalOpen,
    closeModal,
    handleSubmit,
    isEditMode,
    data,
    handleChange,
    errors,
    processing,
}) {

    const generateSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    useEffect(() => {
        if (data.name) data.slug = generateSlug(data.name)
    }, [data.name])

    return (
        <Modal show={isModalOpen} onClose={closeModal} maxWidth='2xl'>
            <form className='p-6' onSubmit={handleSubmit} encType='multipart/form-data'>
                <h2 className='text-lg font-medium text-gray-900'>
                    {isEditMode ? 'Edit Category' : 'Add Category'}
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
                        className='mt-1 input input-bordered w-full text-gray-700 bg-white'
                        placeholder='Enter your category name here...'
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
                        htmlFor='slug'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Slug
                    </label>
                    <input
                        type='text'
                        className='mt-1 input input-bordered w-full text-gray-700 bg-white'
                        placeholder='e.g., my-post-category'
                        id='slug'
                        value={data.slug}
                        onChange={handleChange}
                        required
                    />
                    {errors.slug && (
                        <p className='text-red-500 text-xs italic'>{errors.slug}</p>
                    )}
                </div>

                <div className='mt-8 flex justify-end'>
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
