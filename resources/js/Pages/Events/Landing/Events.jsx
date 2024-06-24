import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CardLeft from "../Components/CardLeft";
import CardRight from "../Components/CardRight";
import CardMob from "../Components/CardMob";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Events({ }) {
    const contents = [
        {
            "id" : 1,
            "title" : "Judul 1",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "date" : "4 juni 2024"
        },
        {
            "id" : 2,
            "title" : "Judul 2",
            "content" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto amet sequi! Molestiae, corrupti assumenda molestias maiores aliquid suscipit! Quod voluptate modi tempora odit architecto consectetur sequi vitae quasi consequatur!",
            "date" : "4 juni 2024"
        },
        {
            "id" : 3,
            "title" : "Judul 3",
            "content" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto amet sequi! Molestiae, corrupti assumenda molestias maiores aliquid suscipit! Quod voluptate modi tempora odit architecto consectetur sequi vitae quasi consequatur!",
            "date" : "4 juni 2024"
        },
        {
            "id" : 4,
            "title" : "Judul 4",
            "content" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto amet sequi! Molestiae, corrupti assumenda molestias maiores aliquid suscipit! Quod voluptate modi tempora odit architecto consectetur sequi vitae quasi consequatur!",
            "date" : "4 juni 2024"
        },
        {
            "id" : 5,
            "title" : "Judul 5",
            "content" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto amet sequi! Molestiae, corrupti assumenda molestias maiores aliquid suscipit! Quod voluptate modi tempora odit architecto consectetur sequi vitae quasi consequatur!",
            "date" : "4 juni 2024"
        }
    ]
    return (
        // <GuestLayout>
        <GuestLayout>


        <div className="bg-white">

            <Head title="Events" />

            <section className="lg:w-full lg:h-full lg:bg-orange-200 lg:relative">
                <div className="flex justify-center flex-col items-center w-full py-36 lg:flex lg:justify-center lg:flex-col lg:items-center lg:w-full lg:h-full bg-cover bg-[url('https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
                    <h1>
                        <span className="text-black text-4xl font-bold mx-2">
                            Our
                        </span>
                        <span className="text-red-500 text-4xl font-bold">
                             Events
                        </span>
                    </h1>
                    <div className="bg-blue-600 rounded-2xl py-10 px-5 w-[60%] lg:w-[40%] lg:h-full lg:rounded-2xl lg:flex lg:items-center">
                        <h1 className="text-center text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem magnam facilis illum? Sequi quia
                            pariatur, officia nulla exercitationem eaque omnis
                            incidunt dicta libero expedita deserunt provident
                        </h1>
                    </div>
                </div>
            </section>

            {/* Jarak */}
            <Jarak tinggi={"h-10"}></Jarak>

            {/* navigasi */}
            <div className="w-[80%] mx-auto">
                <div className="flex justify-around  md:w-[50%] md:mx-auto">
                    <h1 className="text-black font-bold">All</h1>
                    <h1 className="text-black font-bold">Program Kerja</h1>
                    <h1 className="text-black font-bold">Kegiatan</h1>
                </div>
            </div>

            <Jarak tinggi={"h-10"}></Jarak>

            {/* card  list*/}
            <section className="w-full ">
                <div className="block md:hidden">
                    {contents.map((content) => (
                    <CardMob
                    key={content.id}
                        title={content.title}
                        content={content.content }
                        date={content.date}
                    />
                ))}

                </div>
            </section>

            {/* LAYAR LAPTOP */}
            <section className="w-full ">
            {contents.map((content, index) => (
                 index % 2 === 1 ? ( // Jika indeks genap, tampilkan CardRight
                    <CardRight
                        key={content.id}
                        tanggal={content.date}
                        judul={content.title}
                        konten={content.content}
                    />
                ) : ( // Jika indeks ganjil, tampilkan CardLeft
                    <CardLeft
                        key={content.id}
                        title={content.title}
                        content={content.content}
                        date={content.date}
                    />
                )
            ))}
            </section>
        </div>
        {/* // </GuestLayout> */}
        </GuestLayout>

    );
}

const Jarak = ({ tinggi }) => {
    return <div className={tinggi}></div>;
}


