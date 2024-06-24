import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function AboutUs({ auth }) {
    // Fungsi untuk menggeser carousel ke kiri
    const scrollLeft = () => {
        document
            .getElementById("carousel")
            .scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    };

    // Fungsi untuk menggeser carousel ke kanan
    const scrollRight = () => {
        document
            .getElementById("carousel")
            .scrollBy({ left: window.innerWidth, behavior: "smooth" });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Raturu
                </h2>
            }
        >
            <Head title="About Us" />

            {/* Banner */}
            <section className="h-96 w-full bg-orange-400 relative">
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
                <h1 className="absolute left-4 bottom-0 text-center text-white">
                    <span className="font-bold text-5xl">About </span>
                    <span className="font-bold text-5xl text-red-500">Us</span>
                </h1>
            </section>

            {/* Spacer Component */}
            <Spacer height="h-20" />

            {/* Content Section */}
            <section className="md:flex md:flex-wrap px-[30px]">
                <div className="md:w-1/2 h-80 w-full">
                    <img
                        src="https://picsum.photos/200/300?grayscale"
                        alt="History"
                        className="w-full md:w-4/5 h-full mx-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold text-black mt-4">
                            How we started
                        </h1>
                        <Spacer height="h-8" />
                        <h1 className="font-bold text-black text-md">
                            Sejarah Singkat
                        </h1>
                        <p className="text-black text-md text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </section>

            <Spacer height="h-44" />

            {/* Carousel Section */}
            <div className="relative w-full overflow-hidden">
                <button
                    className="absolute left-0 z-10 p-2 bg-gray-800 text-white"
                    onClick={scrollLeft}
                >
                    &lt;
                </button>
                <button
                    className="absolute right-0 z-10 p-2 bg-gray-800 text-white"
                    onClick={scrollRight}
                >
                    &gt;
                </button>
                <div
                    className="flex overflow-x-auto scroll-smooth snap-x"
                    id="carousel"
                >
                    {/* Items for the carousel */}
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            className="snap-start w-[20%] h-80 bg-orange-200 mx-4 flex-shrink-0"
                            key={index}
                        >
                            Item {index + 1}
                        </div>
                    ))}
                </div>               
            </div>

            <Spacer height="h-44" />
        </AuthenticatedLayout>
    );
}

const Spacer = ({ height }) => {
    return <div className={`${height}`}></div>;
};

export default AboutUs;
