import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import CardMob from '../Components/CardMob';
import CardLeft from '../Components/CardLeft';
import CardRight from '../Components/CardRight';
import { useState } from 'react';
import BannerEvents from '../Components/BannerEvents';
import SearchInput from '../Components/SearchInput';

export default function Events({ events }) {
  const images = [
    { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 1' },
    { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 2' },
    { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 3' },
    { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 4' },
  ];

  const initialContents = events;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContents, setFilteredContents] = useState(initialContents);

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = initialContents.filter(
      content =>
        content.title.toLowerCase().includes(value.toLowerCase()) ||
        content.description.toLowerCase().includes(value.toLowerCase())
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
            {filteredContents.map((event, index) => (
              <CardMob
                id={event.id}
                title={event.title}
                content={event.description}
                date={event.date}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </section>

        <section className='w-full hidden md:block'>
          {filteredContents.map((event, index) =>
            index % 2 === 1 ? (
              <CardRight
                id={event.id}
                date={event.date}
                title={event.title}
                content={event.description}
              />
            ) : (
              <CardLeft
                id={event.id}
                date={event.date}
                title={event.title}
                content={event.description}
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
