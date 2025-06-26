import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

// Impor komponen-komponen
import Sidebar from '../components/layout/Sidebar/sidebar';
import Header from '../components/layout/Header/Header';
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

    // Mengambil data profil dari Supabase saat halaman dimuat
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

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading Ranks...</div>
    }

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-4 md:p-8">
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
                </main>
            </div>
        </div>
    );
};

export default RankPage;
