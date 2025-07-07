// src/components/layout/Sidebar.jsx

import React from 'react';
import logoEnglify from "../../Images/Icon.png";
import { 
    HiChartPie, 
    HiCollection, 
    HiLightningBolt, 
    HiUserCircle, 
    HiCog 
} from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const sidebar = () => {
    // Kita akan gunakan useLocation untuk menentukan link mana yang aktif nanti
    // Untuk sekarang, kita hardcode 'Classroom' sebagai halaman aktif
    const activePage = 'Classroom'; 

    const mainMenuItems = [
        { name: 'Dashboard', icon: <HiChartPie className="w-6 h-6" />, path: '/dashboard' },
        { name: 'Classroom', icon: <HiCollection className="w-6 h-6" />, path: '/classroom' },
        { name: 'Activity', icon: <HiLightningBolt className="w-6 h-6" />, path: '/activity' },
    ];

    const otherMenuItems = [
        { name: 'Profile', icon: <HiUserCircle className="w-6 h-6" />, path: '/profile' },
        { name: 'Settings', icon: <HiCog className="w-6 h-6" />, path: '/settings' },
    ];

    return (
        <div className="h-screen bg-white w-64 p-6 flex flex-col shadow-lg">
            {/* Logo */}
            <div className="mb-10">
                 <img src={logoEnglify} alt="Englify Logo" className="h-8 w-auto" />
            </div>

            {/* Main Menu */}
            <nav className="flex-grow">
                <p className="text-xs text-gray-400 font-semibold uppercase mb-4">Main</p>
                <ul className="space-y-2">
                    {mainMenuItems.map((item) => (
                        <li key={item.name}>
                            <Link 
                                to={item.path} 
                                className={`flex items-center gap-4 p-3 rounded-lg font-semibold transition-colors duration-200 ${
                                    activePage === item.name 
                                    ? 'bg-teal-500 text-white shadow-md' 
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className="text-xs text-gray-400 font-semibold uppercase mt-10 mb-4">Other Menu</p>
                <ul className="space-y-2">
                    {otherMenuItems.map((item) => (
                        <li key={item.name}>
                            <Link 
                                to={item.path} 
                                className="flex items-center gap-4 p-3 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mungkin nanti bisa ditambahkan info user atau tombol logout di sini */}
        </div>
    );
};

export default sidebar;