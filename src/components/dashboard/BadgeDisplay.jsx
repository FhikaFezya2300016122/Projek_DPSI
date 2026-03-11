import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

// --- IMPOR GAMBAR DENGAN JALUR YANG BENAR ---
// Path ini berarti: "naik dari 'dashboard' ke 'components', lalu naik lagi ke 'src', baru masuk ke 'Images'".
import bronzeBadge from '../../Images/bronze 1.png';
import silverBadge from '../../Images/silver 1.png';
import goldBadge from '../../Images/gold 1.png';
import platinumBadge from '../../Images/platinum 1.png';


// --- FUNGSI BANTUAN ---

// Fungsi ini sekarang akan mengembalikan variabel gambar yang sudah diimpor.
const getRankImage = (rank) => {
    const rankName = rank?.toLowerCase() || 'bronze';
    switch (rankName) {
        case 'bronze': return bronzeBadge;
        case 'silver': return silverBadge;
        case 'gold': return goldBadge;
        case 'platinum': return platinumBadge;
        default: return bronzeBadge;
    }
};

// Fungsi untuk menghitung progres ke rank selanjutnya
const calculateProgress = (points) => {
    if (points >= 6001) return { progress: 100, nextRank: 'Max' };
    if (points >= 3001) return { progress: ((points - 3001) / (6001 - 3001)) * 100, nextRank: '6001' };
    if (points >= 1001) return { progress: ((points - 1001) / (3001 - 1001)) * 100, nextRank: '3001' };
    return { progress: (points / 1001) * 100, nextRank: '1001' };
};


// --- KOMPONEN BADGE DISPLAY ---
const BadgeDisplay = ({ profile }) => {
    const rank = profile?.badge || 'Bronze';
    const totalPoints = profile?.total_points || 0;
    
    const imageToDisplay = getRankImage(rank);
    const { progress, nextRank } = calculateProgress(totalPoints);

    return (
        <Link to="/rank" className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-between text-center h-full hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div>
                <div className="flex items-center justify-center space-x-4 h-32 w-32">
                    <img
                        src={imageToDisplay}
                        alt={`${rank} Badge`}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <p className="text-xl font-bold mt-2 text-gray-800">{rank}</p>
            </div>
            
            {/* PERBAIKAN: Tampilan baru untuk poin dan progress bar */}
            <div className="w-full max-w-xs mt-4">
                <div className="mb-2">
                    <span className="text-3xl font-bold text-green-600">{totalPoints}</span>
                    <span className="text-base font-semibold text-gray-500"> Pts</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-green-400 to-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-end text-xs font-semibold text-gray-500 mt-1">
                    <span>Next: {nextRank} Pts</span>
                </div>
            </div>
        </Link>
    );
};
=======

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
>>>>>>> development

export default BadgeDisplay;
