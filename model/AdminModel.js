import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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
    usertoken: {
        type: String,
        default: ""
    },
});

const Admin = mongoose.models.admins || mongoose.model("admins", AdminSchema);

export default Admin;