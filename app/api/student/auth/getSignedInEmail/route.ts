import { NextRequest, NextResponse } from "next/server";
import jwt, { Secret } from "jsonwebtoken";

function getEmailFromToken(token: string | undefined) {
    try {
        if (!token) {
            return null;
        }

        const decoded = jwt.verify(token, process.env.MY_SECRET as Secret);

        const email = (decoded as { email: string }).email;

        return email;
    } catch (error) {
        return null;
    }
}

export async function GET(request: NextRequest) {
    try {
        const myToken = request.cookies.get('token')?.value;

        const email = getEmailFromToken(myToken);

        if (!email) {
            return NextResponse.json({
                message: "Token is invalid or expired",
                success: false,
            }, { status: 401 }); 
        }

        const response = NextResponse.json({
            message: "Logged in as " + email,
            success: true,
            email: email,
        },
        {status: 200}
        );

        return response;
    } catch (error:any) {
        return NextResponse.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
