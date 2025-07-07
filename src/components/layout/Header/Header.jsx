// src/components/layout/Header.jsx

import React from 'react';
import { HiOutlineSearch, HiOutlineBell } from 'react-icons/hi';

const Header = ({ pageTitle }) => {
    return (
        <header className="w-full bg-white p-6 flex items-center justify-between border-b border-gray-200">
            {/* Judul Halaman */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">{pageTitle || 'Dashboard'}</h1>
                {/* Breadcrumbs bisa ditambahkan di sini nanti */}
            </div>

            {/* Bar Pencarian */}
            <div className="relative w-1/3">
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
                    {/* Placeholder untuk Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gray-300">
                        {/* <img src="..." alt="User Avatar" /> */}
                    </div>
                    {/* Nama dan Role bisa ditambahkan di sini */}
                </div>
            </div>
        </header>
    );
};

export default Header;