// src/pages/classroom/Classroom.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import JoinClassBanner from './components/JoinClassBanner';
import CreateClassModal from './components/CreateClassModal';
import { HiPlus } from "react-icons/hi";
import toast, { Toaster } from 'react-hot-toast';

// Komponen untuk satu kartu kelas
const ClassroomCard = ({ classroom }) => {
    const navigate = useNavigate();
    return (
        <div 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/classroom/detail/${classroom.id}`)}
        >
            <h3 className="text-xl font-bold text-gray-800">{classroom.class_name}</h3>
            <p className="text-gray-500 mt-2 truncate">{classroom.description || 'Tidak ada deskripsi'}</p>
        </div>
    );
};

const Classroom = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);
    const [classrooms, setClassrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchClasses = useCallback(async () => {
        if (!user) return;
        setLoading(true);

        // 1. Dapatkan daftar kelas yang diikuti pengguna
        const { data: memberData, error: memberError } = await supabase
            .from('class_members')
            .select('class_id')
            .eq('user_id', user.id);

        if (memberError) {
            toast.error("Gagal mengambil daftar kelas.");
            setLoading(false);
            return;
        }

        const classIds = memberData.map(member => member.class_id);

        // 2. Jika pengguna bergabung di kelas, ambil detail kelas-kelas tersebut
        if (classIds.length > 0) {
            const { data: classData, error: classError } = await supabase
                .from('classes')
                .select('*') // Mengambil semua detail termasuk class_name dan description
                .in('id', classIds);
            
            if (classError) {
                toast.error("Gagal memuat detail kelas.");
            } else {
                setClassrooms(classData);
            }
        } else {
            setClassrooms([]);
        }

        setLoading(false);
    }, [user]);
    
    // Ambil data profil pengguna untuk mengecek peran (role)
    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                const { data } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', user.id)
                    .single();
                setProfile(data);
            }
        };
        fetchProfile();
        fetchClasses();
    }, [user, fetchClasses]);

    if (loading) return <div className="p-8 text-center">Memuat kelas...</div>;

    return (
        <div className="p-4 md:p-8">
            <Toaster position="top-center" />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Ruang Kelas</h1>
                {profile?.role === 'teacher' && (
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700"
                    >
                        <HiPlus />
                        Buat Kelas
                    </button>
                )}
            </div>
            
            {classrooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classrooms.map(classroom => (
                        <ClassroomCard key={classroom.id} classroom={classroom} />
                    ))}
                </div>
            ) : (
                <JoinClassBanner onClassJoined={fetchClasses} />
            )}

            <CreateClassModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onClassCreated={fetchClasses}
            />
        </div>
    );
};

export default Classroom;