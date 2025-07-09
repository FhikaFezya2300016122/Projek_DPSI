// src/components/layout/Header/Header.jsx

import React from 'react';
import { HiOutlineSearch, HiOutlineBell, HiMenuAlt1 } from 'react-icons/hi';

// UBAH BARIS INI: Path impor disesuaikan dengan lokasi file yang baru
import UserProfileImage from '../../../Images/user1.png'; 

const Header = ({ pageTitle, onMenuClick }) => {
    return (
        <header className="w-full bg-white p-4 md:px-8 flex items-center justify-between border-b border-gray-200">
            {/* Judul Halaman & Tombol Menu Mobile */}
            <div className="flex items-center gap-4">
                <button onClick={onMenuClick} className="text-2xl text-gray-600 lg:hidden">
                    <HiMenuAlt1 />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">{pageTitle || 'Dashboard'}</h1>
            </div>

            {/* Bar Pencarian */}
            <div className="relative hidden lg:block w-1/3">
                <HiOutlineSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search for something..."
                    className="w-full bg-gray-100 rounded-lg py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>

            {/* Ikon Aksi & Profil Pengguna */}
            <div className="flex items-center gap-6">
                <button className="text-gray-500 hover:text-gray-800">
                    <HiOutlineBell className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3">
                    <img src={UserProfileImage} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
                </div>
            </div>
        </header>
    );
};

export default Header;