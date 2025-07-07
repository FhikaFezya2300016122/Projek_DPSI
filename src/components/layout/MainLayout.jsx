// src/components/layout/MainLayout.jsx

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Impor Outlet
import { AnimatePresence } from "framer-motion";
import Sidebar from './Sidebar'; // Impor Sidebar
import { HiOutlineSearch, HiOutlineBell, HiMenuAlt1, HiX } from "react-icons/hi";
import UserProfileImage from '../../Images/user1.png'; // Sesuaikan path jika perlu

// Pindahkan komponen Header ke sini agar bisa dipakai di semua halaman dalam layout
const Header = ({ onMenuClick }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <header className="bg-white px-4 md:px-8">
            <div className="flex justify-between items-center py-5">
                {isSearchOpen ? (
                    <div className="flex items-center w-full gap-2">
                        <div className="relative flex-grow">
                            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input type="text" placeholder="Cari sesuatu..." className="w-full pl-12 pr-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500" autoFocus />
                        </div>
                        <button onClick={() => setIsSearchOpen(false)} className="text-2xl text-gray-600"><HiX /></button>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center gap-4">
                            <button onClick={onMenuClick} className="text-2xl text-gray-600 lg:hidden"><HiMenuAlt1 /></button>
                            {/* Judul ini bisa dibuat dinamis nanti */}
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Classroom</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden lg:block">
                                <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input type="text" placeholder="Search for something" className="pl-12 pr-4 py-2.5 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 w-64" />
                            </div>
                            <button onClick={() => setIsSearchOpen(true)} className="text-2xl text-gray-600 lg:hidden"><HiOutlineSearch /></button>
                            <button className="text-2xl text-gray-600"><HiOutlineBell /></button>
                            <img src={UserProfileImage} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
                        </div>
                    </>
                )}
            </div>
            {/* Breadcrumb bisa dihapus dari layout utama atau dibuat dinamis */}
        </header>
    );
};


const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex min-h-screen bg-slate-50 relative">
            <AnimatePresence>
                {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
            </AnimatePresence>
            <div className="hidden lg:block"><Sidebar /></div>
            
            <div className="flex-1 flex flex-col">
                <Header onMenuClick={toggleSidebar} />
                <main className="p-4 md:p-8">
                    {/* <Outlet> adalah tempat halaman (Daftar Kelas, Detail Kelas) akan dirender */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;