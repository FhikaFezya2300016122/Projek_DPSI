// src/components/classdetail/AssignmentView.jsx
import React from 'react';
import SessionAccordion from './SessionAccordion';
import gambarFaseBaru from '../../Images/bodyword.jpg';
import gambarKunci from '../../Images/Semangka.png';

// Data contoh untuk semua sesi dan fase
const assignmentData = [
    { 
        id: 1, 
        title: 'Session 1',
        isOpen: false,
        phases: [ /* ... data fase untuk sesi 1 ... */ ]
    },
    { 
        id: 2, 
        title: 'Session 2',
        isOpen: false,
        phases: [ /* ... data fase untuk sesi 2 ... */ ]
    },
    { 
        id: 3, 
        title: 'Session 3',
        isOpen: true, // Sesi 3 terbuka secara default
        phases: [
            { id: 31, title: 'Phase 1', status: 'completed', imageUrl: gambarKunci },
            { id: 32, title: 'Phase 2', status: 'completed', imageUrl: gambarKunci },
            { id: 33, title: 'Phase 3', status: 'active', imageUrl: gambarFaseBaru }, // Menggunakan gambar lokal
            { id: 34, title: 'Phase 4', status: 'locked', availability: 'in 2h 30m', imageUrl: gambarKunci }, // Menggunakan gambar lokal
            { id: 35, title: 'Phase 5', status: 'locked', availability: 'in 3 days', imageUrl: gambarKunci },
            { id: 36, title: 'Phase 6', status: 'locked', availability: 'in 5 days', imageUrl: gambarKunci },
        ]
    },
];

const AssignmentView = () => {
    return (
        <div className="space-y-4">
            {assignmentData.map(session => (
                <SessionAccordion key={session.id} session={session} />
            ))}
        </div>
    );
};

export default AssignmentView;