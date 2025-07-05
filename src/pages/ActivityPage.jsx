// Hapus impor useState, useEffect, dan supabaseClient
// import { useState, useEffect } from 'react';
// import { supabase } from '../supabaseClient';

// GANTIKAN DENGAN impor data dari mockData
import { games } from '../data/mockData';

// Import komponen layout dan UI seperti biasa
import Sidebar from '../components/layout/Sidebar/sidebar';
import Header from '../components/layout/Header/Header';
import GameCard from '../components/activity/GameCard';
import Leaderboard from '../components/activity/Leaderboard';

export default function ActivityPage() {
  // HAPUS SEMUA useState dan useEffect untuk Supabase

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Activity</h1>
              <p className="text-sm text-gray-500">Pilih game yang ingin kamu mainkan!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex space-x-4 mb-6">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold">All Games</button>
                  <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold border">Crossword</button>
                  <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold border">Puzzle</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* Gunakan variabel 'games' yang diimpor langsung */}
                  {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                {/* Untuk sementara, Leaderboard akan mengambil datanya sendiri */}
                <Leaderboard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}