import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ProjectsCard from "./Components/ProjectsCard";

export default function Projects({ auth }){
    return (
        <AuthenticatedLayout user={auth.user}>
        
            <Head title="Projects" />

            <section className="w-full h-full lg:relative">
                <div className="flex justify-center flex-col items-center py-10 w-full h-full" >
                    <h1 className="text-black text-3xl lg:text-4xl text-center font-bold mb-5">Our <span className="text-[#ff6666]">Projects</span></h1>
                    <div className="rounded-3xl py-20 md:py-28 lg:py-32 px-5 w-[80%] lg:w-[70%] xl:w-[60%]
                    bg-[url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                    bg-cover bg-no-repeat bg-center " >
                        <h2 className="text-white font-bold text-5xl lg:text-6xl xl:text-7xl text-center">Project Name</h2>
                    </div>
                </div>
            </section>

            <div className="py-5">
                {/* Project Description */}
                <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative">    
                    <h3 className="font-medium text-3xl text-black">Project Description</h3>
                    <p className="my-8 font-bold text-black text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="my-8 font-base text-black text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="my-8 font-base text-black text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="my-8 font-base text-black text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                {/* Recent Projects */}
                <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative">
                    <h2 className="font-bold text-4xl text-black text-center lg:text-left py-3">Recent <span className="text-[#ff6666]">Projects</span></h2>
                    <div className="w-96 border-t-4 border-solid border-gray-700 rounded-full absolute ml-[280px] mt-[-32px] hidden lg:block"></div>
                    <div className="flex flex-wrap lg:grid-cols-3 md:grid-cols-2 gap-3">
                        <ProjectsCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 1"
                            name="Project 1"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        />
                        <ProjectsCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 2"
                            name="Project 2"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        />
                        <ProjectsCard
                            image="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
                            alt="Project 3"
                            name="Project 3"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}