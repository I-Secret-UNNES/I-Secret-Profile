import { Link } from "@inertiajs/react";

const ProjectsCard = ( props ) => {

    function removeTagsAndExtractText(html) {
        const withoutImgTags = html.replace(/<img[^>]*>/gi, '');

        const withoutHtmlTags = withoutImgTags.replace(/<\/?[^>]+(>|$)/g, '');

        if (withoutHtmlTags.length > 200) {
            return withoutHtmlTags.slice(0, 200) + '...';
        }
        return withoutHtmlTags;
    }
    return(
        <Link href={route('detail.project', props.slug)} className="wps-auto md:w-[45%] lg:w-[30%] my-3 flex-grow">
            <img src={props.image} alt={props.alt} className="mx-auto" />
            <h4 className="font-semibold text-2xl text-black py-3">{props.name}</h4>
            <p className="font-base text-medium text-black" dangerouslySetInnerHTML={{__html: removeTagsAndExtractText(props.desc)}}></p>
        </Link>
    )
}

export default ProjectsCard