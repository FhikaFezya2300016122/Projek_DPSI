// src/pages/postdetail/PostDetailPage.jsx

import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import PostCard from '../classdetail/PostCard';
import Comment from '../classdetail/Comment'; // <-- Impor komponen baru
import PrivateCommentBox from '../classdetail/PrivateCommentBox';
import { useNavigate } from 'react-router-dom';

// Data Contoh untuk Postingan (tidak berubah)
const postData = {
    id: 1,
    title: 'Assignment Session 3, Phase 3',
    content: 'Lorem ipsum dolor sit amet consectetur. Lorem viverra facilisi quis tincidunt arcu. Faucibus accumsan dignissim ut tortor semper.',
    authorName: 'Teacher Farid',
    authorAvatar: 'https://i.pravatar.cc/150?u=salsabila',
    timestamp: '1hr ago',
    commentCount: 21,
    game: { 
        title: 'Body word structure', 
        type: 'Puzzle',
        difficulty: 'Easy, 10 Questions',
        plays: '125k Plays'
    }
};

// Data Contoh untuk Komentar (BARU)
const mockComments = [
    {
        id: 1,
        authorName: 'Faqih',
        authorAvatar: 'https://i.pravatar.cc/150?u=jumangin',
        timestamp: '30 minutes ago',
        text: 'Malazz.',
        likes: 8,
        dislikes: 2,
        replies: [
            {
                id: 11,
                authorName: 'Teacher Farid',
                authorAvatar: 'https://i.pravatar.cc/150?u=salsabila',
                timestamp: '12 minutes ago',
                text: 'Keruangan saya sekarang',
                likes: 8,
                dislikes: 2,
                replies: []
            }
        ]
    },
    {
        id: 2,
        authorName: 'Slamet',
        authorAvatar: 'https://i.pravatar.cc/150?u=slamet',
        timestamp: '12 minutes ago',
        text: 'google Clasroom versi family',
        likes: 8,
        dislikes: 2,
        replies: []
    }
];

const PostDetailPage = () => {
    const navigate = useNavigate();
     return (
        <div className="space-y-6">
            
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* 3. Tambahkan onClick pada tombol */}
                    <button 
                        onClick={() => navigate(-1)} 
                        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <HiArrowLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-800">{postData.title}</h1>
                </div>
            </div>

            <nav className="text-sm font-medium text-gray-500 flex items-center gap-2 flex-wrap">
                <span>Classroom</span>
                <span>&gt;</span>
                <span>Class 7c</span>
                <span>&gt;</span>
                <span>Forum</span>
                <span>&gt;</span>
                <span className="text-gray-800">{postData.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-6">
                    <PostCard post={postData} />
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-6">Class Comments</h3>
                        <div className="space-y-6">
                            {mockComments.map((comment) => (
                                <Comment key={comment.id} comment={comment} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <PrivateCommentBox />
                </div>
            </div>
        </div>
    );
};

export default PostDetailPage;