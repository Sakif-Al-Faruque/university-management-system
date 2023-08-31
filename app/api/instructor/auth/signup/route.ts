import { NextResponse, NextRequest } from "next/server";
import Instructor from "@/model/InstructorModel";
import { Connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            fullname,
            email,
            password,
            phone,
            address,
            salary
        } = await request.json();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const instructor = new Instructor({
            fullname: fullname,
            email: email,
            password: hashedPassword,
            phone: phone,
            address: address,
            salary: salary
        });

        const savedIntructor = await instructor.save();

        return NextResponse.json({
            message: "Signup successful...",
            user: savedIntructor,
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