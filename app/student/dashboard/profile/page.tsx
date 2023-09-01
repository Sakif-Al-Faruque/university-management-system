"use client"

import axios from "axios";
import { useState } from "react";



export default function My(){
    const [data, setData] = useState("");
    const TokenData = async () =>{
        const response = await axios.get('/api/instructor/auth/getToken');
        setData(response.data.myToken);
        console.log(response);
    }
    return (
        <div>
           <button type="submit" onClick={TokenData}>Get Token</button>
           <p>{data}</p>
        </div>
    );
}