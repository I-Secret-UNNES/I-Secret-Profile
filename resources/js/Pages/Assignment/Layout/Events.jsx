import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Events({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Events" />

                <section className="lg:w-full lg:h-full lg:bg-orange-200 lg:relative">
                    <div className="flex justify-center flex-col items-center w-full py-36 lg:flex lg:justify-center lg:flex-col lg:items-center lg:w-full lg:h-full bg-cover bg-[url('https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
                        <h1>
                            <span className="text-black text-4xl font-bold">
                                Our
                            </span>
                            <span className="text-black text-4xl font-bold">
                                Events
                            </span>
                        </h1>
                        <div className="bg-blue-600 rounded-2xl py-10 px-5 w-[60%] lg:w-[40%] lg:h-full lg:rounded-2xl lg:flex lg:items-center">
                            <h1 className="text-center text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem magnam facilis
                                illum? Sequi quia pariatur, officia nulla
                                exercitationem eaque omnis incidunt dicta libero
                                expedita deserunt provident
                            </h1>
                        </div>
                    </div>
                </section>

            <h1>halo</h1>
        </AuthenticatedLayout>
    );
}
