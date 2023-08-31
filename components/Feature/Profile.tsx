"use client"
import React, { useState, ChangeEvent } from 'react';

export default function Profile() {
    const initialProfile = {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        email: 'johndoe@example.com',
        address: '123 Main Street',
    };

    const [profile, setProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
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
                        <label className="block text-sm font-medium text-black">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={profile.age}
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
                            readOnly={!isEditing}
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
