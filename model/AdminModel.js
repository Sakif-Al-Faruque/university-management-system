import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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

    usertoken: {
        type: String,
        default: ""
    },
});

const Admin = mongoose.models.admins || mongoose.model("admins", AdminSchema);

export default Admin;