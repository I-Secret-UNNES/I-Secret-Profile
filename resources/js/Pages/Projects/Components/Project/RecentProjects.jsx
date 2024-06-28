import ProjectsCard from "./ProjectsCard"

const datas = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Project 1"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Project 2"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Project 3"
    }
]

const RecentProjects = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 relative">
            <h2 className="font-bold text-4xl text-black text-center lg:text-left py-3">Recent <span className="text-[#ff6666]">Projects</span></h2>
            <div className="w-96 border-t-4 border-solid border-gray-700 rounded-full absolute ml-[300px] mt-[-32px] hidden lg:block"></div>
            <div className="flex flex-wrap lg:grid-cols-3 md:grid-cols-2 gap-3">
                {datas.map((data) => (
                    <ProjectsCard
                        key={data.id}
                        image={data.image}
                        alt={data.alt}
                        name={data.title}
                        desc={data.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentProjects