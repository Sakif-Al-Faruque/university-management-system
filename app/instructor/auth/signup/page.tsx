"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup(){

    const [user, setUser] = useState({
        fullname : "",
        email : "",
        password : "",
        phone : "",
        address : "",
        salary : 0
    });

    const submission = async () => {
        console.log(user);

        const response = await axios.post('/api/instructor/auth/signup', {...user});

        console.log({user: response.data.user});
    }
    return (
        <div>
            <input 
                type="text"
                onChange={(e) => (setUser({...user, fullname: e.target.value}))}
                value={user.fullname}
                placeholder="fullname" 
            /> <br />
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
            <input 
                type="text"
                onChange={(e) => (setUser({...user, phone: e.target.value}))}
                value={user.phone}
                placeholder="phone" 
            /> <br />
            <input 
                type="text"
                onChange={(e) => (setUser({...user, address: e.target.value}))}
                value={user.address}
                placeholder="address" 
            /> <br />
            <input 
                type="number"
                onChange={(e) => (setUser({...user, salary: parseFloat(e.target.value)}))}
                value={user.salary}
                placeholder="salary" 
            /> <br />
            <button type="submit" onClick={submission}>signup</button>
        </div>
    );
}