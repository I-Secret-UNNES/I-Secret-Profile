import React from 'react';

const BlueDiv = ({ title, margin }) => {
  return (
    <div
      className={`${margin} bg-[#335DCB] inline-block px-6 py-1 rounded-lg max-w-full`}
    >
      <h1 className='text-white text-lg font-bold'>{title}</h1>
    </div>
  );
};

export default BlueDiv;
