import PortalItem from "@/components/Section/PortalItem";
import { TeacherLogo } from "@/asset/images";
import { StudentLogo } from "@/asset/images";

export default function PortalPage(){
    return (
        <div className="portal-container w-3/12  mx-auto absolute left-2/4 top-2/4 flex flex-wrap justify-between">
            <PortalItem
                accessPoint=""
                portalFor="faculty"
                portalIcon={TeacherLogo}
            />
            <PortalItem
                accessPoint=""
                portalFor="student"
                portalIcon={StudentLogo}
            />
        </div>
    );
}