import { Link } from "@inertiajs/react"
import DOMPurify from "dompurify"

const Pagination = ({links}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 py-5">
            {
                // console.log(links)
                links.map((data) => (
                    <Link key={data.url} href={data.url} className={`join-item btn border-0 hover:text-white ${data.active ? 'bg-dark text-white' : 'bg-white text-gray-800 '}`} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.label) }}></Link>
                ))
            }
        </div>
    )
}

export default Pagination