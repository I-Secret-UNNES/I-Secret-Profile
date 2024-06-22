import React from 'react';

export default function PostList({
  posts,
  categories,
  users,
  onEdit,
  onDelete
}) {

  if (posts.length === 0) {
    return <div className='m-2 text-center'>No post available yet.</div>;
  }

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  const getAuthorName = (userId) => {
    const author = users.find((user) => user.id === userId);
    return author ? author.name : 'Unknown';
  };

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th className='text-gray-700'>No.</th>
            <th className='text-gray-700'>Post ID</th>
            <th className='text-gray-700'>Author</th>
            <th className='text-gray-700'>Thumbnail Image</th>
            <th className='text-gray-700'>Title</th>
            <th className='text-gray-700'>Category</th>
            <th className='text-gray-700'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>
                <div>
                  <div className='text-gray-700'>{index + 1}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{post.id}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{getAuthorName(post.user_id)}</div>
                </div>
              </td>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask w-24 h-12'>
                      <img src={post.thumbnail_img} alt='Thumbnail Image' />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{post.title}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{getCategoryName(post.category_id)}</div>
                </div>
              </td>
              <td>
                <button
                  className='btn bg-secondary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-blue-900'
                  onClick={() => onEdit(post)}
                >
                  Edit
                </button>
                <button
                  className='btn bg-primary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-red-600'
                  onClick={() => onDelete(post.id)}
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