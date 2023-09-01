import ApplyItem from "@/components/Section/ApplyItem";
import { ApplicantLogo, InstructorLogo } from "@/asset/images";

export default function ApplyPage(){
    return (
        <div className="apply-container w-3/12  mx-auto absolute left-2/4 top-2/4 flex flex-wrap justify-between">
            <ApplyItem
                accessPoint="/applicant/auth/signup"
                applyFor="applicant"
                applyIcon={ApplicantLogo}
            />
            <ApplyItem
                accessPoint="/instructor/auth/signup"
                applyFor="instructor"
                applyIcon={InstructorLogo}
            />
        </div>
    );
}