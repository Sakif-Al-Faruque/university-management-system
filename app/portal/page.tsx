import PortalItem from "@/components/Section/PortalItem";
import { TeacherLogo, StudentLogo, ApplicantLogoTwo } from "@/asset/images";

export default function PortalPage(){
    return (
        <div className="portal-container w-3/12  mx-auto absolute left-2/4 top-2/4 flex flex-wrap justify-between">
            <PortalItem
                accessPoint="/instructor/auth/signin"
                portalFor="faculty"
                portalIcon={TeacherLogo}
            />
            <PortalItem
                accessPoint="/student/auth/signin"
                portalFor="student"
                portalIcon={StudentLogo}
            />

            <PortalItem
                accessPoint="/applicant/auth/signin"
                portalFor="applicant"
                portalIcon={ApplicantLogoTwo}
            />
        </div>
    );
}