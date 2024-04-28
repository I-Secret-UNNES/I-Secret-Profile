import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

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

            <div className="h-96  w-full flex bg-gray-800">
                <div className="w-[50%] py-24 px-36">
                    <div>
                        <h1 className="text-white font-bold text-5xl">
                            Hello, Aziz
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-white text-3xl">
                            Welcome to your <span className="text-blue-500 font-bold">Journey</span>
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
        </AuthenticatedLayout>
    );
}
