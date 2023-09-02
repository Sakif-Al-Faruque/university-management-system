import { NextResponse, NextRequest } from "next/server";
import Student from "@/model/StudentModel";
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
            address
        } = await request.json();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const student = new Student({
            fullname: fullname,
            email: email,
            password: hashedPassword,
            phone: phone,
            address: address
        });

        const savedStudent = await student.save();

        return NextResponse.json({
            message: "Signup successful...",
            user: savedStudent,
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