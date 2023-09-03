"use client"
import React from 'react';
import axios from 'axios';

export default function PaymentCard() {

    const [values, setValues] = React.useState({
        email: 'mahin@g.com',
        cardNumber: '',
        amount: ''
    });

    const handlePayment = async () => {
        if(!values.cardNumber || !values.amount){
            alert("Provide cardNumber and amount");
        }
        else{
            const response = await axios.post('/api/student/auth/makePayment', {...values});
            if(response)
            {
                alert("Payment Successful");
                setValues({...values,cardNumber:'', amount:''})
            }
            else
            {
                alert("network error");
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-600/75">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-black mb-4">Payment</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black">CVV Number</label>
                        <input
                            name='cardNumber'
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            value={values.cardNumber}
                            onChange={(e)=> setValues({...values,cardNumber:e.target.value})}
                            placeholder="Enter card number"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Amount</label>
                        <input
                            name='amount'
                            type="number"
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            value={values.amount}
                            onChange={(e)=> setValues({...values,amount:e.target.value})}
                            placeholder="Enter payment amount"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="px-4 py-2 bg-black text-white rounded-md"
                            onClick={handlePayment}
                        >
                            Submit Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
