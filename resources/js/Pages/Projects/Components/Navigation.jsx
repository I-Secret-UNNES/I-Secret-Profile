const Navigation = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative">
            <nav>
                <ul className="flex items-center justify-center gap-11 font-bold text-xl md:text-2xl">
                    <li className="font-bold text-black hover:text-primary active:text-primary"><a href="/">All Projects</a></li>
                    <li className="font-bold text-black hover:text-primary active:text-primary"><a href="/category">Category</a></li>
                    <li className="font-bold text-black hover:text-primary active:text-primary"><a href="/highlight">Highlighted</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation