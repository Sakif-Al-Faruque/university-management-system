"use client"
import React, { useState, ChangeEvent, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
    const initialProfile = {
        fullname: '',
        email: '',
        phone: '',
        address: '',
        approved: false,
        usertoken: '',
    };

    const [profile, setProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function fetchStudentData() {
            try {
                const currenUser = await axios.get('/api/student/auth/getSignedInEmail');
                const email = currenUser.data.email
                const response = await axios.post('/api/student/auth/getData', {email});

                const student = response.data.user;
    
                if (student) {
                    setProfile({
                        fullname: student.fullname,
                        email: student.email,
                        phone: student.phone,
                        address: student.address,
                        approved: student.approved,
                        usertoken: student.usertoken,
                    });
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        }
    
        fetchStudentData();
    }, []);    

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = async () => {
        setIsEditing(false);
        const response = await axios.put('/api/student/auth/updateData', {...profile});
        console.log({user: response.data.user});
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-600/75">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-black mb-4 text-center">Student Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black">Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={profile.fullname}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            readOnly={true}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className={`px-4 py-2 bg-black text-white rounded-md ${
                                isEditing ? 'hidden' : 'block'
                            }`}
                            onClick={handleEditClick}
                        >
                            Edit
                        </button>
                        <button
                            className={`px-4 py-2 bg-black text-white rounded-md ${
                                isEditing ? 'block' : 'hidden'
                            }`}
                            onClick={handleSaveClick}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
