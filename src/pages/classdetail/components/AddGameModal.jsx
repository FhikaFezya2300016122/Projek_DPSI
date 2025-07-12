// src/pages/classroom/components/AddGameModal.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../../../supabaseClient';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';

const AddGameModal = ({ isOpen, onClose, classId, onGamesAdded, existingGameIds }) => {
    const { user } = useAuth();
    const [availableGames, setAvailableGames] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchGames = async () => {
            if (!user || !isOpen) return;
            setLoading(true);

            // 1. Ambil game bawaan dari tabel 'games'
            const { data: preMadeGames, error: preMadeError } = await supabase
                .from('games')
                .select('*')
                .is('teacher_id', null); // Hanya ambil game bawaan (tanpa teacher_id)
            
            // 2. Ambil game custom yang dibuat oleh guru ini
            const { data: customGamesData, error: customError } = await supabase
                .from('games') // Sekarang ambil juga dari tabel 'games'
                .select('*')
                .eq('teacher_id', user.id); // yang dibuat oleh guru ini

            if (preMadeError || customError) {
                console.error("Error fetching games:", preMadeError || customError);
                setLoading(false);
                return;
            }

            // Gabungkan kedua jenis game
            const allGames = [...(preMadeGames || []), ...(customGamesData || [])];

            // Filter game yang belum ada di kelas ini
            const gamesToShow = allGames.filter(game => !existingGameIds.includes(game.id));
            setAvailableGames(gamesToShow);
            setLoading(false);
        };

        fetchGames();
        setSelectedGames([]);
    }, [isOpen, existingGameIds, user]);

    const handleSelectGame = (gameId) => {
        setSelectedGames(prev =>
            prev.includes(gameId) ? prev.filter(id => id !== gameId) : [...prev, gameId]
        );
    };

    const handleSubmit = async () => {
        if (selectedGames.length === 0) {
            return toast.error("Pilih setidaknya satu game.");
        }
        setLoading(true);
        const toastId = toast.loading('Menambahkan game...');
        
        // **PERBAIKAN KUNCI DI SINI**
        // Kita sekarang bisa langsung menggunakan ID yang dipilih karena semua game ada di satu tabel
        const assignments = selectedGames.map(gameId => ({
            class_id: classId,
            game_id: gameId 
        }));

        const { error } = await supabase.from('class_assignments').insert(assignments);

        if (error) {
            toast.error(`Gagal menambahkan: ${error.message}`, { id: toastId });
        } else {
            toast.success('Game berhasil ditambahkan!', { id: toastId });
            onGamesAdded();
            onClose();
        }
        setLoading(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Tambahkan Game ke Kelas</h2>
                <div className="max-h-96 overflow-y-auto space-y-2 pr-2 border-t border-b py-4">
                    {loading ? (
                        <p className="text-center text-gray-500">Memuat daftar game...</p>
                    ) : availableGames.length > 0 ? (
                        availableGames.map(game => (
                            <div
                                key={game.id}
                                onClick={() => handleSelectGame(game.id)}
                                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer border-2 transition-all ${
                                    selectedGames.includes(game.id) ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:bg-gray-100'
                                }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedGames.includes(game.id)}
                                    readOnly
                                    className="h-5 w-5 rounded text-teal-600 focus:ring-teal-500 pointer-events-none"
                                />
                                <img src={game.image || 'https://i.imgur.com/3Z3eY5z.png'} alt={game.title} className="w-20 h-12 rounded object-cover"/>
                                <div>
                                    <p className="font-semibold">{game.title}</p>
                                    <p className="text-sm text-gray-500">{game.category} {game.teacher_id && <span className="text-blue-500 font-semibold">(Custom)</span>}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-4">Semua game sudah ditambahkan.</p>
                    )}
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button onClick={onClose} disabled={loading} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Batal</button>
                    <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">{loading ? 'Menyimpan...' : 'Tambahkan Game'}</button>
                </div>
            </div>
        </div>
    );
};

export default AddGameModal;