"use client"
import { FormEvent, useState } from "react";

export default function setNotice(){
    const [isLoading,setIsLoading] = useState<boolean>(false)

async function onSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try{
        const add = '/api/submit';
        const formData = new FormData(event.currentTarget)
        const response = await fetch(add,{
            method: "POST",
            body:formData
        })
    }
    catch(error){
        console.error(error)
    }
    finally{
        setIsLoading(false);
    }
}
return(
    <div className="setNotice-formContainer">
        <form >
            <label> Notice</label>
            <textarea name="notice"
             className="" > Enter your post here</textarea><br />

             <button type="submit" className="setNotice-btn">Publish</button>
             <button type="reset" className="setNotice-btn1">Reset</button>
        </form>
    </div>
)
}


