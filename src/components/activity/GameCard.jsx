// src/components/activity/GameCard.jsx
import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img className="h-40 w-full object-cover" src={game.image} alt={game.title} />
      <div className="p-4">
        <div className="text-lg font-bold">{game.title}</div>
        <div className="text-sm text-gray-500 mt-1">{game.category}</div>
        <div className="text-xs text-gray-600 mt-2">{game.difficulty}, {game.questions} Questions</div>
        <div className="text-xs text-gray-400 mt-1">{game.plays}</div>
        <Link to={`/puzzle-lobby/${game.id}`}>
          <button className="mt-4 w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
}