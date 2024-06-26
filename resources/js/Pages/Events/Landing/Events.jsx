import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import CardMob from '../Components/CardMob';
import CardLeft from '../Components/CardLeft';
import CardRight from '../Components/CardRight';
import { useState } from 'react';
import BannerEvents from '../Components/BannerEvents';
import SearchInput from '../Components/SearchInput';

export default function Events({}) {
  const images = [
    { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 1' },
    { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 2' },
    { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 3' },
    { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 4' },
  ];

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
      <div className='bg-white'>
        <Head title='Events' />
        <style>
          {`
            * {
              scrollbar-width: none; /* Untuk Firefox */
              -ms-overflow-style: none;  /* Untuk Internet Explorer dan Edge */
            }
            *::-webkit-scrollbar {
              display: none; /* Untuk Chrome, Safari, dan Opera */
            }
          `}
        </style>
        <BannerEvents images={images} />

        <Jarak tinggi={'h-10'} />

        <h1
          className='font-bold text-4xl text-center text-black'
          style={{ textShadow: '2px 5px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Our <span className='text-[#FF6666]'>Events</span>
        </h1>

        <Jarak tinggi={'h-5'} />

        <SearchInput
          lebar={'events'}
          value={searchTerm}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
          placeholder='Search ...'
        />

        <Jarak tinggi={'h-10'} />

        <section className='w-full'>
          <div className='block md:hidden'>
            {filteredContents.map((content, index) => (
              <CardMob
                key={content.id}
                title={content.title}
                content={content.content}
                date={content.date}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </section>

        <section className='w-full hidden md:block'>
          {filteredContents.map((content, index) =>
            index % 2 === 1 ? (
              <CardRight
                key={content.id}
                date={content.date}
                title={content.title}
                content={content.content}
              />
            ) : (
              <CardLeft
                key={content.id}
                date={content.date}
                title={content.title}
                content={content.content}
              />
            )
          )}
        </section>
      </div>
    </GuestLayout>
  );
}

const Jarak = ({ tinggi }) => {
  return <div className={tinggi}></div>;
};
