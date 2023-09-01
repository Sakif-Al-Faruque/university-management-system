import { NextRequest, NextResponse } from "next/server";


export async function GET(){
    try{
        const response = NextResponse.json({
            message: "log out is successful",
            succes: true
        });

        response.cookies.set("token", "", {
            expires: new Date(0),
            httpOnly: true
        });

        return response;
    }catch(error: any){
        return NextResponse.json(
            {
                error: error.message,
            }, 
            {
                status: 500
            }
        );
    }
}