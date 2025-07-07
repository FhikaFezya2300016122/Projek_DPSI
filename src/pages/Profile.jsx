// src/pages/ProfilePage.jsx

import React, { useState, useEffect } from 'react';

// HAPUS impor komponen layout
// import Sidebar from '../components/layout/Sidebar/sidebar';
// import Header from '../components/layout/Header/Header';

import { supabase } from '../supabaseClient';
import PersonalInfoTab from '../components/profile/PersonalInfoTab';
import AchievementTab from '../components/profile/AchievementTab';
import RecentActivityTab from '../components/profile/RecentActivityTab';

// Komponen Ikon sederhana
const InfoIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);
const CheckCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

// --- Komponen Utama Halaman Profil ---
const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('Personal info');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };
        fetchUser();
    }, []);

    const TabButton = ({ label }) => (
        <button
            onClick={() => setActiveTab(label)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === label ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
            {label}
        </button>
    );
    
    // Tampilan loading, sama seperti sebelumnya
    if (loading) {
        return <p>Loading profile...</p>;
    }

    // UBAH HANYA BAGIAN RETURN UTAMA DI BAWAH INI
    return (
        // Gunakan <> (React.Fragment) untuk membungkus konten
        <>
            {/* Header Profil */}
            <div className="text-center bg-green-50 p-8 rounded-2xl">
                <img
                    src={`https://ui-avatars.com/api/?name=${user?.email?.charAt(0)}&background=EBF4FF&color=4299E1&size=96`}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <h2 className="text-2xl font-bold text-gray-800">{user?.user_metadata?.full_name || user?.email?.split('@')[0]}</h2>
                <p className="max-w-xl mx-auto text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur. Eu non mauris aliquam faucibus et semper risus eget leo. Lorem velit curabitur sit faucibus elementum viverra cursus.
                </p>
            </div>

            {/* Tombol Tab */}
            <div className="flex justify-center items-center gap-4 my-6 bg-gray-200 p-1 rounded-xl w-max mx-auto">
                <TabButton label="Personal info" />
                <TabButton label="Achievement" />
                <TabButton label="Recent Activity" />
            </div>

            {/* Konten Tab */}
            <div>
                {activeTab === 'Personal info' && (
                    <>
                        <div className="bg-white p-4 rounded-2xl shadow-sm">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <p className="font-bold">Profile Strength</p>
                                    <InfoIcon className="text-gray-400" />
                                </div>
                                <div className="flex items-center gap-2 font-semibold text-green-600">
                                    <p>100% Completed</p>
                                    <CheckCircleIcon />
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: `100%` }}></div>
                            </div>
                        </div>
                        <PersonalInfoTab user={user} />
                    </>
                )}
                {activeTab === 'Achievement' && <AchievementTab />}
                {activeTab === 'Recent Activity' && <RecentActivityTab />}
            </div>
        </>
    );
};

export default ProfilePage;