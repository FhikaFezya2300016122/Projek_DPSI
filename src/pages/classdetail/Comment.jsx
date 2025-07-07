// src/components/classdetail/Comment.jsx

import React from 'react';
import { HiThumbUp, HiThumbDown, HiOutlineChatAlt } from 'react-icons/hi';

const Comment = ({ comment }) => {
    return (
        <div className="flex items-start gap-4">
            {/* Avatar Pengguna */}
            <img src={comment.authorAvatar} alt={comment.authorName} className="w-10 h-10 rounded-full" />
            
            <div className="flex-1">
                {/* Header Komentar */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-bold text-gray-800">{comment.authorName}</span>
                    <span className="text-gray-500">{comment.timestamp}</span>
                </div>

                {/* Isi Komentar */}
                <p className="text-gray-700 mt-1">{comment.text}</p>

                {/* Aksi Komentar */}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-teal-500">
                        <HiThumbUp />
                        <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-500">
                        <HiThumbDown />
                        <span>{comment.dislikes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-800">
                        <HiOutlineChatAlt />
                        <span>Reply</span>
                    </button>
                </div>

                {/* Bagian untuk Balasan Komentar (Replies) */}
                {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 space-y-4 border-l-2 border-gray-100 pl-6">
                        {comment.replies.map(reply => (
                            // Komponen Comment memanggil dirinya sendiri untuk balasan (rekursi)
                            <Comment key={reply.id} comment={reply} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;