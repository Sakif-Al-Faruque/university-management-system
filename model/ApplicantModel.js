import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema({
    name: {
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

    roll: {
        type: Number,
    },

    photo: {
        type: String,
    },

    program: {
        type: String,
    },

    underGraduate: {
        type: String,
    },

    graduate: {
        type: String,
    },

    gender: {
        type: String,
    },

    examDate: {
        type: String,
    },

    time: {
        type: Number,
    },

    building: {
        type: String,
    },

    authorizedSignature: {
        type: String,
    },
});

const Applicant = mongoose.models.applicants || mongoose.model("applicants", ApplicantSchema);

export default Applicant;