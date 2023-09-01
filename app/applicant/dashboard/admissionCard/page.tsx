"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function AdmissionCard(){
    const router = useRouter();

    const [user, setUser] = useState({
        roll:"",
        name: "",
        photo: "",
        program:"",
        underGraduate: "",
        graduate:"",
        gender:"",
        examDate: "",
        time:"",
        building:"",
        authorizedSignature:"",
    });

    const onadmissionCard = async () => {
        console.log(user);

        const response = await axios.post('/api/applicant/auth/admissionCard', {...user});

        console.log({user: response.data.user});

        router.push('/applicant/auth/register');
    }
    return (

        <div className="flex flex-col items-center
        justify-center min-h-screen py-2"
        style={{
            backgroundImage: 'url("../admission.jpg")',
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
        }}
        >

            <div
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ maxWidth: "800px" }}
            >
            <h1 className="text-2xl mb-4 text-center">American Internation University-Bangladesh</h1>
            <h3 className="text-2xl mb-4 text-center">Admission Exam Admit Card</h3>

            <hr />
     
        <div className="mb-4 flex">
            <div className="mr-4 w-1/2">
            <label htmlFor="roll">Roll</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="roll"
                type="number"
                value={user.roll}
                onChange={(e)=> setUser({...user,roll:e.
                target.value})}
                placeholder="ROLL"
            />
            </div>

        <div className="w-1/2 mr-4">
            <label htmlFor="photo">Attach your recent photo</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="photo"
                type="file"
                accept="image/*"
                // onChange={(e)=> setUser({...user, photo: e.target.files[0]})}
            />
            </div>
        </div>

        
        <div className="mb-4 flex">
           <div className="w-1/2">
            <label htmlFor="name">Name</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="name"
                type="text"
                value={user.name}
                onChange={(e)=> setUser({...user,name:e.
                target.value})}
                placeholder="Name"
            />
            </div>
        </div>



            <div className="mb-4">
            <label htmlFor="gender" className="mr-2">Gender:</label>
            <div>
            <input
                className="mr-2"
                type="radio"
                name="gender"
                value="Male"
                checked={user.gender === "Male"}
                onChange={(e)=> setUser({...user,gender:e.
                 target.value})}
            />
            <label htmlFor="male" className="mr-4">Male</label>
            </div>
            <div>
             <input
                className="mr-2"
                type="radio"
                name="gender"
                value="Female"
                checked={user.gender === "Female"}
                onChange={(e)=> setUser({...user,gender:e.
                target.value})}
                // placeholder="Name"
            />
            <label htmlFor="female">Female</label>
            </div>
            </div>

            
        <div className="mb-4">
            <label htmlFor="program">Program:</label>
        <div>
            <input
                type="radio"
                name="program"
                value="Undergraduate"
                checked={user.program === "Undergraduate"}
                onChange={(e) => setUser({ ...user, program: e.target.value })}
            />
            <label htmlFor="undergraduate" className="ml-2">Undergraduate</label>
        </div>
        <div>
           <input
               type="radio"
               name="program"
               value="Graduate"
               checked={user.program === "Graduate"}
               onChange={(e) => setUser({ ...user, program: e.target.value })}
            />
            <label htmlFor="graduate" className="ml-2">Graduate</label>
        </div>
        </div>


        <div className="mb-4">
            <label htmlFor="building"></label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="building"
                type="text"
                value={user.building}
                onChange={(e)=> setUser({...user,building:e.
                target.value})}
                placeholder="building"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="authorizedSignature"></label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="authorizedSignature"
                type="text"
                value={user.authorizedSignature}
                onChange={(e)=> setUser({...user,authorizedSignature:e.
                target.value})}
                placeholder="authorizedSignature"
            />
        </div>

            <div className="flex justify-center py-2">
            <button
            onClick={onadmissionCard}
            className="p-1 border border-gray-300
            rounded-lg mb-4 focus:outline-none
            focus:border-gray-600"
            >Download Admission Card</button>
        </div>

            </div>

        </div>
    );
}