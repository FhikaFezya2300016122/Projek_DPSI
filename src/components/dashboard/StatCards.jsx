import React from 'react';

// --- KOMPONEN KARTU STATISTIK (TERHUBUNG SUPABASE) ---
// Komponen ini menerima 'profile' sebagai prop untuk menampilkan data dinamis.
const StatCards = ({ profile }) => {
    
    // Pengecekan awal jika prop profile belum siap.
    if (!profile) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex items-center justify-center">
                <p className="text-gray-500">Loading stats...</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-around h-full">
            {/* Menampilkan Poin Reward dari data profil */}
            <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-800">{profile.total_points || 0}</p>
                <p className="text-gray-500 mt-1">Point Reward</p>
            </div>

            {/* PERBAIKAN: Menampilkan Point Achievement dari data profil */}
            <div className="my-4">
                <p className="text-3xl md:text-4xl font-bold text-gray-800">{profile.point_achievement || 0}</p>
                <p className="text-gray-500 mt-1">Point Achievement</p>
            </div>

            {/* Menampilkan Total Game yang Dimainkan dari data profil */}
            <div>
                <p className="text-3xl md:text-4xl font-bold text-gray-800">{profile.games_played || 0}</p>
                <p className="text-gray-500 mt-1">Total games played</p>
            </div>
        </div>
    );
};

export default StatCards;
