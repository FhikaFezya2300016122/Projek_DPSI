// src/pages/RankPage.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

// HAPUS impor komponen layout
// import Sidebar from '../components/layout/Sidebar/sidebar';
// import Header from '../components/layout/Header/Header';

import RankCard from '../components/rank/RankCard';
import RankProgressBar from '../components/rank/RankProgressBar';

// Data statis untuk setiap peringkat.
const RANKS_DATA = [
    { name: 'Bronze', point_range: '0-1000', points_required: 0, image_path: '/images/bronze 1.png' },
    { name: 'Silver', point_range: '1001-3000', points_required: 1001, image_path: '/images/silver 1.png' },
    { name: 'Gold', point_range: '3001-6000', points_required: 3001, image_path: '/images/gold 1.png' },
    { name: 'Platinum', point_range: '6001-10000', points_required: 6001, image_path: '/images/platinum 1.png' },
];


const RankPage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect untuk mengambil data profil (TIDAK ADA PERUBAHAN)
    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();
                setProfile(data);
            }
            setLoading(false);
        };
        fetchProfile();
    }, []);

    // Tampilan loading (TIDAK ADA PERUBAHAN)
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading Ranks...</div>
    }

    // UBAH HANYA BAGIAN RETURN UTAMA DI BAWAH INI
    return (
        // Gunakan <> (React.Fragment) untuk membungkus konten
        <>
            <h1 className="text-3xl font-bold text-gray-800">Rank</h1>
            <RankProgressBar userPoints={profile?.total_points || 0} ranks={RANKS_DATA} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                {RANKS_DATA.map(rank => (
                    <RankCard 
                        key={rank.name} 
                        rank={rank}
                        userPoints={profile?.total_points || 0} 
                    />
                ))}
            </div>
        </>
    );
};

export default RankPage;