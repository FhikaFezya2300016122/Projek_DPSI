import React from 'react';

// --- DEFINISI IKON ---
// Ikon ini sekarang didefinisikan di dalam file ini
// agar komponen UserProfileCard dapat menggunakannya.

const EditIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
);


// --- KOMPONEN USER PROFILE CARD ---
const UserProfileCard = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center h-full justify-center">
        <img
            src="https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.png"
            alt="Olivia Sara"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/112x112/E2E8F0/4A5568?text=O'; }}
        />
        <h3 className="text-xl font-bold mt-4 text-gray-800">Olivia Sara</h3>
        <p className="text-gray-500 text-sm">oliviasara1234@gmail.com</p>
        <button className="mt-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
            <EditIcon className="text-gray-600" />
        </button>
    </div>
);

export default UserProfileCard;
