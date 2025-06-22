import React from 'react';

// Definisikan komponen StatCards
const StatCards = () => {
    // Data contoh untuk kartu statistik
    const stats = [
        { value: '930', label: 'Point Reward' },
        { value: '1340', label: 'Point Achievement' },
        { value: '12', label: 'Total games played' },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-around h-full">
            {stats.map((stat, index) => (
                <div key={stat.label} className={index < stats.length - 1 ? 'mb-4' : ''}>
                    <p className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-500 mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

// Pastikan untuk mengekspor komponen sebagai default
export default StatCards;