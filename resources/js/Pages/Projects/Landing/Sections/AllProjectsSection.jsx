import MainCard from "../Components/MainCard";

const datas = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Project 1",
        title: "Project 1",
        profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altprofile: "Author 1",
        author: "Dasteen",
        date: "Jan 24 2024",
        publishtime: "3 Min",
        desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
        quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
        tristique quis.`,
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Project 2",
        title: "Project 2",
        profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altprofile: "Author 2",
        author: "Yusuf",
        date: "Jan 25 2024",
        publishtime: "10 Min",
        desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
        quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
        tristique quis.`,
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
        alt: "Project 3",
        title: "Project 3",
        profilepic: "https://images.unsplash.com/photo-1575436611232-44651b483d46?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altprofile: "Author 3",
        author: "Ibnu",
        date: "Jan 23 2024",
        publishtime: "10 Min",
        desc: `Lorem ipsum dolor sit amet consectetur. Consectetur risus 
        quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin 
        tristique quis.`,
    }
]

const AllProjectsSection = () => {
    return (
        <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-none max-w-screen-xl mx-auto px-6 lg:px-8 relative">
            {datas.map((data) => (
                <MainCard key={data.id}>
                    
                    <MainCard.Header image={data.image} alt={data.alt} />
                    <MainCard.Body
                        title={data.title}
                        profilepic={data.profilepic}
                        altprofile={data.altprofile}
                        author={data.author}
                        date={data.date}
                        publishtime={data.publishtime}
                    >{data.desc}</MainCard.Body>
                </MainCard>
            ))}
        </div>
    )
}

export default AllProjectsSection