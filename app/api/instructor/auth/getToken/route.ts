import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){
    try{

        const myToken = request.cookies.get('token')?.value;
        const response = NextResponse.json({
            message: "log out is successful",
            succes: true,
            myToken: myToken
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