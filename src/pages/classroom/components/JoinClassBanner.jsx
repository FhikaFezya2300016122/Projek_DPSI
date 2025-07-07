// src/components/classroom/JoinClassBanner.jsx

import React from 'react';
import illustration from '../../Images/joinclass.png'; // Pastikan path ini benar

const JoinClassBanner = ({ code, setCode, onJoin, error }) => {
    return (
        <div className="relative p-8 rounded-2xl overflow-hidden bg-teal-50">
            {/* Background Image */}
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${illustration})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                <p className="text-lg font-semibold text-gray-700">
                    Enter the connect code your teacher shared with you below
                </p>
                <div className="flex items-start gap-2">
                    <div>
                        <input
                            type="text"
                            placeholder="Type connect code"
                            value={code}
                            onChange={(e) => {
                                setCode(e.target.value);
                                if (error) setError('');
                            }}
                            className="px-4 py-3 bg-white rounded-xl border-gray-300 w-64 text-center focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <button
                        onClick={() => onJoin(code)}
                        className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-600 transition-all duration-200"
                    >
                        Join Class
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinClassBanner;