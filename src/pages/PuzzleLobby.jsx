// src/pages/PuzzleLobby.jsx
import { useParams, Link } from 'react-router-dom';
import { puzzleDetail } from '../data/mockData';
import { XMarkIcon,ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

export default function PuzzleLobby() {
  const { gameId } = useParams();
  const details = puzzleDetail[gameId];

  if (!details) {
    return <div>Game not found!</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
       <div className="flex justify-between items-center mb-6">
          <Link to="/activity" className="flex items-center text-gray-600 hover:text-gray-900">
             <XMarkIcon className="h-6 w-6 mr-2"/> Exit
          </Link>
          <div className="text-lg font-semibold">Puzzle : {details.title}</div>
           <button className="flex items-center text-gray-600 hover:text-gray-900">
             <ArrowsPointingOutIcon className="h-6 w-6 mr-2"/> Maximize
          </button>
       </div>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="text-center">
            <img src="https://i.pravatar.cc/150?u=morgan" alt="Author" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <p>By</p>
            <p className="font-bold">{details.author}</p>
          </div>
          <div className="flex-1">
             <h1 className="text-3xl font-bold">{details.title}</h1>
             <p className="text-gray-500 mt-2">Difficulty level : {details.difficulty}</p>
             <p className="text-gray-500">Category : {details.category}</p>
             <p className="text-gray-500">Total questions : {details.totalQuestions}</p>
             <div className="mt-6 flex flex-col space-y-3">
                <Link to={`/puzzle/${gameId}`}>
                    <button className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600">Start</button>
                </Link>
                <button className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300">Share</button>
                <button className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300">Random Theme</button>
             </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t">
            <h2 className="text-2xl font-bold text-center mb-6">Guide Puzzle</h2>
            <div>
                <h3 className="font-bold text-lg mb-2">Deskripsi Umum</h3>
                <p className="text-gray-600 mb-4">{details.description}</p>
                <h3 className="font-bold text-lg mb-2">Cara Bermain</h3>
                <ul className="list-decimal list-inside text-gray-600 space-y-1 mb-4">
                    {details.howToPlay.map((step, index) => <li key={index}>{step}</li>)}
                </ul>
                <h3 className="font-bold text-lg mb-2">Sistem Poin</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Easy: {details.pointSystem.easy}</li>
                     {/* Tambahkan sisanya */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}