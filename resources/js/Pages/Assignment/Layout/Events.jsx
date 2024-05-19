import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import EventsCard from "../components/EventsCard";
import EventsCardLaptop from "../components/EventsCardLaptopKanan";
import EventsCardLaptopKiri from "../components/EventsCardLaptopKiri";
import EventsCardLaptopKanan from "../components/EventsCardLaptopKanan";

export default function Events({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
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
            <div className="h-10"></div>

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
                    <EventsCard
                        judul={"Judul satu"}
                        konten={
                            "lorem lorem ifuidfdfisdf dushfa odsfdsahohas fodishu hf dihfiudhfoiudh fuaosdf asdifhiduafh uioads hfiouhadsufh dsafhF"
                        }
                        tanggal={"4 juni 2024"}
                    />
                    <EventsCard
                        judul={"Judul satu"}
                        konten={
                            "lorem lorem ifuidfdfisdf dushfa odsfdsahohas fodishu hf dihfiudhfoiudh fuaosdf asdifhiduafh uioads hfiouhadsufh dsafhF"
                        }
                        tanggal={"4 juni 2024"}
                    />
                </div>
            </section>

            {/* LAYAR LAPTOP */}
            <section className="w-full ">
                <EventsCardLaptopKiri
                    tanggal={"4 June 2024"}
                    judul={"Judul Satu"}
                    konten={
                        "londihfua  dkjfbug a iudhau fdhifohfuah s sdh idosfhdsdshfasdhf uih aosifdish addfoidufio f asdfopdi fpodg dsfudhoigudsfgyg y sdiigh8d fa8ygydgoadsgyf8giushdfiuh dufuifshu fadoshfoafhdoas foiu sdiahfahds fuduisfhdsh udh "
                    }
                />
                <EventsCardLaptopKanan
                    tanggal={"4 June 2024"}
                    judul={"Judul Satu"}
                    konten={
                        "londihfua  dkjfbug a iudhau fdhifohfuah s sdh idosfhdsdshfasdhf uih aosifdish addfoidufio f asdfopdi fpodg dsfudhoigudsfgyg y sdiigh8d fa8ygydgoadsgyf8giushdfiuh dufuifshu fadoshfoafhdoas foiu sdiahfahds fuduisfhdsh udh "
                    }
                />
               
            </section>

            <h1>hao</h1>
        </AuthenticatedLayout>
    );
}

const Jarak = ({ tinggi }) => {
    return <div className={`${tinggi}`}></div>;
};
