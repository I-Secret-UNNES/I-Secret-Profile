import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Izza({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Izza 
                </h2>
            }
        >
            <Head title="Izza" />

            <div className="py-12">
                <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8"> 
                    <div className="mb-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 font-bold text-gray-900 text-xl text-center">SELAMAT DATANG</div>
                        <h3 className="mx-5 mb-5 font-extrabold text-white py-2 bg-gray-400 rounded-full text-center">Website I - SECRET</h3>
                        <div className="flex justify-between">
                            <button className="bg-blue-600 hover:bg-blue-400 rounded px-5 py-1 text-white hover:text-black mx-5 mb-5 transition-colors duration-200">Start</button>
                            <button className="bg-gray-600 hover:bg-red-500 rounded px-5 py-1 text-white mx-5 mb-5 transition-colors duration-200">End</button>
                        </div>
                    </div>
                    <div className="mx-auto bg-slate-900 p-5 min-h-80 rounded-lg">
                        <h2 className="font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">Belajar Bahasa Pemrograman Website</h2>
                        <h4 className="text-center font-bold text-xl text-indigo-500 mb-7 mt-10">Daftar Materi</h4>
                        <div className="lg:mx-32 mt-8 md:flex lg:flex grid-cols-2 gap-y-4 gap-4">
                            <div className="min-h-40 min-w-30 mb-5 border-2 p-4 rounded-2xl hover:bg-indigo-800 transition-all duration-200">
                                <h5 className="mb-3 text-center font-bold text-md text-white">HTML</h5>
                                <p className="text-justify text-gray-300 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet aut culpa magnam libero in aliquam assumenda possimus, dignissimos vero.</p>
                                <a href="#" className="text-indigo-500 hover:text-blue-800">Lihat selengkapnya</a>
                            </div>
                            <div className="min-h-40 min-w-30 mb-5  border-2 p-4 rounded-2xl hover:bg-indigo-800 transition-all duration-200">
                                <h5 className="mb-3 text-center font-bold text-md text-white">CSS</h5>
                                <p className="text-justify text-gray-300 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet aut culpa magnam libero in aliquam assumenda possimus, dignissimos vero.</p>
                                <a href="#" className="text-indigo-500 hover:text-blue-800">Lihat selengkapnya</a>
                            </div>
                            <div className="min-h-40 min-w-30 mb-5 border-2 p-4 rounded-2xl hover:bg-indigo-800 transition-all duration-200">
                                <h5 className="mb-3 text-center font-bold text-md text-white">JavaScript</h5>
                                <p className="text-justify text-gray-300 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet aut culpa magnam libero in aliquam assumenda possimus, dignissimos vero.</p>
                                <a href="#" className="text-indigo-500 hover:text-blue-800">Lihat selengkapnya</a>
                            </div>
                        </div> 
                    </div>
                    <section className="mt-36 mb-36 py-10 rounded-2xl bg-gradient-to-b from-black to-pink-700">
                        <div className="mb-2 text-white font-base text-center">Website By</div>
                        <div className="bg-white bg-clip-text text-transparent text-3xl font-bold uppercase text-center">muhammad sulthonul izza</div>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
