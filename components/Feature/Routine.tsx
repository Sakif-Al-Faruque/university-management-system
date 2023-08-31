import React from 'react';

export default function Routine() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday'];
    const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

    const routines = [
        ['Math', 'Science', 'History', 'English', 'Gym'],
        ['Physics', 'Chemistry', 'Math', 'Biology', 'Music'],
        ['English', 'History', 'Art', 'Math', 'Science'],
        ['Gym', 'Math', 'Physics', 'English', 'Chemistry'],
        ['Music', 'Biology', 'Science', 'Math', 'History'],
    ];

    return (
        <div className="flex items-center justify-center h-screen bg-red-600/75">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-black mb-4">Routine</h1>
                <div className="grid grid-rows-7 grid-cols-6 gap-4">
                    {/* Display times */}
                    <div></div>
                    {times.map((time, timeIndex) => (
                        <div key={timeIndex} className="text-center font-semibold text-black">
                            {time}
                        </div>
                    ))}
                    {/* Display routines */}
                    {days.map((day, dayIndex) => (
                        <React.Fragment key={dayIndex}>
                            <div className="text-center font-semibold text-black">{day}</div>
                            {routines[dayIndex].map((course, courseIndex) => (
                                <div
                                    key={courseIndex}
                                    className="border p-2 rounded-md text-center"
                                >
                                    {course}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
