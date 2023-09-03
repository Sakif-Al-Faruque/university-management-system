"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signin(){

    const router = useRouter();
    const [user, setUser] = useState({
        email : "",
        password : ""
    });

    const submission = async () => {
        console.log(user);

        const response = await axios.post('/api/student/auth/signin', {...user});

        const resUser = response.data.user;

        if(resUser){
            router.push('/student/dashboard');
        }
    }
    return (
        <div>
            
        </div>
    );
}