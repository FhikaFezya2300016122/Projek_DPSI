// src/components/rank/RankProgressBar.jsx

import React from 'react';

const RankProgressBar = ({ userPoints, ranks }) => {
    // Cari rank saat ini yang sudah dicapai pengguna
    const currentRankIndex = ranks.slice().reverse().findIndex(rank => userPoints >= rank.points_required);
    const activeIndex = currentRankIndex !== -1 ? ranks.length - 1 - currentRankIndex : -1;

    return (
        <div className="relative w-full my-8">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200" style={{ transform: 'translateY(-50%)' }}></div>
            <div className="flex justify-between items-center relative">
                {ranks.map((rank, index) => (
                    <div
                        key={rank.name}
                        className={`w-6 h-6 rounded-full border-4 transition-colors duration-500 ${
                            index <= activeIndex ? 'bg-green-500 border-white' : 'bg-gray-300 border-gray-200'
                        }`}
                        style={{ boxShadow: '0 0 0 4px #e5e7eb' }} // Menambahkan outline
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default RankProgressBar;