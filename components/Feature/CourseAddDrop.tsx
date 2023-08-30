"use client"
import React, { useState } from 'react';

interface Course {
    id: number;
    name: string;
    section: string;
}

const availableCourses: Course[] = [
    { id: 1, name: 'Math', section: 'A' },
    { id: 2, name: 'Science', section: 'B' },
    { id: 3, name: 'History', section: 'C' },
    { id: 4, name: 'English', section: 'D' },
];

export default function CourseAddDrop() {
    const [addedCourses, setAddedCourses] = useState<Course[]>([]); // Explicit type added here
    const [selectedCourse, setSelectedCourse] = useState<string>(''); // Explicit type added here

    const handleAddCourse = () => {
        const courseToAdd = availableCourses.find(course => course.id.toString() === selectedCourse);
        
        if (courseToAdd && !addedCourses.some(course => course.id === courseToAdd.id)) {
            setAddedCourses(prevCourses => [...prevCourses, courseToAdd]);
        }
    };

    const handleRemoveCourse = (courseId: number) => { // Explicit type added here
        setAddedCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    };

    return (
        <div className="flex items-center justify-center h-screen bg-red-600/75">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-black mb-4 text-center">Added Courses</h1>
                <div className="space-y-4">
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full p-2 border rounded-md text-black"
                    >
                        <option value="" disabled>Select a course to add</option>
                        {availableCourses.map(course => (
                            <option key={course.id} value={course.id.toString()}>
                                {course.name} - {course.section}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddCourse}
                        className="px-4 py-2 bg-black text-white rounded-md w-full"
                    >
                        Add Course
                    </button>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-black mb-2">Added Courses List</h2>
                        <ul className="space-y-2">
                            {addedCourses.map(course => (
                                <li key={course.id} className="flex justify-between items-center">
                                    <span>{course.name} - {course.section}</span>
                                    <button
                                        onClick={() => handleRemoveCourse(course.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
