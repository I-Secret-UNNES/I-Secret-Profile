import React from "react";

const CardMob = ({ judul, konten, tanggal }) => {
    return (
        <div className="w-[90%] mx-auto bg-blue-800 mb-10 rounded-2xl h-full flex justify-center ">
            <div className="w-full h-full px-8 py-6">
                <div className="px-8 py-1 bg-blue-600 rounded-3xl ">
                    <h1 className="text-white text-center   font-bold">
                        Kegiatan
                    </h1>
                </div>
                <Jarak tinggi={"h-4"}></Jarak>
                <div className="rounded-3xl overflow-hidden h-80">
                    <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <Jarak tinggi={"h-4"} />
                <h1 className="text-white font-bold text-xl">{tanggal}</h1>
                <Jarak tinggi={"h-4"} />
                <h1 className="text-white font-bold text-3xl">{judul}</h1>
                <Jarak tinggi={"h-4"} />
                <p>{konten}</p>
            </div>
        </div>
    );
};

export default CardMob;

const Jarak = ({ tinggi }) => {
    return <div className={tinggi}></div>;
}
