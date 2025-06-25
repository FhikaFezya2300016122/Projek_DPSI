import React from 'react';

// 1. Impor semua gambar lencana dari folder src/Images
import bronzeBadge from '../../Images/bronze 1.png';
import silverBadge from '../../Images/silver 1.png';
import goldBadge from '../../Images/gold 1.png';
import platinumBadge from '../../Images/platinum 1.png';

// --- Ikon untuk Status Kartu ---
const CheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
const LockIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);
const GiftIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
);

// 2. Fungsi bantuan untuk memilih gambar yang benar
const getRankImage = (rankName) => {
    switch (rankName?.toLowerCase()) {
        case 'bronze': return bronzeBadge;
        case 'silver': return silverBadge;
        case 'gold': return goldBadge;
        case 'platinum': return platinumBadge;
        default: return bronzeBadge;
    }
};

// --- Komponen Kartu Peringkat ---
const RankCard = ({ rank, userPoints, nextRankPoints }) => {
    const isUnlocked = userPoints >= rank.points_required;
    const imageToDisplay = getRankImage(rank.name);

    // Menghitung persentase progres ke rank berikutnya
    let progressPercentage = 0;
    if (isUnlocked) {
        // Jika rank saat ini sudah terbuka, hitung progres ke rank selanjutnya
        const pointsInThisRank = userPoints - rank.points_required;
        const pointsForNextRank = nextRankPoints - rank.points_required;
        progressPercentage = (pointsInThisRank / pointsForNextRank) * 100;
        if (progressPercentage > 100) progressPercentage = 100;
    }
    
    return (
        <div className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border-2 transition-all duration-300 ${isUnlocked ? 'border-green-400' : 'border-transparent'}`}>
            <div className="flex items-center gap-2">
                <GiftIcon className="text-gray-600"/>
                <p className="text-lg font-bold text-gray-800">{rank.point_range}</p>
            </div>
            <p className="text-sm text-gray-500">Achievement Points</p>

            {/* PERBAIKAN: Ukuran kontainer gambar diperbesar untuk membuatnya lebih menonjol */}
            <div className="my-6 h-48 w-48 flex items-center justify-center">
                 <img
                    src={imageToDisplay}
                    alt={`${rank.name} Badge`}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            
            {/* PERBAIKAN: Menambahkan tampilan poin dan progress bar */}
            {isUnlocked && (
                 <div className="w-full max-w-xs mb-4">
                    <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-1">
                        <span>{userPoints} Pts</span>
                        <span>Next: {nextRankPoints} Pts</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
                        <div 
                            className="bg-gradient-to-r from-green-400 to-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className={`w-full p-4 rounded-xl flex items-center justify-between mt-auto ${isUnlocked ? 'bg-green-50' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-2">
                    <GiftIcon className={`w-6 h-6 ${isUnlocked ? 'text-green-600' : 'text-gray-400'}`} />
                    <span className={`font-bold text-xl ${isUnlocked ? 'text-green-600' : 'text-gray-400'}`}>+30</span>
                </div>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${isUnlocked ? 'bg-green-500' : 'bg-gray-200'}`}>
                    {isUnlocked ? <CheckIcon className="text-white" /> : <LockIcon className="text-gray-400" />}
                </div>
            </div>
        </div>
    );
};

export default RankCard;
