// src/pages/class-detail/ClassDetailPage.jsx

import React from 'react';
import { HiOutlinePencilAlt, HiOutlineChatAlt, HiOutlineDotsVertical } from 'react-icons/hi';
// Impor avatar dummy
import avatar1 from '../../Images/user1.png'; // Ganti dengan path avatar Anda

// Komponen-komponen kecil untuk halaman ini
const PostCard = ({ post }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mt-2">{post.content}</p>
        
        {post.assignment && (
            <div className="mt-4 bg-gray-800 text-white rounded-xl flex items-center gap-4 p-4">
                <img src="https://storage.googleapis.com/gemini-prod-us-east1-uploads/1312ae2d3625b294.png" alt="assignment" className="w-24 h-24 rounded-lg object-cover"/>
                <div>
                    <span className="text-xs bg-purple-500 px-2 py-1 rounded-full">Puzzle</span>
                    <h4 className="font-bold mt-1">{post.assignment.title}</h4>
                    <p className="text-sm text-gray-300">{post.assignment.details}</p>
                    <button className="bg-teal-500 font-semibold px-8 py-2 rounded-lg mt-3 text-sm hover:bg-teal-600">Enter</button>
                </div>
            </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t">
            <div className="flex items-center gap-2">
                <img src={avatar1} alt="teacher" className="w-8 h-8 rounded-full" />
                <span>Posted by <strong>{post.author}</strong></span>
            </div>
            <div className="flex items-center gap-6">
                <span>{post.time}</span>
                <div className="flex items-center gap-2">
                    <HiOutlineChatAlt />
                    <span>{post.comments} Comments</span>
                </div>
            </div>
        </div>
    </div>
);

const Leaderboard = () => {
    // Data dummy untuk leaderboard
    const players = [
        { rank: 1, name: 'Marcus Lipshutz', points: '12.400PTS', avatar: avatar1 },
        { rank: 2, name: 'Terry Lubin', points: '12.300PTS', avatar: avatar1 },
        { rank: 3, name: 'Omar Franci', points: '12.250PTS', avatar: avatar1 },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="font-bold text-lg">Leaderboard Classes</h3>
            {/* ... Implementasi UI Leaderboard ... */}
            <ul className="mt-4 space-y-4">
                {players.map(player => (
                    <li key={player.rank} className="flex items-center gap-4 text-sm">
                        <span className="font-bold w-6">{player.rank}.</span>
                        <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full" />
                        <div className="flex-grow">
                            <p className="font-semibold text-gray-800">{player.name}</p>
                            <p className="text-gray-500">Diamond</p>
                        </div>
                        <span className="font-bold text-teal-600">{player.points}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const ClassDetailPage = () => {
    // Data dummy untuk postingan forum
    const posts = [
        { id: 1, title: 'Assignment Session 5, Phase 3', content: 'Lorem ipsum dolor sit amet consectetur. Lorem viverra facilisi quis tincidunt arcu. Faucibus auctor tempor accumsan dignissim ut tortor semper.', author: 'Teacher Salsabila', time: '1hr ago', comments: 21, assignment: { title: 'Body word structure', details: 'Easy, 10 Questions' } },
        { id: 2, title: 'Lorem ipsum dolor sit amet consectetur.', content: 'Lorem ipsum dolor sit amet consectetur. Lorem viverra facilisi quis tincidunt arcu. Faucibus auctor tempor accumsan dignissim ut tortor semper.', author: 'Teacher Salsabila', time: '5day ago', comments: 14 },
    ];

    return (
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Kolom Kiri - Konten Utama */}
            <div className="lg:col-span-2 space-y-6">
                {/* Tabs Navigasi */}
                <div className="flex items-center gap-2">
                    <button className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-full">Forum</button>
                    <button className="bg-gray-100 text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200">Assignment</button>
                    <button className="bg-gray-100 text-gray-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200">People</button>
                </div>
                {/* Input Pengumuman */}
                <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-4">
                    <img src={avatar1} alt="user" className="w-10 h-10 rounded-full" />
                    <input type="text" placeholder="Announce something to your class" className="w-full bg-transparent focus:outline-none" />
                    <HiOutlinePencilAlt className="text-gray-500 text-xl" />
                </div>
                {/* Daftar Postingan */}
                <div className="space-y-6">
                    {posts.map(post => <PostCard key={post.id} post={post} />)}
                </div>
            </div>
            
            {/* Kolom Kanan - Leaderboard */}
            <div className="lg:col-span-1">
                <Leaderboard />
            </div>
        </div>
    );
};

export default ClassDetailPage;