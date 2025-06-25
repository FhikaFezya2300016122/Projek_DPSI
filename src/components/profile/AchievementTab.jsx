import React from 'react';

// Definisikan komponen ikon di sini atau impor dari file terpusat
const CheckCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const GiftIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
);

// Komponen ini menampilkan bagian Daily Reward dan statistik.
const AchievementTab = () => {
    const dailyRewards = [
        { day: 1, points: 5, claimed: true },
        { day: 2, points: 10, claimed: false },
        { day: 3, points: 15, claimed: false },
        { day: 4, points: 20, claimed: false },
        { day: 5, points: 25, claimed: false },
        { day: 6, points: 30, claimed: false },
    ];
    return(
    <div className="mt-6">
        <h4 className="font-bold text-lg mb-4 text-gray-800">Claim Your Daily Reward !</h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {dailyRewards.map(reward => (
                <div key={reward.day} className={`p-4 rounded-xl ${reward.claimed ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100'}`}>
                    <p className="font-bold text-lg">+{reward.points}</p>
                    <div className="my-3 flex justify-center">{reward.claimed ? <CheckCircleIcon className="text-green-500" /> : <GiftIcon className="text-gray-400" />}</div>
                    <p className="text-sm font-semibold text-gray-600">Hari {reward.day}</p>
                </div>
            ))}
        </div>
        <button className="w-full mt-6 py-3 bg-gray-300 text-gray-500 font-bold rounded-lg cursor-not-allowed">Claim Tomorrow</button>
    </div>
)};

// PASTIKAN BARIS INI ADA DI AKHIR FILE ANDA
export default AchievementTab;
