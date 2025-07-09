// src/pages/ResultsPage.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import toast, { Toaster } from 'react-hot-toast';

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { pointsEarned, gameTitle } = location.state || { pointsEarned: 0, gameTitle: 'Aktivitas' };

    useEffect(() => {
        if (user && pointsEarned > 0) {
            const updateUserRank = async () => {
                toast.loading('Menyimpan progres...');
                const { error } = await supabase.rpc('update_user_points', {
                    user_id_input: user.id,
                    points_to_add: pointsEarned
                });
                toast.dismiss();
                if (error) {
                    toast.error('Gagal memperbarui poin.');
                } else {
                    toast.success('Poin berhasil dicatat!');
                }
            };
            updateUserRank();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <Toaster />
            <div className="w-full max-w-md p-8 text-center bg-white rounded-2xl shadow-lg">
                <HiOutlineCheckCircle className="w-24 h-24 mx-auto text-green-500" />
                <h1 className="mt-4 text-3xl font-bold">Kerja Bagus!</h1>
                <p className="mt-2 text-gray-600">Anda menyelesaikan {gameTitle}.</p>
                <div className="my-8">
                    <p className="text-lg text-gray-500">Poin yang Didapat:</p>
                    <p className="text-6xl font-bold text-teal-500">{pointsEarned}</p>
                </div>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full px-6 py-3 mt-4 text-lg font-semibold text-white bg-teal-600 rounded-lg"
                >
                    Kembali ke Dashboard
                </button>
            </div>
        </div>
    );
};

export default ResultsPage;