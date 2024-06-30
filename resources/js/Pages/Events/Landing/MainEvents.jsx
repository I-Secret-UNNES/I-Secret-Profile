import CalenderLogo from '@/Components/icon/CalenderLogo';
import LocationLogo from '@/Components/icon/LocationLogo';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import SearchInput from '../Components/SearchInput';
import { useState } from 'react';
import BlueDiv from '../Components/BlueDiv';
import Jarak from '../Components/Jarak';

const MainEvents = ({event}) => {
  const Hashtags = ['hastag 1', 'hastag 2', 'hasta 3', 'hastag 4'];
  console.log(event)
  const initialContents = [
    {
      id: 1,
      title: 'Judul 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: '4 Juni 2024',
    },
    {
      id: 2,
      title: 'Judul 2',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
      date: '4 Juni 2024',
    },
    {
      id: 3,
      title: 'Judul 3',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
      date: '4 Juni 2024',
    },
    {
      id: 4,
      title: 'Judul 4',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
      date: '4 Juni 2024',
    },
    {
      id: 5,
      title: 'Musyawarah Kerja',
      content:
        'Musyawarah Kerja (Musker) I-Secret Ilkom UNNES adalah sebuah forum tahunan yang diselenggarakan oleh Ikatan Mahasiswa Sistem Komputer (I-Secret) Universitas Negeri Semarang (UNNES). Acara ini merupakan ajang penting bagi seluruh anggota I-Secret Ilkom untuk mengevaluasi kinerja organisasi selama satu tahun terakhir dan merencanakan program kerja untuk tahun berikutnya.',
      date: '4 Juni 2024',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContents, setFilteredContents] = useState(initialContents);

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = initialContents.filter(
      content =>
        content.title.toLowerCase().includes(value.toLowerCase()) ||
        content.content.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredContents(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredContents(initialContents);
  };
  return (
    <GuestLayout>
      <section className='h-28'>
        <img
          src='https://picsum.photos/seed/picsum/200/300'
          alt='banner main'
          className='w-full h-full object-cover'
        />
      </section>

      <Jarak tinggi={'h-16'} />

      <section className='w-[85%]  mx-auto  py-4 md:flex md:flex-wrap md:justify-between'>
        <section className='md:w-[60%]'>
          <BlueDiv title={'Program Kerja'} />

          <Jarak tinggi={'h-10'} />

          <h1 className='font-bold text-xl text-black'>
            {event.title}
          </h1>

          <Jarak tinggi={'h-10'} />

          <div className='h-[300px] md:h-[500px]'>
            <img
              src='https://picsum.photos/seed/picsum/600/400'
              alt='Logo I-Secret'
              className='w-full h-full object-cover'
            />
          </div>

          <Jarak tinggi={'h-3'} />

          <div className='flex '>
            <CalenderLogo
              color='black'
              className='block h-6 w-auto fill-current text-gray-800'
            />
            <h1 className='ml-2 font-bold text-black'>{event.date}</h1>
          </div>

          <Jarak tinggi={'h-3'} />

          <div className='flex '>
            <LocationLogo className='block h-5 w-auto fill-current text-gray-800' />
            <h1 className='ml-2 font-bold text-black'>{event.location}</h1>
          </div>

          <Jarak tinggi={'h-5'} />

          <p dangerouslySetInnerHTML={{ __html: event.description }} className='text-black'></p>
        </section>

        <Jarak tinggi={'h-20'} />

        <section className='md:w-[35%]'>
          <SearchInput
            lebar={'mainevents'}
            value={searchTerm}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
            placeholder='Search ...'
          />

          <Jarak tinggi={'h-10'} />

          <h1 className='text-black font-bold text-xl'>Other Events</h1>

          <Jarak tinggi={'h-5'} />

          <section className=' w-full'>
            {filteredContents.map((content, index) => (
              <h1 className='my-2 text-black'>{content.title}</h1>
            ))}
          </section>

          <Jarak tinggi={'h-10'} />

          <h1 className='text-black font-bold text-xl'>Hashtag</h1>

          <Jarak tinggi={'h-5'} />

          <div className='w-full flex flex-wrap'>
            {Hashtags.map((hashtag, index) => (
              <BlueDiv key={index} title={hashtag} margin={'mx-1 my-0.5'} />
            ))}
          </div>
        </section>
      </section>

      <Jarak tinggi={'h-20'} />
    </GuestLayout>
  );
};

export default MainEvents;
