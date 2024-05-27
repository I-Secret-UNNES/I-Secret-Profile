const MainCard = ( props ) => {
    return(
        <div className="flex flex-wrap lg:grid lg:grid-cols-3 w-full">
            <img className="w-full md:min-w-72" src={props.image} alt={props.alt} />
            <div className="flex-nowrap lg:px-7 lg:col-span-2">
                <h3 className="font-bold text-2xl md:text-3xl text-black py-2">{props.title}</h3>
                <div className="flex-wrap absolute py-3">
                    <img className="w-7 h-7 rounded-full" src={props.profilepic} alt={props.altprofile} />
                    <h6 className="ml-[35%] mt-[-28%] text-xs font-medium text-black">{props.author}</h6>
                    <p className="ml-[35%] w-full text-xs font-base text-slate-500">{props.date} . {props.publishtime}</p>
                </div>
                <p className="w-full text-justify font-base text-slate-800 text-sm mt-14">{props.desc}</p>
                <button className="my-5 xl:my-10 px-5 py-2 rounded-md font-bold text-sm text-white bg-blue-600 hover:bg-blue-500
                transition-all duration-300 ease-in-out">Read full article...</button>
            </div>

        </div>
    )
}

export default MainCard