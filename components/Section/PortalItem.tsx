import Image from "next/image";

export default function PortalItem({accessPoint, portalFor, portalIcon}: {accessPoint: string, portalFor: string, portalIcon: any}){
    return (
        <a 
            href={accessPoint}
            className="p-4 block bg-zinc-700/50 w-36 text-center hover:scale-105 duration-1000 my-10 hover:shadow-red-600 hover:shadow-2xl"
        >
            <span>
                <Image 
                    src={portalIcon} 
                    alt={"portal icon"}
                    className="h-20 w-20 inline"   
                />
            </span>
            <span className="text-white capitalize">{portalFor} portal</span>
        </a>
    );
}