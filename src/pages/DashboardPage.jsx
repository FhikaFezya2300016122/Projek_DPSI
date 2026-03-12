// src/pages/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

// Impor komponen KONTEN
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import StatCards from '../components/dashboard/StatCards';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import RecentActivity from '../components/dashboard/RecentActivity';
import AuthDebugger from '../components/AuthDebugger';

const DashboardPage = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (user) {
                try {
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
                    console.error("Error fetching profile:", error.message);
                }
            }
            setLoading(false);
        };
        
        fetchProfileData();
    }, [user]);

    if (loading) {
        return <div className="p-8 text-center">Loading Dashboard...</div>;
    }

    if (error) {
        return <div className="p-8 text-center text-red-500">Error: {error}</div>;
    }

    if (!profile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <AuthDebugger />
                <p className="text-xl">Gagal memuat data dasbor.</p>
                <p className="text-gray-500 mt-2">Pastikan Anda sudah login dan profil Anda ada.</p>
                <a href="/login" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
                    Kembali ke Halaman Login
                </a>
            </div>
        );
    }

    return (
        <>
            <AuthDebugger />
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
