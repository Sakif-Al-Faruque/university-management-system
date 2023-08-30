import React from 'react';

export default function PaymentCard() {
    return (
        <div className="flex items-center justify-center h-screen bg-red-600/75">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-black mb-4">Payment</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black">Name</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            placeholder="Enter student's name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Amount</label>
                        <input
                            type="number"
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            placeholder="Enter payment amount"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="px-4 py-2 bg-black text-white rounded-md"
                        >
                            Submit Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
