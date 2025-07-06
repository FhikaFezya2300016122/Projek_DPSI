import { useState } from 'react';
import { leaderboardData, myRankData } from '../../data/mockData';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'; // pastikan kamu install lucide-react

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('All time');
  const tabs = ['Weekly', 'Monthly', 'All time'];

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-auto p-4">
      {/* Title & Tabs */}
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
        <div className="flex bg-gray-100 rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeTab === tab ? 'bg-white text-black shadow' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="grid grid-cols-3 text-xs text-gray-400 font-semibold px-2 pb-2 border-b border-gray-200">
        <div>Rank</div>
        <div className="text-center">Player</div>
        <div className="text-right">Points</div>
      </div>

      {/* Leaderboard Entries */}
      <div className="divide-y divide-gray-100">
        {leaderboardData.map((user, index) => (
          <div key={index} className="flex items-center py-3 px-2">
            {/* Rank + Icon */}
            <div className="flex items-center gap-1 w-12 text-sm font-medium text-gray-500">
              {user.movement === 'up' && <ArrowUpRight className="text-green-500 w-4 h-4" />}
              {user.movement === 'down' && <ArrowDownRight className="text-red-500 w-4 h-4" />}
              {user.movement === 'same' && <Minus className="text-gray-400 w-4 h-4" />}
              {user.rank}
            </div>

            {/* Avatar + Name */}
            <div className="flex-1 flex items-center gap-3">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-yellow-400" />
              <div>
                <div className="font-semibold text-gray-800">{user.name}</div>
                <div className="text-xs text-gray-400">Diamond</div>
              </div>
            </div>

            {/* Score */}
            <div className="text-sm font-bold text-gray-700 text-right w-20">{user.score}</div>
          </div>
        ))}
      </div>

      {/* My Rank */}
      <div className="mt-4 border-t pt-4">
        <div className="text-sm font-semibold text-gray-600 mb-2">My Rank</div>
        <div className="flex items-center p-3 rounded-lg bg-gray-100">
          <div className="w-12 font-medium text-gray-700">{myRankData.rank}</div>
          <img src={myRankData.avatar_url} className="w-10 h-10 rounded-full border-2 border-yellow-400 mr-3" />
          <div className="flex-1">
            <div className="font-semibold text-gray-800">{myRankData.username}</div>
            <div className="text-xs text-gray-400">Diamond</div>
          </div>
          <div className="text-sm font-bold text-gray-800">{myRankData.score} PTS</div>
        </div>
      </div>
    </div>
  );
}