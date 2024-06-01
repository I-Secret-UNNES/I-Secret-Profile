import React from 'react';

export default function Pagination({ pagination, onPageChange }) {
  const { current_page, last_page } = pagination;

  const handlePageChange = page => {
    onPageChange(page);
  };

  if (last_page <= 1) return null;

  const getPageButtons = () => {
    const pageButtons = [];

    // Previous button
    pageButtons.push(
      <button
        key='prev'
        className='join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none'
        onClick={() => handlePageChange(current_page - 1)}
        disabled={current_page === 1}
      >
        «
      </button>
    );

    // Page buttons
    if (last_page <= 5) {
      for (let i = 1; i <= last_page; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none ${current_page === i ? 'bg-gray-300' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Display up to 2 pages before current_page, current_page, and up to 2 pages after current_page
      const startPage = Math.max(1, current_page - 2);
      const endPage = Math.min(last_page, current_page + 2);

      if (startPage > 1) {
        pageButtons.push(
          <button
            key='first'
            className='join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none'
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        );
        if (startPage > 2) {
          pageButtons.push(
            <button
              key='prevDots'
              className='join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none'
              disabled
            >
              ...
            </button>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none ${current_page === i ? 'bg-gray-300' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < last_page) {
        if (endPage < last_page - 1) {
          pageButtons.push(
            <button
              key='nextDots'
              className='join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none'
              disabled
            >
              ...
            </button>
          );
        }
        pageButtons.push(
          <button
            key='last'
            className='join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none'
            onClick={() => handlePageChange(last_page)}
          >
            {last_page}
          </button>
        );
      }
    }

    // Next button
    pageButtons.push(
      <button
        key='next'
        className='join-item btn bg-white text-gray-700 border-gray-300 mb-4 hover:bg-gray-400 hover:border-none'
        onClick={() => handlePageChange(current_page + 1)}
        disabled={current_page === last_page}
      >
        »
      </button>
    );

    return pageButtons;
  };

  return (
    <div className='flex justify-between space-y-6'>
      <div className=''></div>
      <div className='join ml-16'>{getPageButtons()}</div>
      <div className='mr-6 pt-4'>
        Page {current_page} of {last_page}
      </div>
    </div>
  );
}
