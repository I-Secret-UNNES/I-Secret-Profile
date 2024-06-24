const ProjectDescription = (props) => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative">
            <h3 className="font-medium text-2xl md:text-3xl text-black">Project Description</h3>
            <p className="my-8 font-base text-black text-base md:text-lg">{props.children}</p>
        </div>
    )
}

export default ProjectDescription