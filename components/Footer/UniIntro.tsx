import Image from "next/image";
import { WebLogo } from "@/asset/images";


export default function UniIntro(){
    return (
        <div className="uni-intro w-full">
            <div className="uni-log-holder text-center">
                <Image 
                      src={WebLogo} 
                      alt={"banner image"}
                      className="w-36 h-36 inline"            
                    />
            </div>
            <p className="w-full text-sm my-6 text-white hover:text-red-600"><span className="font-bold capitalize">address: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde libero harum quasi quibusdam voluptas voluptates eveniet dolorem. Ex, assumenda.</p>
            <p className="w-full text-sm my-6 text-white hover:text-red-600"><span className="font-bold capitalize">phone: </span>88w848848</p>
        </div>
    );
}