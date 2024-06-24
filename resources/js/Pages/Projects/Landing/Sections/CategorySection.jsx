import CategoryCard from "../Components/CategoryCard";

const datas = [
    {
        id: 1,
        title: "Research Projects",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus accusantium ab veritatis voluptatibus consectetur repellendus nesciunt eum fugiat incidunt!",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
    },
    {
        id: 2,
        title: "Programming Projects",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus accusantium ab veritatis voluptatibus consectetur repellendus nesciunt eum fugiat incidunt!",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
    },
    {
        id: 3,
        title: "Networking Projects",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus accusantium ab veritatis voluptatibus consectetur repellendus nesciunt eum fugiat incidunt!",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
    },
    {
        id: 4,
        title: "Media Projects",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus accusantium ab veritatis voluptatibus consectetur repellendus nesciunt eum fugiat incidunt!",
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
    },
]

const CategorySection = () => {
    return (
        <div className="md:grid md:grid-cols-2 gap-5 lg:gap-x-28 max-w-screen-xl mx-auto px-6 lg:px-8 relative">
            {datas.map((data) => (
                <CategoryCard
                    key={data.id}
                    title={data.title}
                    img={data.image}
                >{data.description}</CategoryCard>
            ))}
        </div>
    )
}

export default CategorySection