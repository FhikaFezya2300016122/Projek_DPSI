// src/pages/classdetail/ClassDetailPage.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { HiPlus } from "react-icons/hi";
import AddGameModal from './components/AddGameModal';
import GameCard from '../../components/activity/GameCard';
import { Edit } from 'lucide-react';

const ClassDetailPage = () => {
    const { classId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [classDetails, setClassDetails] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [assignedGames, setAssignedGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchClassData = useCallback(async () => {
        if (!user || !classId) return;
        setLoading(true);

        const { data: classData } = await supabase.from('classes').select('*').eq('id', classId).single();
        const { data: memberData } = await supabase.from('class_members').select('role').eq('user_id', user.id).eq('class_id', classId).single();
        
        // **PERBAIKAN KUNCI DI SINI**
        // Query sekarang mengambil semua detail dari tabel 'games'
        const { data: assignmentData, error } = await supabase
            .from('class_assignments')
            .select('games (*)') // Ini akan mengambil semua kolom dari game yang terhubung
            .eq('class_id', classId);

        if (error) console.error("Error fetching assignments:", error);

        setClassDetails(classData);
        setUserRole(memberData?.role);
        
        if (assignmentData) {
            // Kita tidak perlu lagi membedakan game custom atau bukan di sini
            setAssignedGames(assignmentData.map(item => item.games).filter(Boolean));
        } else {
            setAssignedGames([]);
        }
        
        setLoading(false);
    }, [classId, user]);

    useEffect(() => {
        fetchClassData();
    }, [fetchClassData]);

    if (loading) return <div className="p-8 text-center">Memuat detail kelas...</div>;
    if (!classDetails) return <div className="p-8 text-center">Kelas tidak ditemukan.</div>;

    const existingGameIds = assignedGames.map(game => game.id);

    return (
        <div className="p-4 md:p-8">
            <div className="mb-8 p-6 bg-white rounded-lg shadow">
                <h1 className="text-4xl font-bold">{classDetails.class_name}</h1>
                <p className="text-gray-600 mt-2">{classDetails.description}</p>
                <p className="text-sm text-gray-500 mt-4">
                    Kode Kelas: 
                    <span className="ml-2 font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded">
                        {classDetails.class_code}
                    </span>
                </p>
            </div>

            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Tugas Game</h2>
                    {userRole === 'teacher' && (
                        <div className="flex gap-4">
                             <button 
                                onClick={() => navigate('/create-custom-game')}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                            >
                                <Edit size={16} />
                                Buat Game Custom
                            </button>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700"
                            >
                                <HiPlus />
                                Tambahkan Game
                            </button>
                        </div>
                    )}
                </div>
                
                {assignedGames.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {assignedGames.map(game => (
                            <div key={game.id} onClick={() => navigate(game.path)} className="cursor-pointer">
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed">
                        <p className="text-gray-500">
                            {userRole === 'teacher' ? 'Belum ada game yang ditambahkan.' : 'Guru Anda belum menambahkan game.'}
                        </p>
                    </div>
                )}
            </div>

            {userRole === 'teacher' && (
                 <AddGameModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    classId={classId}
                    onGamesAdded={fetchClassData}
                    existingGameIds={existingGameIds}
                />
            )}
        </div>
    );
};

export default ClassDetailPage;