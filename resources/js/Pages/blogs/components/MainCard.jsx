const MainCard = (props) => {
  const { children } = props;
  return (
      <div className="flex flex-wrap lg:grid lg:grid-cols-3 w-full py-1">
          {children}
      </div>
  )
}

const Header = (props) => {
  return (
      <img className="w-full md:min-w-72" src={props.image} alt={props.alt} />
  )
}

const Body = (props) => {
  const { children } = props;
  return (
      <div className="flex flex-col justify-between gap-4 lg:px-7 lg:col-span-2 py-4 lg:py-2">
          <h3 className="font-bold text-2xl text-black">{props.title}</h3>
          <div className="flex">
              <img className="w-7 h-7 rounded-full" src={props.profilepic} alt={props.altprofile} />
              <div className="flex-col pl-2">
                  <h6 className="text-xs font-medium text-black">{props.author}</h6>
                  <p className="w-full text-xs font-base text-slate-500">{props.date} . {props.publishtime}</p>
              </div>
          </div>
          <p className="w-full text-justify font-base text-slate-800 text-sm">{children}</p>
          <a 
          className="px-5 py-2 w-max rounded-md font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out"
          href="/blogdetail"
          >Read full article...</a>
      </div>
  )
}

MainCard.Header = Header;
MainCard.Body = Body;

export default MainCard