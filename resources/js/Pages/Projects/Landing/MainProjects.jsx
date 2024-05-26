import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import MainCard from "./Components/MainCard";

export default function MainProjects({ auth }){
    return (
        <AuthenticatedLayout user={auth.user}>
        
            <Head title="Main Projects" />

            {/* Banner Start */}
            <section className="w-full h-full lg:relative">
                <div className="flex justify-center flex-col items-center py-52 w-full h-full bg-cover bg-center
                bg-[url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >
                    <h1 className="text-white text-7xl lg:text-8xl text-center font-bold">OUR PROJECTS</h1>
                </div>
            </section> 
            {/* Banner End */}

            {/* Post List Start */}
            <section className="w-full h-full lg:relative">
                <div className="py-10">
                    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative">
                        <nav>
                            <ul className="flex items-center justify-center gap-11 font-bold text-xl">
                                <li className="cursor-pointer text-gray-500 hover:text-[#ff6666] active:text-[#ff6666]">All Post</li>
                                <li className="cursor-pointer text-gray-500 hover:text-[#ff6666] active:text-[#ff6666]">Category</li>
                                <li className="cursor-pointer text-gray-500 hover:text-[#ff6666] active:text-[#ff6666]">Highlighted</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="py-2">
                    <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-none max-w-screen-xl mx-auto px-6 lg:px-8 relative">
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 1"
                            name="Project 1"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 1"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 2"
                            name="Project 2"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 2"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 3"
                            name="Project 3"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 3"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 4"
                            name="Project 4"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 4"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 5"
                            name="Project 5"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 5"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 6"
                            name="Project 6"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 6"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        <MainCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 7"
                            name="Project 7"
                            profilepic="https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            altprofile="Author 7"
                            author="Dasteen"
                            date="Jan 24 2024"
                            publishtime="3 Min"
                            desc="Lorem ipsum dolor sit amet consectetur. Consectetur risus 
                            quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
                            tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci 
                            neque quis porttitor eu amet."
                        />
                        
                    </div>
                </div>
            </section>
            {/* Post List End */}


        </AuthenticatedLayout>
    )
}