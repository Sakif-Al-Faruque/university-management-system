"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function UpdateProfilePage(){
    const router = useRouter();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password:"",
        username: "",
        confirmPassword:"",
    });

    const onRegister = async () => {
        console.log(user);

        const response = await axios.post('/api/applicant/auth/updateProfile', {...user});

        console.log({user: response.data.user});

        router.push('/applicant/auth/updateProfile');
    }
    return (

        <div className="flex flex-col items-center
        justify-center min-h-screen py-2"
        style={{
            backgroundImage: 'url("../update.jpg")',
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
        }}
        >

            <div
                className="bg-white p-8 rounded-lg shadow-md"
                style={{ maxWidth: "500px" }}
            >
                
                <h1 className="text-2xl mb-4 text-center">Update Your Applicant Profile</h1>
            

            <hr />
            <hr />

        <div className="mb-4">
            <label htmlFor="name">name</label>
            <input
                className="p-1 border border-gray-300 rounded-lg 
                focus:outline-none focus:border-gray-600"
                id="name"
                type="text"
                value={user.name}
                onChange={(e)=> setUser({...user,name:e.
                target.value})}
                placeholder="name"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="username">username</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e)=> setUser({...user,username:e.
                target.value})}
                placeholder="username"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="email">email</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e)=> setUser({...user,email:e.
                target.value})}
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
                value={user.password}
                onChange={(e)=> setUser({...user,password:e.
                target.value})}
                placeholder="password"
            />
        </div>


        <div className="mb-4">
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
                className="p-1 border border-gray-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600"
                id="confirmPassword"
                type="password"
                value={user.confirmPassword}
                onChange={(e)=> setUser({...user,confirmPassword:e.
                target.value})}
                placeholder="confirmPassword"
            />
        </div>
            <hr />
            <hr />

        <div className="flex justify-center py-2">
            <Link href="/register">
            <button
            onClick={onRegister}
            className="p-1 border border-gray-300
            rounded-lg mb-4 focus:outline-none
            focus:border-gray-600"
            >Confirm</button></Link>
        </div>


        {/* <div className="flex justify-between">
            <Link href="/register">Profile Updated</Link>
        </div> */}

            </div>
        </div>
    );
}