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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> 
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 font-bold text-gray-900 text-xl text-center">SELAMAT DATANG</div>
                        <h3 className="mx-5 mb-5 font-extrabold text-white py-2 bg-gray-400 rounded-full text-center">Website I - SECRET</h3>
                        <div className="flex justify-between">
                            <button className="bg-blue-600 hover:bg-blue-400 rounded px-5 py-1 text-white hover:text-black mx-5 mb-5 transition-colors duration-200">Start</button>
                            <button className="bg-gray-600 hover:bg-red-500 rounded px-5 py-1 text-white mx-5 mb-5 transition-colors duration-200">End</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
