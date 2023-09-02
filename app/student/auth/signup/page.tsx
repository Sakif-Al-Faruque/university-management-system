"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function Signup(){
    const router = useRouter();

    const [user, setUser] = useState({
        fullname : "",
        email : "",
        password : "",
        phone : "",
        address : "",
    });

    const submission = async () => {
        console.log(user);

        const response = await axios.post('/api/student/auth/signup', {...user});

        console.log({user: response.data.user});

        router.push('/student/auth/signin');
    }
    return (

        <div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2"
            style={{
                backgroundImage: 'url("../register.jpg")',
                backgroundSize: "cover", // Adjust as needed
                backgroundPosition: "center", // Adjust as needed
            }}>

            <div
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ maxWidth: "500px" }}
            >
                
                <h1 className="text-2xl mb-4 text-center">Register</h1>
            

            <hr />
            <hr />

        <div className="mb-4">
            <label htmlFor="fullname">fullname</label>
            <input
                className="p-1 border border-gray-300 rounded-lg 
                focus:outline-none focus:border-gray-600"
                id="fullname"
                type="text"
                onChange={(e) => (setUser({...user, fullname: e.target.value}))}
                value={user.fullname}
                placeholder="fullname"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="email">email</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                onChange={(e) => (setUser({...user, email: e.target.value}))}
                value={user.email}
                placeholder="email"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="password">password</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                onChange={(e) => (setUser({...user, password: e.target.value}))}
                value={user.password}
                placeholder="password"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="phone">phone</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="phone"
                type="text"
                onChange={(e) => (setUser({...user, phone: e.target.value}))}
                value={user.phone}
                placeholder="phone"
            />
        </div>
            <hr />
            <hr />

        <div className="flex justify-center py-2">
            <button
            type="submit" onClick={submission}
            className="p-1 border border-gray-300
            rounded-lg mb-4 focus:outline-none
            focus:border-gray-600"
            >Sign Up</button>
        </div>

        {/* <div className="flex justify-between">
            <Link href="/admissionCard">Admission Card</Link>
            <Link href="/updateProfile">Update Profile</Link>
        </div> */}
            </div>
        </div>
        </div>

    );
}