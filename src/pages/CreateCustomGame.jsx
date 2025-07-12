// src/pages/CreateCustomGame.jsx

import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CreateCustomGame = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([{ question_text: '', image: null, wordBank: '', answer: '' }]);
    const [loading, setLoading] = useState(false);

    const addQuestion = () => {
        setQuestions([...questions, { question_text: '', image: null, wordBank: '', answer: '' }]);
    };

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = value;
        setQuestions(newQuestions);
    };
    
    const handleImageUpload = (index, file) => {
        if (file && file.type.startsWith('image/')) {
            handleQuestionChange(index, 'image', file);
        } else {
            toast.error("Hanya file gambar yang diizinkan.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || questions.some(q => !q.wordBank.trim() || !q.answer.trim())) {
            return toast.error("Judul, bank kata, dan jawaban tidak boleh kosong.");
        }
        setLoading(true);
        const toastId = toast.loading('Menyimpan game...');

        try {
            // 1. Masukkan info game baru ke tabel 'games'
            const gameId = uuidv4();
            const { error: gameError } = await supabase.from('games').insert({
                id: gameId,
                teacher_id: user.id,
                title,
                description,
                category: 'Custom',
                level: `${questions.length} Questions`,
                gradient: 'from-gray-700 to-gray-800',
                path: `/play-custom-game/${gameId}`
            });
            if (gameError) throw gameError;

            // 2. Proses setiap pertanyaan
            for (const q of questions) {
                let imageUrl = null;
                if (q.image) {
                    const filePath = `${user.id}/${uuidv4()}`;
                    
                    // --- PASTIKAN NAMA BUCKET INI BENAR ---
                    const { data: uploadData, error: uploadError } = await supabase.storage
                        .from('costumeimage') // Menggunakan nama bucket Anda
                        .upload(filePath, q.image);

                    if (uploadError) throw uploadError;
                    
                    const { data: urlData } = supabase.storage
                        .from('costumeimage') // Menggunakan nama bucket Anda
                        .getPublicUrl(uploadData.path);
                    imageUrl = urlData.publicUrl;
                }

                const answerArray = q.answer.split(',').map(word => word.trim());
                const { data: qData, error: qError } = await supabase.from('custom_game_questions').insert({ game_id: gameId, question_text: q.question_text, image_url: imageUrl, correct_answer: answerArray }).select().single();
                if (qError) throw qError;

                const wordBankArray = q.wordBank.split(',').map(word => ({ question_id: qData.id, word: word.trim() }));
                const { error: wbError } = await supabase.from('custom_game_word_bank').insert(wordBankArray);
                if (wbError) throw wbError;
            }
            toast.success('Game custom berhasil dibuat!', { id: toastId });
            navigate(-1); // Kembali ke halaman sebelumnya
        } catch (error) {
            toast.error(`Error: ${error.message}`, { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <Toaster />
            <h1 className="text-3xl font-bold mb-6">Buat Game Custom</h1>
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-4">
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Judul Game" className="w-full p-2 border rounded" required />
                    <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Deskripsi Game" className="w-full p-2 border rounded" />
                </div>
                {questions.map((q, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-3">
                        <h3 className="font-bold">Pertanyaan {index + 1}</h3>
                        <input type="text" value={q.question_text} onChange={e => handleQuestionChange(index, 'question_text', e.target.value)} placeholder="Teks Pertanyaan (opsional)" className="w-full p-2 border rounded" />
                        <input type="file" onChange={e => handleImageUpload(index, e.target.files[0])} accept="image/*" className="w-full text-sm" />
                        <input type="text" value={q.wordBank} onChange={e => handleQuestionChange(index, 'wordBank', e.target.value)} placeholder="Bank Kata (pisahkan dengan koma)" className="w-full p-2 border rounded" required />
                        <input type="text" value={q.answer} onChange={e => handleQuestionChange(index, 'answer', e.target.value)} placeholder="Jawaban Benar (urutkan, pisahkan koma)" className="w-full p-2 border rounded" required />
                    </div>
                ))}
                <button type="button" onClick={addQuestion} className="px-4 py-2 border rounded-lg">+ Tambah Pertanyaan</button>
                <button type="submit" disabled={loading} className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg">{loading ? 'Menyimpan...' : 'Simpan Game'}</button>
            </form>
        </div>
    );
};
export default CreateCustomGame;