import { Head } from "@inertiajs/react";
import MainCard from "../Components/MainCard";
import Pagination from "../Components/Pagination";
import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import BannerProjects from "../Components/BannerProjects";
import SearchInput from "../Components/SearchInput";
import Jarak from "../Components/Jarak";


export default function MainProjects({}) {
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
            altprofile: "dasteen",
            author: "Dasteen",
            date: "Jan 24 2024",
            publishtime: "3 Min",
            desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
            tristique quis.`,
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Project 2",
            title: "Project 2",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "yusuf",
            author: "Yusuf",
            date: "Jan 25 2024",
            publishtime: "10 Min",
            desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
            tristique quis.`,
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Project 3",
            title: "Project 3",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "ibnu",
            author: "Ibnu",
            date: "Jan 23 2024",
            publishtime: "10 Min",
            desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
            tristique quis.`,
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
            alt: "Project Website",
            title: "Project Website",
            profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            altprofile: "izza",
            author: "Izza",
            date: "Jun 29 2024",
            publishtime: "11 Min",
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        }
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContents, setFilteredContents] = useState(initialContents);

    const handleSearchChange = project => {
        const value = project.target.value;
        setSearchTerm(value);
        const filtered = initialContents.filter(
            content =>
                content.title.toLowerCase().includes(value.toLowerCase()) ||
                content.desc.toLowerCase().includes(value.toLowerCase()) ||
                content.author.toLowerCase().includes(value.toLowerCase()) ||
                content.date.toLowerCase().includes(value.toLowerCase()) ||
                content.publishtime.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredContents(filtered);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setFilteredContents(initialContents);
    };

    return (
        <GuestLayout>
            <div className="bg-white font-poppins">
                <Head title="Main Projects" />
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
                {/* Banner Start */}
                <BannerProjects images={images} />
                {/* Banner End */}
                <Jarak tinggi={'h-10'} />

                <h1
                    className='font-bold text-4xl text-center text-black'
                    style={{ textShadow: '2px 5px 4px rgba(0, 0, 0, 0.5)' }}
                >
                    Our <span className='text-[#FF6666]'>Projects</span>
                </h1>

                <Jarak tinggi={'h-5'} />
                <SearchInput
                    lebar={'projects'}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onClear={handleClearSearch}
                    placeholder='Search ...'
                />

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
                    <div className="pt-5 pb-24">
                        <div className="w-20 md:w-36 xl:w-[210px] border-primary border-4 xl:border-[6px]"></div>
                        <div className="absolute mx-20 md:mx-36 xl:mx-[207px] my-[-24px] md:my-[-36px] xl:my-[-44px] w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 border-primary border-[8px] xl:border-[10px] rounded-full"></div>
                    </div>
                </section>
                {/* Post List End */}
            </div>
        </GuestLayout>
    )
}