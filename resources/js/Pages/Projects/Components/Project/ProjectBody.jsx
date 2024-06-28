import React from "react"
import Jarak from "../Jarak"

const ProjectBody = (props) => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
            <Banner
                title={props.title}
                image={props.image}
            />
            <Jarak tinggi={'h-10'} />
            <Description
                children={props.children}
            />
        </div>
    )
}



const Banner = (props) => {
    return (
        <div className="relative w-full h-80 lg:h-96" >
            <img src={props.image} alt={props.alt} className="absolute inset-0 h-80 lg:h-96 max-w-[750px] md:max-w-[970px] lg:max-w-[1216px] w-full object-cover rounded-3xl opacity-50" />
            <div className="flex h-full justify-center items-center relative">
                <h2
                    className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center"
                    style={{ textShadow: '4px 5px 2px rgba(0, 0, 0, 1)' }}
                >{props.title}</h2>
            </div>
        </div>
    )
}

const Description = (props) => {
    return (
        <div className="relative max-w-screen-xl mx-auto lg:px-8 ">
            <h3 className="font-medium text-2xl md:text-3xl text-black">Project Description</h3>
            <p className="my-8 font-base text-black text-base md:text-lg">{props.children}</p>
        </div>
    )
}

export default ProjectBody