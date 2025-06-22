import React from 'react';

// --- KOMPONEN BADGE DISPLAY ---
const BadgeDisplay = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-full">
        <div className="flex items-center justify-center space-x-4">
            <svg className="w-8 h-8 text-gray-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.15 12.3L24 6L32.85 12.3L30.75 22.8L38.4 29.85L27.6 30.3L24 39L20.4 30.3L9.6 29.85L17.25 22.8L15.15 12.3Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/></svg>
            <div className="relative">
                <svg className="w-24 h-24 text-blue-500" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 9.25564L24 3L42 9.25564V21.8278C42 32.1251 34.1119 41.242 24.3163 44.8233L24 45L23.6837 44.8233C13.8881 41.242 6 32.1251 6 21.8278V9.25564Z" fill="#4285F4"/><path d="M15.15 19.3L24 13L32.85 19.3L30.75 29.8L38.4 36.85L27.6 37.3L24 46L20.4 37.3L9.6 36.85L17.25 29.8L15.15 19.3Z" fill="#FFFFFF"/></svg>
            </div>
            <svg className="w-8 h-8 text-gray-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.15 12.3L24 6L32.85 12.3L30.75 22.8L38.4 29.85L27.6 30.3L24 39L20.4 30.3L9.6 29.85L17.25 22.8L15.15 12.3Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/></svg>
        </div>
        <p className="text-xl font-bold mt-4 text-gray-800">Silver</p>
        <div className="flex space-x-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-4 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
    </div>
);

export default BadgeDisplay;
