import { Head } from "@inertiajs/react";
import Pagination from "./Components/Pagination";
import MainBanner from "./Components/MainBanner";
import CategorySection from "./Sections/CategorySection";
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
                    <Navigation />
                </div>
                <div className="py-2">
                    <CategorySection />
                    <Pagination />
                </div>
            </section>
            {/* Post List End */}
        </div>
    )
}
