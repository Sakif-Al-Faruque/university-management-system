import { NextResponse, NextRequest } from "next/server";
import Payment from "@/model/PaymentModel";
import { Connect } from "@/dbConfig/dbConfig";

Connect();

export async function POST(request: NextRequest) {
    try{
        const {
            email,
            cardNumber,
            amount
        } = await request.json();

        const payment = new Payment({
            date: new Date().toLocaleString(),
            email: email,
            cardNumber: cardNumber,
            amount: amount
        })

        const savedPayment = await payment.save()

        return NextResponse.json({
            message: "Payment successful...",
            user: savedPayment,
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