import React from 'react';
import { useNavigate } from 'react-router-dom';
// 1. Impor logo dari folder Images
import englifyLogo from '../Images/Icon.png';

// --- Komponen Ikon Sederhana ---
const CheckCircleIcon = () => (
    <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SuccessPage = () => {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
            {/* 2. Logo di atas kartu, sama seperti halaman lain */}
            <div className="flex items-center mb-6">
                <img src={englifyLogo} alt="Englify Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold ml-2 text-gray-800">Englify</span>
            </div>
            
            {/* Kartu Selamat Datang */}
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                    <CheckCircleIcon />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900">
                    🎉 Welcome to Englify! 🎉
                </h2>
                <p className="text-gray-600 mt-2 max-w-sm mx-auto">
                    You have successfully registered and chosen your role. Now, you're ready to explore and learn in a fun way. Let's go!
                </p>

                <div className="mt-8">
                    <button
                        onClick={goToDashboard}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
