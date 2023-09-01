import { NextResponse, NextRequest } from "next/server";
import Student from "@/model/StudentModel";
import { Connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            email,
            password
        } = await request.json();

        const user = await Student.findOne({email});
        if(!user){
            return NextResponse.json({
                message: "user not found",
            }, {status: 200});
        }

        if(! await bcrypt.compare(password, user?.password)){
            return NextResponse.json({
                message: "password not matched",
            }, {status: 200});
        }

        const tokenObj = {
            email: user.email,
            password: user.password
        } 


        const token = jwt.sign(tokenObj, process.env.MY_SECRET!, {expiresIn: "5d"});
        
        const response = NextResponse.json({
            message: "Signin successful...",
            user: user,
            seccess: true
        },
        {status: 200}
        );

        response.cookies.set("token", token,
            {httpOnly: true}
        );

        return response;
        
    }catch(error: any){
        return NextResponse.json({
            error: error.message
        },
        {status: 500}
        )
    }    
}