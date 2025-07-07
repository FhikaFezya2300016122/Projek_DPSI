// src/components/classdetail/PeopleView.jsx

import React from 'react';

// Data contoh untuk guru dan siswa
const teachers = [
    { id: 't1', name: 'Farid', avatar: 'https://i.pravatar.cc/150?u=salsabila' }
];

const students = [
    { id: 's1', name: 'Yoga', avatar: 'https://i.pravatar.cc/150?u=chance' },
    { id: 's2', name: 'Fika', avatar: 'https://i.pravatar.cc/150?u=alfonso' },
    { id: 's3', name: 'Naya', avatar: 'https://i.pravatar.cc/150?u=ruben' },
    { id: 's4', name: 'Riska', avatar: 'https://i.pravatar.cc/150?u=craig' },
    { id: 's5', name: 'Taufik', avatar: 'https://i.pravatar.cc/150?u=herwitz' },
];

const PeopleView = () => {
    return (
        <div className="space-y-8">
            {/* Bagian Guru */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Teacher</h3>
                    <span className="text-sm font-semibold text-gray-500">{teachers.length} Teacher</span>
                </div>
                <div className="bg-white rounded-2xl shadow-sm">
                    {teachers.map((person, index) => (
                        <div key={person.id} className={`flex items-center gap-4 p-4 ${index < teachers.length - 1 ? 'border-b' : ''}`}>
                            <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full" />
                            <p className="font-semibold text-gray-700">{person.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bagian Siswa */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Student</h3>
                    <span className="text-sm font-semibold text-gray-500">{students.length} Student</span>
                </div>
                <div className="bg-white rounded-2xl shadow-sm">
                    {students.map((person, index) => (
                         <div key={person.id} className={`flex items-center gap-4 p-4 ${index < students.length - 1 ? 'border-b' : ''}`}>
                            <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full" />
                            <p className="font-semibold text-gray-700">{person.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeopleView;