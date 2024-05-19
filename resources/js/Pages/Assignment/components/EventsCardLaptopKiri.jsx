import React, { Fragment } from "react";

const EventsCardLaptopKiri = ({tanggal, judul, konten}) => {
    return (
        <Fragment>
            <div className="hidden md:block mb-14 ">
                <div className="w-[90%] mx-auto bg-blue-700 rounded-3xl px-24 pt-10 pb-7">
                    <div className="flex  mx-auto">
                        <div className="w-[30%]  mr-10 flex items-end flex-col">
                            <div className="overflow-hidden h-64  w-full rounded-3xl">
                                <img
                                    src="https://picsum.photos/seed/picsum/200/300"
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                            <div className=" w-full">
                                <h1 className="text-white font-bold text-xl">
                                    {tanggal}
                                </h1>
                            </div>
                        </div>
                        <div className="w-[70%] ">
                            <div className="bg-blue-600 w-40 px-10 py-1 rounded-xl">
                                <h1 className="text-white  font-bold">
                                    Kegiatan
                                </h1>
                            </div>
                            <Jarak tinggi={"h-5"} />
                            <h1 className="text-white font-bold text-3xl">
                                {judul}
                            </h1>
                            <Jarak tinggi={"h-4"} />
                            <p className="text-white text-justify">
                              {konten}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EventsCardLaptopKiri;

const Jarak = ({ tinggi }) => {
    return <div className={`${tinggi}`}></div>;
};
