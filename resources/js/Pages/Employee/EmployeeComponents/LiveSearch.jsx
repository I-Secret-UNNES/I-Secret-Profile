import React, { useState } from 'react';
import axios from 'axios';

const LiveSearch = ({ onResults }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      axios
        .get(route('employees.search', { query: value }))
        .then(response => {
          onResults(response.data.data);
        })
        .catch(error => {
          console.error('Error during live search:', error);
          onResults([]); // Clear results on error
        });
    } else {
      onResults([]); // Clear results if query is too short
    }
  };

  return (
    <div>
      <label className='input input-bordered flex items-center bg-white text-gray-700'>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          className='grow border-transparent focus:border-transparent focus:ring-0 w-96'
          placeholder='Search employee name or role...'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-70'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
    </div>
  );
};

export default LiveSearch;
