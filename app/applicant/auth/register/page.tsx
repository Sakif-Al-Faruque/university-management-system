"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function RegisterPage(){
    const router = useRouter();

    const [user, setUser] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        username : "",
    });

    const onRegister = async () => {
        console.log(user);

        const response = await axios.post('/api/applicant/auth/signup', {...user});

        console.log({user: response.data.user});

        router.push('/applicant/dashboard/admissionCard');
    }
    return (

        <div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2"
            style={{
                backgroundImage: 'url("../register.jpg")',
                backgroundSize: "cover", 
                backgroundPosition: "center", 
            }}>

            <div
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ maxWidth: "500px" }}
            >
                
                <h1 className="text-2xl mb-4 text-center">Register</h1>
            

            <hr />
            <hr />

        <div className="mb-4">
            <label htmlFor="fullname">name</label>
            <input
                className="p-1 border border-gray-300 rounded-lg 
                focus:outline-none focus:border-gray-600"
                id="fullname"
                type="text"
                onChange={(e) => (setUser({...user, name: e.target.value}))}
                value={user.name}
                placeholder="Name"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="fullname">username</label>
            <input
                className="p-1 border border-gray-300 rounded-lg 
                focus:outline-none focus:border-gray-600"
                id="fullname"
                type="text"
                onChange={(e) => (setUser({...user, username: e.target.value}))}
                value={user.username}
                placeholder="Name"
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
            <label htmlFor="password">confirmPassword</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                onChange={(e) => (setUser({...user, confirmPassword: e.target.value}))}
                value={user.confirmPassword}
                placeholder="Confirm Password"
            />
        </div>



            <hr />
            <hr />

        <div className="flex justify-center py-2">
            <button
            type="submit" onClick={onRegister}
            className="p-1 border border-gray-300
            rounded-lg mb-4 focus:outline-none
            focus:border-gray-600"
            >confirm</button>
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