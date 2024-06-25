import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function AboutUs({ auth }) {
    const [selectedTab, setSelectedTab] = useState('visiMisi'); // State untuk mengatur tab yang dipilih

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
        <AuthenticatedLayout user={auth.user}>
            <Head title="About Us" />

            {/* Banner */}
            <section className="h-[calc(100vh-4rem)] w-full bg-orange-400 relative">
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
                        <Spacer height="h-4" />
                        <h1 className="font-bold text-black text-md">
                            Sejarah Singkat
                        </h1>
                        <p className="text-black text-md text-justify">
                            I-SECRET (Information System and Computer
                            Engineering Research and Technology) adalah sebuah
                            komunitas riset yang berfokus pada teknologi ilmu
                            komputer. Komunitas ini bermula dari lomba Program
                            Kreativitas Mahasiswa (PKM) pada tahun 2017. Setelah
                            mendapatkan hasil yang memuaskan, para peserta dan
                            pembimbing lomba tersebut memutuskan untuk
                            mengembangkan ide dan inovasi mereka lebih lanjut.
                        </p>
                    </div>
                </div>
            </section>

            <Spacer height="h-10" />

            <div>ketua dan wakil ketua</div>

            <Spacer height="h-10" />

            {/* Navigation Tabs */}
            <div className="flex bg-orange-200 justify-around">
                <h1
                    className={`cursor-pointer ${selectedTab === 'visiMisi' ? 'font-bold' : ''}`}
                    onClick={() => setSelectedTab('visiMisi')}
                >
                    Visi Misi
                </h1>
                <h1
                    className={`cursor-pointer ${selectedTab === 'value' ? 'font-bold' : ''}`}
                    onClick={() => setSelectedTab('value')}
                >
                    Value
                </h1>
            </div>

            <Spacer height="h-10" />

            {/* Content based on selected tab */}
            {selectedTab === 'visiMisi' ? (
                <div className="px-8">
                    <h2 className="text-xl font-bold">Visi</h2>
                    <p>Menjadi wadah unggulan dan garda terdepan bagi mahasiswa Ilmu Komputer Universitas Negeri Semarang dalam pengembangan kemampuan teknologi, melalui divisi Research, Media, Networking, dan Programming di tingkat universitas.</p>
                    <h2 className="text-xl font-bold mt-4">Misi</h2>
                    <ol className="list-decimal list-inside">
                        <li>Meningkatkan kapabilitas mahasiswa untuk berpikir kritis dan adaptif dalam menghadapi lanskap teknologi yang terus berkembang pesat.</li>
                        <li>Mendorong dan mengasah kreativitas mahasiswa untuk berinovasi dan menciptakan solusi-solusi terdepan dalam dunia teknologi.</li>
                        <li>Membangun konektivitas yang kokoh melalui komunitas yang positif, inklusif, dan kolaboratif, demi menciptakan lingkungan belajar yang mendukung pertumbuhan profesional dan pribadi mahasiswa.</li>
                    </ol>
                </div>
            ) : (
                <div className="px-8">
                    <h2 className="text-xl font-bold">Value</h2>
                    <p>Di I-SECRET, kami memegang teguh nilai-nilai inovasi tanpa batas, pembelajaran yang adaptif, dan komitmen pada keunggulan untuk menghadapi perubahan. Dengan semangat kolaborasi yang kuat, kami membangun komunitas inklusif yang menghargai setiap ide dan suara, memberi wadah setiap anggota untuk berkembang menjadi pemimpin masa depan yang bijak dan berwawasan luas. Melalui dedikasi pada keunggulan dan integritas tinggi, kami berkomitmen menjadi garda terdepan dalam pengembangan teknologi di Unnes. Bersama-sama, kita merajut inovasi, menggali potensi, dan membangun masa depan yang gemilang serta siap menghadapi tantangan global dengan pemikiran kritis dan adaptif dalam dunia yang dinamis.</p>
                </div>
            )}

            <Spacer height="h-96" />

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
