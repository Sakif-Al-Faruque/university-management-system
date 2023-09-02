import { NextResponse, NextRequest } from "next/server";
import Admin from "@/model/AdminModel";
import { Connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            email,
            password,
            phone
        } = await request.json();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = new Admin({
            email: email,
            password: hashedPassword,
            phone: phone
        });

        const savedAdmin = await admin.save();

        return NextResponse.json({
            message: "Signup successful...",
            user: savedAdmin,
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