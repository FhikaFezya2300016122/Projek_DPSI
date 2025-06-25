import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Pastikan path ini benar

// Impor semua komponen yang diperlukan
import Sidebar from '../components/layout/Sidebar/sidebar';
import Header from '../components/layout/Header/Header';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import StatCards from '../components/dashboard/StatCards';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import RecentActivity from '../components/dashboard/RecentActivity';

const DashboardPage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect untuk mengambil data profil
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // 1. Dapatkan data pengguna yang sedang login
                const { data: { user }, error: userError } = await supabase.auth.getUser();

                if (userError) throw userError;
                if (!user) {
                    // Jika tidak ada user, hentikan loading dan jangan lakukan apa-apa
                    setLoading(false);
                    return;
                }

                // 2. Dapatkan data dari tabel 'profiles' berdasarkan ID pengguna
                const { data, error: profileError } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single(); // Mengharapkan satu profil per pengguna

                if (profileError) throw profileError;

                // 3. Gabungkan data auth dan profil, lalu simpan ke state
                if (data) {
                    const completeProfile = { ...data, email: user.email };
                    setProfile(completeProfile);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                // 4. Pastikan loading selalu dihentikan setelah semua proses selesai
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    // Tampilan saat data sedang diambil
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading Dashboard...</div>;
    }
    
    // Tampilan jika terjadi error
    if (error) {
         return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
    }
    
    // Tampilan jika tidak ada pengguna yang login
    if (!profile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-xl">Please login to view the dashboard.</p>
                <a href="/login" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">Go to Login</a>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50 font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                    {/* Kirim data 'profile' sebagai prop ke setiap komponen anak */}
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
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
