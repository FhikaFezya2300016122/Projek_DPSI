// src/components/classdetail/PostCard.jsx
import React from 'react';
import { HiOutlineChatAlt } from 'react-icons/hi';

// Impor gambar untuk kartu game, contoh:
import gameImage from '../../Images/bodyword.jpg'; // Pastikan path ini benar
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            
            {/* ======================================================= */}
            {/* KODE BARU UNTUK KARTU GAME DI BAWAH INI               */}
            {/* ======================================================= */}
            {post.game && (
                <div className="relative max-w-sm h-72 mx-auto sm:mx-0 rounded-xl overflow-hidden text-white flex flex-col justify-between p-4">
                    {/* Gambar Latar */}
                    <img src={gameImage} alt={post.game.title} className="absolute inset-0 w-full h-full object-cover" />
                    {/* Gradien Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

                    {/* Konten di atas gambar */}
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold">{post.game.title}</h3>
                        <div className="flex flex-col items-start gap-2 mt-2">
                            <span className="bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{post.game.type}</span>
                            <span className="bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{post.game.difficulty}</span>
                            <span className="bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{post.game.plays}</span>
                        </div>
                    </div>
                    
                    <button className="relative z-10 w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors">
                        Enter
                    </button>
                </div>
            )}

            {/* Footer Postingan */}
            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4 mt-4">
                <div className="flex items-center gap-2">
                    <img src={post.authorAvatar} alt={post.authorName} className="w-8 h-8 rounded-full" />
                    <span>Posted by <span className="font-semibold">{post.authorName}</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <span>{post.timestamp}</span>
                    <Link to={`/classroom/detail/C7/post/${post.id}`} className="flex items-center gap-1 hover:text-teal-500 transition-colors">
    <HiOutlineChatAlt />
    <span>{post.commentCount} Comments</span>
</Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;