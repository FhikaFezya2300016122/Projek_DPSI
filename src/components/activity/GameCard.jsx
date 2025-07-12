import React from 'react';

const GameCard = ({ game }) => {
  if (!game) {
    return <div className="bg-gray-200 rounded-xl p-4">Data game tidak ada.</div>;
  }
  
  // Ambil data gradien, jika tidak ada gunakan warna abu-abu
  const gradient = game.gradient || 'from-gray-700 to-gray-800';

  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-transform duration-300 hover:scale-105`}>
      <div className="relative">
        <img className="w-full h-36 object-cover" src={game.image} alt={game.title} />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
            {game.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="text-white font-bold text-lg mb-2 flex-grow">{game.title}</div>
        <button className="mt-auto w-full bg-white/30 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-lg hover:bg-white/40">
          Enter
        </button>
      </div>
    </div>
  );
};

export default GameCard;