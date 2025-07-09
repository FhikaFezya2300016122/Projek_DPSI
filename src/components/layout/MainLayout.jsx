// src/components/layout/MainLayout.jsx

import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Sidebar from './Sidebar';
import Header from './Header/Header';

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Menggunakan useLocation untuk mendapatkan path URL saat ini
    const location = useLocation();

    // Fungsi untuk menentukan judul halaman berdasarkan path
    const getPageTitle = () => {
        const path = location.pathname.toLowerCase();
        if (path.startsWith('/dashboard')) return 'Dashboard';
        if (path.startsWith('/classroom')) return 'Classroom';
        if (path.startsWith('/activity')) return 'Activity';
        if (path.startsWith('/profile')) return 'Profile';
        if (path.startsWith('/settings')) return 'Settings';
        return 'Dashboard'; // Judul default
    };

    return (
        <div className="flex min-h-screen bg-slate-50 relative">
            {/* Sidebar untuk tampilan mobile (muncul/hilang) */}
            <AnimatePresence>
                {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
            </AnimatePresence>
            
            {/* Sidebar permanen untuk tampilan desktop */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>
            
            <div className="flex-1 flex flex-col w-full">
                {/* Mengirim judul dinamis dan fungsi toggle ke Header */}
                <Header 
                    pageTitle={getPageTitle()} 
                    onMenuClick={toggleSidebar} 
                />
                
                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {/* <Outlet> akan merender konten halaman yang sesuai */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;