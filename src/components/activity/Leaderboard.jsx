import { useState } from 'react';
// Impor data langsung dari mockData
import { leaderboardData, myRankData } from '../../data/mockData';

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('All time');
  const tabs = ['Weekly', 'Monthly', 'All time'];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Gunakan data yang diimpor langsung
  const data = leaderboardData;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Leaderboard</h2>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-300 ${
                activeTab === tab ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4 flex-1">
        {data.map((user, index) => (
          <div key={index} className="flex items-center">
            <div className="text-gray-500 font-bold w-8">{user.rank}</div>
            <img className="w-10 h-10 rounded-full mr-4 object-cover" src={user.avatar} alt={user.name} />
            <div className="flex-1">
              <div className="font-semibold">{user.name}</div>
            </div>
            <div className="text-teal-500 font-bold">{user.score}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="font-bold mb-2">My Rank</h3>
        <div className="flex items-center bg-teal-50 p-3 rounded-lg">
          <div className="text-gray-700 font-bold w-8">{myRankData.rank}</div>
          <img className="w-10 h-10 rounded-full mr-4" src={myRankData.avatar_url} alt={myRankData.username}/>
          <div className="flex-1">
            <div className="font-semibold">{myRankData.username}</div>
          </div>
          <div className="text-teal-600 font-bold">{myRankData.score} PTS</div>
        </div>
      </div>
    </div>
  );
}