import Image from "next/image";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

export default function AcademicCard({title, description, details_link, img}:{title: string, description: string, details_link: string, img:any}){
    return (
        <div className="w-full">
            <div className="aca-card-img-container h-60 w-96 relative">
                <div className="card-img-hover-effect absolute w-4/5 h-4/5 hover:border-2 hover:border-slate-200/75 left-2/4 top-2/4"></div>
                <Image 
                    src={img} 
                    alt={"banner image"}
                    className="w-full h-full"            
                />
            </div>
            <h2 className="text-sm my-4 uppercase">{title}</h2>
            <p className="text-base my-4 w-96 hover:underline hover:text-red-600">{description}</p>
            <span><a href={details_link}></a>
                <EllipsisHorizontalCircleIcon className="w-8 inline hover:text-red-600"/>
            </span>
        </div>
    );
}