// src/components/classdetail/ClassLeaderboard.jsx
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';

// Data contoh baru dengan status peringkat
const leaderboardData = [
    { rank: 1, name: 'Kanza', avatar: 'https://i.pravatar.cc/150?u=marcus', tier: 'Diamond', points: '12.400PTS', status: 'up' },
    { rank: 2, name: 'Aldi', avatar: 'https://i.pravatar.cc/150?u=terry', tier: 'Diamond', points: '12.300PTS', status: 'down' },
    { rank: 3, name: 'Dayat', avatar: 'https://i.pravatar.cc/150?u=omar', tier: 'Diamond', points: '12.250PTS', status: 'same' },
    { rank: 4, name: 'Laya', avatar: 'https://i.pravatar.cc/150?u=nolan', tier: 'Diamond', points: '12.000PTS', status: 'up' },
    { rank: 5, name: 'Pondut', avatar: 'https://i.pravatar.cc/150?u=cooper', tier: 'Diamond', points: '11.980PTS', status: 'down' },
    { rank: 6, name: 'Poren', avatar: 'https://i.pravatar.cc/150?u=lindsey', tier: 'Diamond', points: '11.900PTS', status: 'same' },
];

const myRankData = { rank: 55, name: 'Olivia Sara', avatar: 'https://i.pravatar.cc/150?u=olivia', tier: 'Diamond', points: '10.800PTS', status: 'same' };

// Komponen kecil untuk satu baris pemain agar kode tidak berulang
const PlayerRow = ({ player, isMyRank = false }) => {
    const rankChangeIcon = {
        up: <HiArrowSmUp className="text-green-500" />,
        down: <HiArrowSmDown className="text-red-500" />,
        same: <span className="text-gray-400 w-5 text-center">—</span>,
    }[player.status];

    const textColor = isMyRank ? 'text-white' : 'text-gray-800';
    const subTextColor = isMyRank ? 'text-gray-300' : 'text-gray-500';
    const pointsColor = isMyRank ? 'text-teal-300' : 'text-gray-800';

    return (
        <div className="flex items-center gap-3 w-full">
            <div className="flex items-center gap-2 w-10 text-sm">
                {rankChangeIcon}
                <span className={`font-semibold ${isMyRank ? 'text-gray-300' : 'text-gray-500'}`}>{player.rank}</span>
            </div>
            <div className="relative p-1 bg-gradient-to-tr from-amber-200 to-yellow-400 rounded-full">
                <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div className="flex-grow">
                <p className={`font-bold ${textColor}`}>{player.name}</p>
                <p className={`text-xs ${subTextColor}`}>{player.tier}</p>
            </div>
            <span className={`font-bold text-sm ${pointsColor}`}>{player.points}</span>
        </div>
    );
};

const ClassLeaderboard = () => {
    const [activeTab, setActiveTab] = useState('All-time');
    const tabs = ['Weekly', 'Monthly', 'All-time'];

    return (
        <div className="bg-white rounded-2xl shadow-sm w-full flex flex-col h-[800px] overflow-hidden">
            
            {/* Bagian Atas (Judul, Tab, Podium) */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Leaderboard Classes</h3>
                
                {/* Session Selector */}
                <div className="flex justify-between items-center mb-6 border border-gray-200 rounded-full p-1">
                    <button className="p-2 rounded-full hover:bg-gray-100"><HiChevronLeft className="w-5 h-5 text-gray-500" /></button>
                    <span className="font-semibold text-gray-700 text-sm">Session 1</span>
                    <button className="p-2 rounded-full hover:bg-gray-100"><HiChevronRight className="w-5 h-5 text-gray-500" /></button>
                </div>

                {/* Header Kolom */}
                <div className="flex items-center text-xs text-gray-400 font-bold px-2">
                    <p className="w-10">Rank</p>
                    <p className="pl-14 flex-grow">Player</p>
                    <p>Points</p>
                </div>
            </div>

            {/* Daftar Peringkat (Scrollable) */}
            <div className="px-6 flex-grow overflow-y-auto space-y-2">
                {leaderboardData.map((player) => (
                    <PlayerRow key={player.rank} player={player} />
                ))}
            </div>
            
            {/* Footer "My Rank" */}
            <div className="mt-auto">
                <div className="p-4 bg-gray-800 text-white">
                    <p className="font-bold text-sm mb-2">My Rank</p>
                    <div className="h-px bg-teal-500 w-full mb-3"></div>
                    <PlayerRow player={myRankData} isMyRank={true} />
                </div>
            </div>
        </div>
    );
};

export default ClassLeaderboard;