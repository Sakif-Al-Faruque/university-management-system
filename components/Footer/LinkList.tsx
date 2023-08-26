import Image from "next/image";
import { WebLogo } from "@/asset/images";


export default function LinkList({heading, items}: {heading: string,  items: any[]}){
    return (
        <div className="w-full text-white capitalize">
            <h3 className="text-xl border-b-2 border-red-600 w-56">{heading}</h3>
            <ul className="text-xl list-none">
                {items.map((item) => (
                    <li><a href={item.link_url} className="text-sm hover:text-red-600">{item.link_name}</a></li>
                ))}
            </ul>
        </div>
    );
}