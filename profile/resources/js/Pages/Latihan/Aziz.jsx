import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Timeline from "./components/Timeline";
import Star from "./components/Star";
import Steps from "./components/Steps";
import TimelineText from "./components/TimelineText";
import Phone from "./components/Phone";

export default function Aziz({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Raturu
                </h2>
            }
        >
            <Head title="Aziz" />

            {/* banner */}
            <section className="h-96 w-full bg-orange-400 relative">
                <img
                    src="https://picsum.photos/200/300?grayscale"
                    alt=""
                    className="w-full h-full bg-contain"
                />
                <h1 className="absolute left-4 bottom-0 text-center text-white">
                    <span className=" font-bold text-5xl ">About </span>
                    <span className=" font-bold text-5xl text-red-500">Us</span>
                </h1>
            </section>

            {/* Jarak */}
            <section className="h-20"></section>

            <section className="flex flex-wrap ">
                <div className="w-[50%] h-80 ">
                    <img
                        src="https://picsum.photos/200/300?grayscale"
                        alt=""
                        className="w-[80%] h-full mx-auto"
                    />
                </div>
                <div className="w-[50%]">
                    <div className="w-[70%] mx-auto">
                        <h1 className="text-3xl font-bold text-black">
                            How we started
                        </h1>
                        <section className="h-8"></section>

                        <h1 className="text-black text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quas ut vitae sint, quaerat aperiam et. Aut
                            voluptate eum cupiditate illo asperiores mollitia,
                            temporibus voluptas accusantium! Dignissimos,
                            laudantium iusto? Ut aut praesentium neque,
                            excepturi molestiae cupiditate minus voluptate
                            inventore sed quod tempore sapiente laudantium quae
                            amet quisquam repellat itaque voluptas illum commodi
                            error architecto consequatur accusamus suscipit!
                            Totam, vitae voluptas! Quia eaque illum laborum
                            quaerat dolorem. Corporis iusto sit ipsum, volupta,
                            repudiandae dolorum voluptates cupiditate expedita
                            quos fuga?
                        </h1>
                    </div>
                </div>
            </section>

            {/* Jarak */}
            <section className="h-44"></section>

            {/* hero */}
            <div className="h-96  w-full flex bg-gray-800">
                <div className="w-[50%] py-24 px-36">
                    <div>
                        <h1 className="text-white font-bold text-5xl">
                            Hello, Aziz
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-white text-3xl">
                            Welcome to your{" "}
                            <span className="text-blue-500 font-bold">
                                Journey
                            </span>
                        </h1>
                    </div>
                    <div className="h-10"></div>
                    <div>
                        <button className="mx-4 px-6 py-3 bg-blue-600 rounded-3xl hover:opacity-40 transition-all duration-500">
                            <h1 className="text-white font-bold">Contact</h1>
                        </button>
                        <button className=" mx-4 px-6 py-2 border-2 border-solid border-blue-600 rounded-3xl hover:opacity-40 transition-all duration-500 hover:bg-blue-300">
                            <h1 className="text-blue-600 font-bold">View</h1>
                        </button>
                    </div>
                </div>
                <div className="w-[50%] flex justify-center items-center ">
                    <div className="w-64 bg-blue-300 h-64 rounded-full overflow-hidden">
                        <img
                            src="https://picsum.photos/seed/picsum/200/300"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Jarak */}
            <section className="h-20"></section>

            {/* TIMELINE */}
            <Timeline />

            {/* Jarak */}
            <section className="h-20"></section>

            {/* Star */}
            <Star />

            {/* Jarak */}
            <section className="h-12"></section>

            {/* Steps */}
            <Steps number_1={"Registrationn"} />

            {/* Jarak */}
            <section className="h-12"></section>

            {/* Line */}
            <section className="h-0.5 bg-gray-300 w-[80%] mx-auto"></section>

            {/* Jarak */}
            <section className="h-16"></section>

            {/* Timeline Text */}
            <TimelineText />

            {/* Jarak */}
            <section className="h-14"></section>

            {/* Jarak */}
            <section className="h-28"></section>

            {/* Phone */}
            <Phone />

            {/* Jarak */}
            <section className="h-20"></section>
        </AuthenticatedLayout>
    );
}
