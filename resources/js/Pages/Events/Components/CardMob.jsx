import CalenderLogo from '@/Components/icon/CalenderLogo';
import React from 'react';
import LeftRoundedMob from '@/Components/icon/LeftRoundedMob';
import RightRoundedMob from '@/Components/icon/RightRoundedMob';

const CardMob = ({ title, content, date, isLeft, id }) => {
  return (
    <section className='w-[90%] mx-auto bg-blue-800 mb-10 rounded-2xl h-full flex justify-center pb-16 relative'>
      <div className='w-full h-full px-8 py-6'>
        <div className='px-8 py-1 bg-blue-600 rounded-3xl '>
          <h1 className='text-white text-center font-bold'>Kegiatan</h1>
        </div>
        <Jarak tinggi={'h-4'}></Jarak>
        <div className='rounded-3xl overflow-hidden h-80'>
          <img
            src='https://picsum.photos/seed/picsum/200/300'
            alt=''
            className='w-full h-full'
          />
        </div>
        <Jarak tinggi={'h-4'} />

        <div className='flex'>
          <CalenderLogo
            color='white'
            className='block h-6 w-auto fill-current text-gray-800'
          />
          <h1 className='text-white font-bold text-xl mx-1'>{date}</h1>
        </div>
        <Jarak tinggi={'h-4'} />
        <h1 className='text-white font-bold text-3xl'>{title}</h1>
        <Jarak tinggi={'h-4'} />
        <a href={`/events/${id}`}>
          <button className='py-1 px-6 border-[#1C447D] border-solid border-2 rounded-full focus:bg-blue-500'>
            <h1 className='text-white'>Selengkapnya</h1>
          </button>
        </a>
        {isLeft ? (
          <LeftRoundedMob
            color='#FF5A5F'
            className='absolute bottom-0 left-0 w-35 h-35'
          />
        ) : (
          <RightRoundedMob
            color='#FF5A5F'
            className='absolute bottom-0 right-0 w-35 h-35'
          />
        )}
      </div>
    </section>
  );
};

export default CardMob;

const Jarak = ({ tinggi }) => {
  return <div className={tinggi}></div>;
};
