import React from 'react';

export default function CategoryList({
  categories,
  onEdit,
  onDelete
}) {

  if (categories.length === 0) {
    return <div className='m-2 text-center'>No category available yet.</div>;
  }

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th className='text-gray-700'>No.</th>
            <th className='text-gray-700'>Category ID</th>
            <th className='text-gray-700'>Name</th>
            <th className='text-gray-700'>Slug</th>
            <th className='text-gray-700'>Total Posts</th>
            <th className='text-gray-700'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>
                <div>
                  <div className='text-gray-700'>{index + 1}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{category.id}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{category.name}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{category.slug}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{category.posts_count}</div>
                </div>
              </td>
              <td>
                <button
                  className='btn bg-secondary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-blue-900'
                  onClick={() => onEdit(category)}
                >
                  Edit
                </button>
                <button
                  className='btn bg-primary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-red-600'
                  onClick={() => onDelete(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
