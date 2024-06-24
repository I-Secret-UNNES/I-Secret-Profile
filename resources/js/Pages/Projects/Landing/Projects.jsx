// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import RecentProjects from "./Components/Project/RecentProjects";
import ProjectSection from "./Sections/ProjectSection";

export default function Projects({ auth }){
    return (
        // <AuthenticatedLayout user={auth.user}>
        <div className="bg-white font-poppins">
        
            <Head title="Projects" />

            <section className="w-full h-full lg:relative">
                <h1 className="text-black text-3xl lg:text-4xl text-center font-bold pt-10">Our <span className="text-primary">Projects</span></h1>
                <ProjectSection/>
                <RecentProjects/>
            </section>
        </div>
        // </AuthenticatedLayout>
    );
}