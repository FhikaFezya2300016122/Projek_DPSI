// src/pages/RankPage.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import RankCard from '../components/rank/RankCard';
import RankProgressBar from '../components/rank/RankProgressBar';

const RANKS_DATA = [
    { name: 'Bronze', point_range: '0-1000', points_required: 0, next_points: 1001 },
    { name: 'Silver', point_range: '1001-3000', points_required: 1001, next_points: 3001 },
    { name: 'Gold', point_range: '3001-6000', points_required: 3001, next_points: 6001 },
    { name: 'Platinum', point_range: '6001-10000', points_required: 6001, next_points: 10000 },
];

const RankPage = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!user) {
                setLoading(false);
                return;
            }
            
            // PERBAIKAN DI SINI: ganti 'points' menjadi 'total_points'
            const { data, error } = await supabase
                .from('profiles')
                .select('total_points') 
                .eq('id', user.id)
                .single();

            if (error) console.error("Gagal mengambil profil:", error);
            else setProfile(data);
            
            setLoading(false);
        };
        fetchProfile();
    }, [user]);

    if (loading) return <div className="p-8 text-center">Memuat Peringkat...</div>;
    if (!profile) return <div className="p-8 text-center">Gagal memuat data peringkat. Silakan coba lagi.</div>;

    // PERBAIKAN DI SINI: ganti 'points' menjadi 'total_points'
    const userPoints = profile.total_points || 0;

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Rank</h1>
            <RankProgressBar userPoints={userPoints} ranks={RANKS_DATA} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {RANKS_DATA.map((rank) => (
                    <RankCard 
                        key={rank.name} 
                        rank={rank}
                        userPoints={userPoints} 
                    />
                ))}
            </div>
        </div>
    );
};

export default RankPage;