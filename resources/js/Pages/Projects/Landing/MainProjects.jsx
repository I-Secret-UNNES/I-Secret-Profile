import { Head } from "@inertiajs/react";
import AllProjectsSection from "./Sections/AllProjectsSection";
import Pagination from "./Components/Pagination";
import MainBanner from "./Components/MainBanner";
import Navigation from "./Components/Navigation";


export default function MainProjects({ auth }) {
    return (
        <div className="bg-white font-poppins">
            <Head title="Main Projects" />

            {/* Banner Start */}
            <MainBanner />
            {/* Banner End */}

            {/* Post List Start */}
            <section className="w-full h-full lg:relative">
                <div className="py-16">
                    <Navigation/>
                </div>
                <div className="py-2">
                    <AllProjectsSection />
                    <Pagination />
                </div>
                <div className="pt-5 pb-24">
                    <div className="w-20 md:w-36 xl:w-[210px] border-primary border-4 xl:border-[6px]"></div>
                    <div className="absolute mx-20 md:mx-36 xl:mx-[207px] my-[-24px] md:my-[-36px] xl:my-[-44px] w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 border-primary border-[8px] xl:border-[10px] rounded-full"></div>
                </div>
            </section>
            {/* Post List End */}
        </div>

    )
}