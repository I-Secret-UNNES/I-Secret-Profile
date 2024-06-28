import { Head } from "@inertiajs/react";
import RecentProjects from "../Components/Project/RecentProjects";
import ProjectBody from "../Components/Project/ProjectBody";
import GuestLayout from "@/Layouts/GuestLayout";
import Jarak from "../Components/Jarak";

export default function Projects({ }) {

    const datas = [
        {
            id: 1,
            title: "Project Website",
            alt: "Project Website",
            image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            children: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, <br />, <br />,

                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, <br />, <br />,

                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, <br />, <br />,

                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            ]
        }
    ]

    return (
        <GuestLayout>

            <div className="bg-white font-poppins">

                <Head title="Projects" />
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
                <section className="w-full h-full lg:relative">
                    <h1 className="text-black text-3xl lg:text-5xl text-center font-bold pt-10">Our <span className="text-primary">Projects</span></h1>
                    <div className="py-5">
                        {datas.map((data) => (
                            <>
                                <ProjectBody
                                    key={data.id}
                                    title={data.title}
                                    image={data.image}
                                    alt={data.alt}
                                    children={data.children}
                                />
                            </>
                        ))}
                    </div>
                    <Jarak tinggi={'h-10'}/>
                    <RecentProjects />
                    <Jarak tinggi={'h-32'}/>
                </section>
            </div>
        </GuestLayout >
    );
}