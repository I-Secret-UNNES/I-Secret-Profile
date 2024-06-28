const ProjectsCard = ( props ) => {
    return(
        <div className="wps-auto md:w-[45%] lg:w-[30%] my-3 flex-grow">
            <img src={props.image} alt={props.alt} className="mx-auto" />
            <h4 className="font-semibold text-2xl text-black py-3">{props.name}</h4>
            <p className="font-base text-medium text-black">{props.desc}</p>
        </div>
    )
}

export default ProjectsCard