import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostCard from '../components/PostCard';
import BannerEvents from '../components/Bannerblog';
import SearchInput from '../components/SearchInput';
import GuestLayout from '@/Layouts/GuestLayout';

export default function blogs({}) {

    const images = [
        { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 1' },
        { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 2' },
        { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 3' },
        { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 4' },
      ];

    const initialContents = [
        {
            title: 'Post 1',
            author: 'Dika',
            date: '2021-10-10 00:00:00',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero'
        },
        {
            title: 'Post 2',
            author: 'Dika',
            date: '2021-10-10 00:00:00',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero'
        },
        {
            title: 'Post 3',
            author: 'Dika',
            date: '2021-10-10 00:00:00',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero'
        },
        {
            title: 'Post 4',
            author: 'Dika',
            date: '2021-10-10 00:00:00',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero'
        },
        {
            title: 'Post 5',
            author: 'Dika',
            date: '2021-10-10 00:00:00',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero'
        },
    ]
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
            <Head title="Our Posts" />

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
            Our <span className='text-[#FF6666]'>Blogs</span>
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

            {/* Render filtered blog posts */}
            <div className="flex justify-center items-center">
            <div>
            <section className='w-full'>
      {filteredContents.map((post, index) => (
        <PostCard key={index} post={post} index={index} />
      ))}
    </section>
    <Jarak tinggi={'h-10'} />
  </div>
</div>

        </div>
    </GuestLayout>
    );
}
const Jarak = ({ tinggi }) => {
    return <div className={tinggi}></div>;
}