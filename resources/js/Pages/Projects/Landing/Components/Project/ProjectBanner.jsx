const ProjectBanner = (props) => {
    return (
        <div className="flex justify-center flex-col items-center py-10 w-full h-full" >
            <div className="rounded-3xl py-20 md:py-28 lg:py-32 px-5 w-[80%] lg:w-[70%] xl:w-[60%]
            bg-[url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            bg-cover bg-no-repeat bg-center">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">{props.title}</h2>
            </div>
        </div>
    )
}

export default ProjectBanner