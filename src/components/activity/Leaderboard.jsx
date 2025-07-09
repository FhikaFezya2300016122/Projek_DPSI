// src/components/activity/Leaderboard.jsx

import React, { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../supabaseClient';
import { FaCrown } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Leaderboard = () => {
    const [topUsers, setTopUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const fetchLeaderboard = useCallback(async () => {
        setLoading(true);
        
        // PERBAIKAN DI SINI: Mengambil 'full_name' dan 'total_points'
        const { data, error } = await supabase
            .from('profiles')
            .select('full_name, total_points, avatar_url')
            .order('total_points', { ascending: false })
            .limit(10);

        if (error) {
            console.error('Error fetching leaderboard:', error);
        } else {
            setTopUsers(data);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchLeaderboard();
    }, [fetchLeaderboard, location]);

    const getMedalColor = (index) => {
        if (index === 0) return 'text-yellow-400'; // Emas
        if (index === 1) return 'text-gray-400';  // Perak
        if (index === 2) return 'text-yellow-600';// Perunggu
        return 'text-gray-300';
    };

    if (loading) {
        return <div className="p-4 text-center">Memuat papan peringkat...</div>;
    }

    if (!topUsers.length) {
        return <div className="p-4 text-center">Belum ada data peringkat.</div>
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Papan Peringkat</h2>
            <ul className="space-y-4">
                {topUsers.map((user, index) => (
                    <li key={user.full_name + index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                            <span className={`font-bold text-lg w-6 text-center ${getMedalColor(index)}`}>
                                {index < 3 ? <FaCrown /> : index + 1}
                            </span>
                            <img
                                src={user.avatar_url || `https://api.dicebear.com/8.x/initials/svg?seed=${user.full_name}`}
                                alt={user.full_name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                            />
                            <div>
                                {/* PERBAIKAN DI SINI: Menampilkan 'full_name' dan 'total_points' */}
                                <p className="font-semibold text-gray-700">{user.full_name}</p>
                                <p className="text-sm text-gray-500">{user.total_points || 0} Poin</p>
                            </div>
                        </div>
                        <span className="font-bold text-teal-500 text-lg">#{index + 1}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;