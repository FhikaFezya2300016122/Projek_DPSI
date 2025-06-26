import React from 'react';
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

export default BadgeDisplay;
