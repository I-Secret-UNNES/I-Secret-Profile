import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainCard from '../components/MainCard';
import BannerEvents from '../components/Bannerblog';
import SearchInput from '../components/SearchInput';
import GuestLayout from '@/Layouts/GuestLayout';
import Pagination from '../components/Pagination';

export default function blogs({}) {

    const images = [
        { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 1' },
        { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 2' },
        { src: 'https://picsum.photos/seed/picsum/200/300', alt: 'banner 3' },
        { src: 'https://picsum.photos/200/300?grayscale', alt: 'banner 4' },
      ];

    const initialContents = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Project 1",
            title: "Project 1",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "Chaewan",
            author: "Chaewan",
            date: "May 30 2024",
            publishtime: "3 Min",
            desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
            tristique quis.`,
        },
        {
            id : 2,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Project 2",
            title: "Project 2",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "ADika",
            author: "Adika",
            date: "May 27 2024",
            publishtime: "5 Min",
            desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus`
        },
        {
            id : 3,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Project 3",
            title: "Project 3",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "Kazuha",
            author: "Kazuha",
            date: "May 30 2024",
            publishtime: "3 Min",
            desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus`,
        },
        {
            id : 4,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Musyawarah Kerja I-SECRET ILKOM UNNES",
            title: "Musyawarah Kerja I-SECRET ILKOM UNNES",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "Azis",
            author: "Azis",
            date: "June 30 2024",
            publishtime: "3 Min",
            desc: `Musyawarah Kerja (Musker) Isecret Ilkom UNNES adalah sebuah forum pertemuan tahunan yang diselenggarakan oleh Ikatan Mahasiswa Sistem Komputer (Isecret) Universitas Negeri Semarang (UNNES). `,
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

             {/* Post List Start */}
             <Jarak tinggi={'h-10'} />
                <section className="w-full h-full lg:relative">
                    <div className="py-2">
                        {/* Card Start */}
                        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-none max-w-screen-xl mx-auto px-6 lg:px-8 relative">
                            {filteredContents.map((data) => (
                                <MainCard key={data.id}>
                                    <MainCard.Header image={data.image} alt={data.alt} />
                                    <MainCard.Body
                                        title={data.title}
                                        profilepic={data.profilepic}
                                        altprofile={data.altprofile}
                                        author={data.author}
                                        date={data.date}
                                        publishtime={data.publishtime}
                                    >{data.desc}</MainCard.Body>
                                </MainCard>
                            ))}
                        </div>
                        {/* Card End */}
                        <Pagination />
                    </div>
                </section>
                {/* Post List End */}
                </div>
    </GuestLayout>
    );
}
const Jarak = ({ tinggi }) => {
    return <div className={tinggi}></div>;
}