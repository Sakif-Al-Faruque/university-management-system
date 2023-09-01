import { NextResponse, NextRequest } from "next/server";
import Applicant from "@/model/ApplicantModel";
import { Connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            name,
            email,
            password,
        } = await request.json();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const applicant = new Applicant({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const savedApplicant = await applicant.save();

        return NextResponse.json({
            message: "Signup successful...",
            user: savedApplicant,
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