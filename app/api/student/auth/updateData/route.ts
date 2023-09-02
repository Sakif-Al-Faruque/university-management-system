import { NextResponse, NextRequest } from "next/server";
import Student from "@/model/StudentModel";
import { Connect } from "@/dbConfig/dbConfig";

Connect()

export async function PUT(request: NextRequest) {
    try{
        const {
            fullname,
            email,
            phone,
            address,
            approved,
            usertoken
        } = await request.json();

        const user = await Student.findOne({email});
        console.log(email)
        if(!user){
            return NextResponse.json({
                message: "user not found",
            }, {status: 200});
        }
        user.fullname = fullname
        user.phone = phone
        user.address = address
        await user.save()
        
        const response = NextResponse.json({
            message: "Update successful...",
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