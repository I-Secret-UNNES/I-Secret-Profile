import Modal from '@/Components/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ImageCropper from './ImageCropper';

export default function FormModal({
  isModalOpen,
  closeModal,
  handleSubmit,
  isEditMode,
  data,
  handleChange,
  handleCrop,
  handleFileChange,
  handleQuillChange,
  showCropper,
  imageSrc,
  errors,
  processing,
  categories
}) {

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  useEffect(() => {
    if (data.title) data.slug = generateSlug(data.title);
  }, [data.title]);

  return (
    <Modal show={isModalOpen} onClose={closeModal} maxWidth='2xl'>
      <form className='p-6' onSubmit={handleSubmit} encType='multipart/form-data'>
        <h2 className='text-lg font-medium text-gray-900'>
          {isEditMode ? 'Edit Post' : 'Add Post'}
        </h2>

        <div className='mt-4'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title
          </label>
          <input
            type='text'
            className='mt-1 input input-bordered w-full text-gray-700 bg-white'
            placeholder='Enter your title here...'
            id='title'
            value={data.title}
            onChange={handleChange}
            required
          />
          {errors.title && (
            <p className='text-red-500 text-xs italic'>{errors.title}</p>
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
            placeholder='e.g., my-first-post'
            id='slug'
            value={data.slug}
            onChange={handleChange}
            required
          />
          {errors.slug && (
            <p className='text-red-500 text-xs italic'>{errors.slug}</p>
          )}
        </div>

        <div className="mt-4">
          <div className='flex justify-between items-center'>
            <label
              htmlFor='category_id'
              className='block text-sm font-medium text-gray-700'
            >
              Category
            </label>
            <Link href={route('posts.categories.index')}>
              <button type='button' className='btn btn-sm text-white'>
                Manage categories
              </button>
            </Link>
          </div>
          <select
            className={`select select-bordered w-full bg-white mt-1 text-base ${data.category_id === '' ? 'text-gray-500' : 'text-gray-700'}`}
            id='category_id'
            value={data.category_id}
            onChange={handleChange}
          >
            <option value='' disabled>Select a category</option>
            {categories.map((val, index) => (
              <option key={index} value={val.id}>{val.name}</option>
            ))}
          </select>
        </div>

        <div className='mt-4'>
          <label
            htmlFor='thumbnail_img'
            className='block text-sm font-medium text-gray-700'
          >
            Thumbnail image
          </label>
          <input
            type='file'
            id='thumbnail_img'
            className='mt-1 file-input file-input-bordered w-full text-gray-700 bg-white'
            onChange={handleFileChange}
          />
          {errors.thumbnail_img && (
            <p className='text-red-500 text-xs italic'>{errors.thumbnail_img}</p>
          )}
        </div>

        {imageSrc && (
          <div className={`mt-4 ${showCropper ? '' : 'hidden'}`}>
            <ImageCropper imageSrc={imageSrc} onCrop={handleCrop} />
          </div>
        )}

        <div className='mt-4 h-56'>
          <label
            htmlFor='body'
            className='block text-sm font-medium text-gray-700'
          >
            Body
          </label>
          <ReactQuill
            style={{ height: '100%', fontSize: '16px', color: 'black' }}
            theme='snow'
            value={data.body}
            onChange={handleQuillChange}
            modules={{
              toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
                ['clean']
              ]
            }}
            placeholder="Write something amazing..."
          />
          {errors.body && (
            <p className='text-red-500 text-xs italic'>{errors.body}</p>
          )}
        </div>

        <div className='mt-24 flex justify-end'>
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
