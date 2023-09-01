import { NextResponse, NextRequest } from "next/server";
import Applicant from "@/model/ApplicantModel";
import { Connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            roll,
            photo,
            program,
            underGraduate,
            graduate,
            gender,
            examDate,
            time,
            building,
            authorizedSignature,
        } = await request.json();

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);

        const applicant = new Applicant({
            roll: roll,
            photo: photo,
            program: program,
            underGraduate: underGraduate,
            graduate:graduate,
            gender: gender,
            examDate: examDate,
            time: time,
            building: building,
            authorizedSignature: authorizedSignature,
        });

        const savedApplicant = await applicant.save();

        return NextResponse.json({
            message: "Successfully downloaded your addmission card",
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