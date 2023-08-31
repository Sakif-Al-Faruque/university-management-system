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

        const response = await axios.post('/api/instructor/auth/signin', {...user});

        const resUser = response.data.user;

        if(resUser){
            router.push('/instructor/dashboard');
        }
    }
    return (
        <div>
            <input 
                type="email"
                onChange={(e) => (setUser({...user, email: e.target.value}))}
                value={user.email}
                placeholder="email" 
            /> <br />
            <input 
                type="password"
                onChange={(e) => (setUser({...user, password: e.target.value}))}
                value={user.password}
                placeholder="password" 
            /> <br />
            <button type="submit" onClick={submission}>signin</button>
        </div>
    );
}