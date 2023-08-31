import { NextResponse, NextRequest } from "next/server";
import Instructor from "@/model/InstructorModel";
import { Connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            email,
            password
        } = await request.json();

        const user = await Instructor.findOne({email});
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
        
        return NextResponse.json({
            message: "Signin successful...",
            user: user,
            seccess: true
        },
        {status: 200}
        );
    }catch(error: any){
        return NextResponse.json({
            error: error.message
        },
        {status: 500}
        )
    }    
}