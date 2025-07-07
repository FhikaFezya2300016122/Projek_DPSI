// src/components/classdetail/PrivateCommentBox.jsx

import React, { useState } from 'react';

const PrivateCommentBox = () => {
    const [privateComment, setPrivateComment] = useState('');

    const handleSend = () => {
        if (!privateComment.trim()) return; // Jangan kirim komentar kosong
        // Untuk saat ini, kita tampilkan alert. Nanti ini bisa diganti dengan logika pengiriman ke database.
        alert(`Private comment sent:\n\n"${privateComment}"`);
        setPrivateComment(''); // Kosongkan textarea setelah dikirim
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Private Comments</h3>
            <textarea
                className="w-full h-28 p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                placeholder="Add comment to teacher salsabila"
                value={privateComment}
                onChange={(e) => setPrivateComment(e.target.value)}
            ></textarea>
            <button
                onClick={handleSend}
                className="w-full bg-teal-500 text-white font-bold py-3 mt-4 rounded-lg hover:bg-teal-600 transition-colors"
            >
                Send Comment
            </button>
        </div>
    );
};

export default PrivateCommentBox;