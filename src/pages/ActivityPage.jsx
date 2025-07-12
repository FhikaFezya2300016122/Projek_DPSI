// src/pages/ActivityPage.jsx

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import { games } from '../data/mockData';
import GameCard from '../components/activity/GameCard';
import Leaderboard from '../components/activity/Leaderboard';
import { LayoutGrid, Puzzle, Grid3X3, Plus } from 'lucide-react';

export default function ActivityPage() {
  const [category, setCategory] = useState('All');
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  // Efek untuk mengambil profil pengguna dan menentukan perannya
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        
        if (!error && data) {
          setProfile(data);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const categories = [
    { label: 'All Games', icon: <LayoutGrid size={18} />, value: 'All' },
    { label: 'Crossword', icon: <Grid3X3 size={18} />, value: 'Crossword' },
    { label: 'Puzzle', icon: <Puzzle size={18} />, value: 'Puzzle' },
  ];

  const filteredGames = category === 'All'
    ? games
    : games.filter((game) => game.category === category);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Activity</h1>
            <p className="text-sm text-gray-500">Pilih game yang ingin kamu mainkan!</p>
        </div>
        {/* Tombol "Buat Game Custom" hanya akan muncul jika peran pengguna adalah 'teacher' */}
        {profile?.role === 'teacher' && (
            <button
                onClick={() => navigate('/create-custom-game')}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all"
            >
                <Plus size={18} />
                Buat Game Custom
            </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex gap-3 mb-6">
            {categories.map((cat) => (
              <button key={cat.value} onClick={() => setCategory(cat.value)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition ${ category === cat.value ? 'bg-teal-500 text-white shadow-md' : 'bg-white text-gray-800 border' }`}>
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Link to={`/puzzle-lobby/${game.id}`} key={game.id}>
                <GameCard game={game} />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <Leaderboard />
        </div>
      </div>
    </>
  );
}