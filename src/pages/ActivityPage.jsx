import { useState } from 'react';
import { games } from '../data/mockData';

import Sidebar from '../components/layout/Sidebar/sidebar';
import Header from '../components/layout/Header/Header';
import GameCard from '../components/activity/GameCard';
import Leaderboard from '../components/activity/Leaderboard';

import { LayoutGrid, Puzzle, Grid3X3 } from 'lucide-react'; // Untuk ikon

export default function ActivityPage() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Most Popular');

  const categories = [
    { label: 'All Games', icon: <LayoutGrid size={18} />, value: 'All' },
    { label: 'Crossword', icon: <Grid3X3 size={18} />, value: 'Crossword' },
    { label: 'Puzzle', icon: <Puzzle size={18} />, value: 'Puzzle' },
  ];

  const filteredGames = category === 'All'
    ? games
    : games.filter((game) => game.category === category);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Header Text */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Activity</h1>
              <p className="text-sm text-gray-500">Pilih game yang ingin kamu mainkan!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Filter Bar */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setCategory(cat.value)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition ${
                          category === cat.value
                            ? 'bg-teal-500 text-white'
                            : 'bg-white text-gray-800 border border-gray-200'
                        }`}
                      >
                        {cat.icon}
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  <select
                    className="px-3 py-2 rounded-md bg-white border text-sm text-gray-700"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="Most Popular">Most Popular</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>

                {/* Game Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="lg:col-span-1">
                <Leaderboard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}