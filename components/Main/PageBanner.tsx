import Image from "next/image";
import { BannerImage } from "@/asset/images";
import Iframe from "react-iframe";

export default function PageBanner(){
    return (
        <section className="banner w-full h-screen">
            <Image 
                src={BannerImage} 
                alt={"banner image"}
                className="w-full h-full"            
            />
        </section>
    );
}