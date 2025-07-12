import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useAuth } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const JoinClassBanner = ({ onClassJoined }) => {
    const { user } = useAuth();
    const [classCode, setClassCode] = useState('');
    const [loading, setLoading] = useState(false);

    const handleJoinClass = async (e) => {
        e.preventDefault();
        if (!classCode.trim() || !user) {
            toast.error("Kode kelas tidak boleh kosong.");
            return;
        }

        setLoading(true);
        const toastId = toast.loading('Mencari kelas...');
        
        const { data: classData, error: findError } = await supabase
            .from('classes')
            .select('id')
            .eq('class_code', classCode.trim().toUpperCase())
            .single();

        if (findError || !classData) {
            toast.error('Kelas tidak ditemukan.', { id: toastId });
            setLoading(false);
            return;
        }

        const { error: joinError } = await supabase
            .from('class_members')
            .insert({ class_id: classData.id, user_id: user.id, role: 'student' });

        if (joinError) {
            if (joinError.code === '23505') toast.error('Anda sudah bergabung di kelas ini.', { id: toastId });
            else toast.error(`Gagal bergabung: ${joinError.message}`, { id: toastId });
            setLoading(false);
            return;
        }

        toast.success('Berhasil bergabung dengan kelas!', { id: toastId });
        setLoading(false);
        onClassJoined();
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Anda belum bergabung dengan kelas</h2>
            <p className="mt-2 text-gray-600">Masukkan kode kelas untuk bergabung.</p>
            <form onSubmit={handleJoinClass} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input type="text" value={classCode} onChange={(e) => setClassCode(e.target.value)} placeholder="Masukkan Kode Kelas" className="w-full sm:w-auto flex-grow px-4 py-3 border rounded-md" maxLength="6" />
                <button type="submit" disabled={loading} className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white font-semibold rounded-md"> {loading ? 'Memproses...' : 'Gabung Kelas'} </button>
            </form>
        </div>
    );
};

export default JoinClassBanner;