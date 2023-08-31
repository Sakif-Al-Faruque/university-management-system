import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema({
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

    salary: {
        type: Number,
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

const Instructor = mongoose.models.instructors || mongoose.model("instructors", InstructorSchema);

export default Instructor;