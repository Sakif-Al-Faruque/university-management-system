import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    date: {
        type: String
    },

    email: {
        type: String
    },

    cardNumber: {
        type: String
    },

    amount: {
        type: Number
    }
})

const Payment = mongoose.models.payments || mongoose.model("payments", PaymentSchema);

export default Payment;