import React from 'react';

function SearchInput({ value, onChange, placeholder, onClear }) {
  return (
    <div className='flex justify-center items-center relative w-[70%] md:w-[40%] mx-auto'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full border-2 border-blue-200 rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {value && (
        <button
          type='button'
          onClick={onClear}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none'
        >
          x
        </button>
      )}
    </div>
  );
}

export default SearchInput;
