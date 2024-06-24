const CategoryCard = (props) => {
    const { children, title, img } = props;
    return (
        <div className="flex flex-col">
            <img src={img}></img>
            <h2 className="pt-4 pb-2 text-black text-2xl font-bold">{title}</h2>
            <p className="text-slate-600 font-base">{children}</p>
            <a href="#" className="pt-10 pb-4 ml-auto text-slate-800 font-medium hover:text-[#ff6666] transition-all duration-150 ease-in-out">See more &#8594;</a>
        </div>
    )
}

export default CategoryCard