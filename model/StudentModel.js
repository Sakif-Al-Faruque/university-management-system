import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    
    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },

    phone: {
        type: String,
    },

    address: {
        type: String,
    },

    approved: {
        type: Boolean,
        default: false,
    },

    usertoken: {
        type: String,
        default: ""
    },
});

const Student = mongoose.models.students || mongoose.model("students", StudentSchema);

export default Student;