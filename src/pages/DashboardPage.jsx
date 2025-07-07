// src/pages/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

// HAPUS impor untuk Sidebar dan Header, karena sudah diurus MainLayout
// import Sidebar from '../components/layout/Sidebar/sidebar';
// import Header from '../components/layout/Header/Header';

// Impor komponen KONTEN saja
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import StatCards from '../components/dashboard/StatCards';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import RecentActivity from '../components/dashboard/RecentActivity';

const DashboardPage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect untuk mengambil data profil (TIDAK ADA PERUBAHAN DI SINI)
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const { data: { user }, error: userError } = await supabase.auth.getUser();
                if (userError) throw userError;
                if (!user) {
                    setLoading(false);
                    return;
                }
                const { data, error: profileError } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single();
                if (profileError) throw profileError;
                if (data) {
                    const completeProfile = { ...data, email: user.email };
                    setProfile(completeProfile);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
    }, []);

    // Tampilan loading, error, dan no-profile (TIDAK ADA PERUBAHAN DI SINI)
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading Dashboard...</div>;
    }
    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
    }
    if (!profile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-xl">Please login to view the dashboard.</p>
                <a href="/login" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">Go to Login</a>
            </div>
        );
    }

    // ===================================================================
    // UBAH HANYA BAGIAN RETURN UTAMA DI BAWAH INI
    // ===================================================================
    return (
        // Kita hanya mengembalikan kontennya saja, tanpa div pembungkus,
        // Sidebar, atau Header. Kita gunakan React Fragment <>.
        <>
            <WelcomeBanner profile={profile} />
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <StatCards profile={profile} />
                </div>
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                        <BadgeDisplay profile={profile} />
                        <UserProfileCard profile={profile} />
                    </div>
                </div>
            </div>
            <RecentActivity />
        </>
    );
};

export default DashboardPage;