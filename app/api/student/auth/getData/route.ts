import { NextResponse, NextRequest } from "next/server";
import Student from "@/model/StudentModel";
import { Connect } from "@/dbConfig/dbConfig";

Connect()

export async function POST(request: NextRequest) {
    try{
        const {
            email
        } = await request.json();

        const user = await Student.findOne({email});
        if(!user){
            return NextResponse.json({
                message: "user not found",
            }, {status: 200});
        }
        
        const response = NextResponse.json({
            message: "Fetch successful...",
            user: user,
            seccess: true
        },
        {status: 200}
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