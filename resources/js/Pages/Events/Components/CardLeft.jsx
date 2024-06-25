import CalenderLogo from '@/Components/icon/CalenderLogo';
import React, { Fragment } from 'react';
import LeftRoundedMob from '@/Components/icon/LeftRoundedMob';

const CardLeft = ({ date, title, content }) => {
  return (
    <Fragment>
      <a href='/mainevents' className='hidden md:block mb-14 relative'>
        <div className='w-[90%] mx-auto bg-blue-700 rounded-3xl px-24 pt-10 pb-7 relative'>
          <LeftRoundedMob
            color='#FF5A5F'
            className='absolute bottom-0 left-0 w-35 h-35'
          />
          <div className='flex mx-auto'>
            <div className='w-[30%] mr-10 flex items-end flex-col'>
              <div className='overflow-hidden h-64 w-full rounded-3xl'>
                <img
                  src='https://picsum.photos/seed/picsum/200/300'
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <div className='w-full flex z-10'>
                <CalenderLogo
                  color='white'
                  className='block h-6 w-auto fill-current text-gray-800'
                />
                <h1 className='text-white font-bold text-xl'>{date}</h1>
              </div>
            </div>
            <div className='w-[70%]'>
              <div className='bg-blue-600 w-40 px-10 py-1 rounded-xl'>
                <h1 className='text-white font-bold'>Kegiatan</h1>
              </div>
              <Jarak tinggi={'h-5'} />
              <h1 className='text-white font-bold text-3xl'>{title}</h1>
              <Jarak tinggi={'h-4'} />
              <p className='text-white text-justify'>{content}</p>
            </div>
          </div>
        </div>
      </a>
    </Fragment>
  );
};

export default CardLeft;

const Jarak = ({ tinggi }) => {
  return <div className={tinggi}></div>;
};
