import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useAuth } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const generateClassCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};

const CreateClassModal = ({ isOpen, onClose, onClassCreated }) => {
    const { user } = useAuth();
    const [className, setClassName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!className.trim() || !user) return;

        setLoading(true);
        const toastId = toast.loading('Membuat kelas...');
        const classCode = generateClassCode();

        const { data: newClass, error: classError } = await supabase
            .from('classes')
            .insert({ class_name: className, description, class_code: classCode, teacher_id: user.id })
            .select().single();

        if (classError) {
            toast.error(`Gagal membuat kelas: ${classError.message}`, { id: toastId });
            setLoading(false);
            return;
        }

        const { error: memberError } = await supabase
            .from('class_members')
            .insert({ class_id: newClass.id, user_id: user.id, role: 'teacher' });

        if (memberError) {
            toast.error(`Gagal menambahkan anggota: ${memberError.message}`, { id: toastId });
            setLoading(false);
            return;
        }

        toast.success('Kelas berhasil dibuat!', { id: toastId });
        setLoading(false);
        onClassCreated();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Buat Kelas Baru</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="className" className="block text-sm font-medium text-gray-700 mb-1">Nama Kelas</label>
                        <input type="text" id="className" value={className} onChange={(e) => setClassName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Contoh: Bahasa Inggris Kelas 10A" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Deskripsi (Opsional)</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Deskripsi singkat tentang kelas ini" />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} disabled={loading} className="px-4 py-2 bg-gray-200 rounded-md">Batal</button>
                        <button type="submit" disabled={loading} className="px-4 py-2 bg-teal-600 text-white rounded-md"> {loading ? 'Menyimpan...' : 'Buat Kelas'} </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateClassModal;