import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-md">
      {/* Gambar game */}
      <div className="relative">
        <img className="w-full h-36 object-cover" src={game.image} alt={game.title} />

        {/* Badge di atas gambar */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
            {game.category}
          </span>
          <span className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
            {game.difficulty}, {game.questions} Questions
          </span>
          <span className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
            {game.plays}
          </span>
        </div>
      </div>

      {/* Konten bawah */}
      <div className="p-4">
        <div className="text-white font-bold text-lg mb-2">{game.title}</div>
        <Link to={`/puzzle-lobby/${game.id}`}>
          <button className="mt-2 w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
}