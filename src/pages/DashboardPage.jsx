// src/pages/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext'; // 1. Impor useAuth

// Impor komponen KONTEN
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import StatCards from '../components/dashboard/StatCards';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import RecentActivity from '../components/dashboard/RecentActivity';
import AuthDebugger from '../components/AuthDebugger'; // 2. Impor AuthDebugger

const DashboardPage = () => {
    const { user } = useAuth(); // 3. Dapatkan pengguna dari AuthContext
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            // Pastikan ada pengguna yang login sebelum mengambil profil
            if (user) {
                try {
                    const { data, error: profileError } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', user.id)
                        .single();

                    if (profileError) throw profileError;
                    
                    if (data) {
                        // Gabungkan data profil dari DB dengan email dari auth
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
    }, [user]); // 4. Jalankan ulang efek ini setiap kali 'user' berubah

    // Tampilan saat loading
    if (loading) {
        return <div className="p-8 text-center">Loading Dashboard...</div>;
    }

    // Tampilan jika ada error
    if (error) {
        return <div className="p-8 text-center text-red-500">Error: {error}</div>;
    }

    // Tampilan jika pengguna tidak login atau profil tidak ditemukan
    if (!profile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <AuthDebugger /> {/* Tetap tampilkan debugger untuk analisis */}
                <p className="text-xl">Gagal memuat data dasbor.</p>
                <p className="text-gray-500 mt-2">Pastikan Anda sudah login dan profil Anda ada.</p>
                <a href="/login" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
                    Kembali ke Halaman Login
                </a>
            </div>
        );
    }

    // Tampilan utama dasbor jika semua berhasil
    return (
        <>
            <AuthDebugger /> {/* Tambahkan debugger untuk analisis di console */}
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