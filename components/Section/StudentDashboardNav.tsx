"use client"

import { 
    ClipboardIcon, 
    UserCircleIcon,
    ArrowLeftOnRectangleIcon,
    AcademicCapIcon,
    BanknotesIcon,
    ClockIcon,
    Cog6ToothIcon,
    PuzzlePieceIcon 
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { StudentLogo } from "@/asset/images";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";



export default function UserDashboardNav(){

    const router = useRouter();
    const LogoutDir = async () =>{
        const response = await axios.get("/api/instructor/auth/signout");
        router.push("/student/auth/signin");
    };


    return (
        <div className="dashboard-nav w-full bg-red-600 relative h-screen box-border">
            <div className="dashboard-nav-header text-center py-8  w-full">
                <Image 
                    src={StudentLogo} 
                    alt={"portal icon"}
                    className="h-20 w-20 inline "   
                />
            </div>
              
            <ul className="list-none w-full block absolute">
                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="#"></a>
                    <a href="#">
                        <ClipboardIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">dashboard</span>
                    </a>
                </li>

                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="/student/dashboard/studentProfile">
                        <UserCircleIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">view profile</span>
                    </a>
                </li>

                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="/student/dashboard/studentGradeBySem">
                        <AcademicCapIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">grades</span>
                    </a>
                </li>

                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="/student/dashboard/studentRoutine">
                        <ClockIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">routine</span>
                    </a>
                </li>


                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="/student/dashboard/studentPayment">
                        <BanknotesIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">payment</span>
                    </a>
                </li>

                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="/student/dashboard/studentCourseAddDrop">
                        <PuzzlePieceIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">course</span>
                    </a>
                </li>

                <li className="py-4 px-8 text-center text-white hover:bg-white/75 hover:text-red-600">
                    <a href="#">
                        <Cog6ToothIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize">settings</span>
                    </a>
                </li>
            </ul>

            <div className="dashboard-nav-footer text-center py-4 absolute bottom-0 w-full">
                <a href="#" onClick={LogoutDir} className="hover:text-white">
                        <ArrowLeftOnRectangleIcon 
                            className="w-6 inline-block mr-2"
                        />
                        <span className="inline-block text-base capitalize ">log out</span>
            </a>
            </div>
        </div>
    );
}