import React from 'react';

export default function GradeBySem() {
    const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
    const courses = ['Math', 'Science', 'History', 'English'];

    const grades = [
        ['B+', 'C', 'A-', 'C+'],
        ['D+', 'A', 'B+', 'C'],
        ['A-', 'B', 'C', 'B+'],
        ['C+', 'B', 'A-', 'B+'],
    ];

    return (
        <div className="flex items-center justify-center h-screen bg-red-600/75">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-black mb-4 text-center">Grades By Semester</h1>
                <div className="space-y-4 h-60 overflow-y-auto">
                    {semesters.map((semester, semesterIndex) => (
                        <div key={semesterIndex} className="border p-4 rounded-md">
                            <h2 className="text-lg font-semibold text-black mb-2">{semester}</h2>
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-red-600/75">
                                        <th className="px-2 py-1 text-left text-white">Course</th>
                                        <th className="px-2 py-1 text-left text-white">Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, courseIndex) => (
                                        <tr key={courseIndex}>
                                            <td className="px-2 py-1 text-black">{course}</td>
                                            <td className="px-2 py-1 text-black">{grades[semesterIndex][courseIndex]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
