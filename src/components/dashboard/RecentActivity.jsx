import React, { useState } from 'react';

// --- KOMPONEN RECENT ACTIVITY (DISEMPURNAKAN) ---
const RecentActivity = () => {
    const [activeTab, setActiveTab] = useState('Running');

    // Data yang lebih realistis untuk setiap tab
    const runningActivities = [
        { id: 1, name: 'Grammar Quiz', activity: 'Puzzle', startDate: '22/06/2025', status: 35 },
        { id: 2, name: 'Vocabulary Builder', activity: 'Flashcards', startDate: '21/06/2025', status: 60 },
        { id: 3, name: 'Listening Practice', activity: 'Audio Task', startDate: '20/06/2025', status: 85 },
    ];

    const completedActivities = [
        { id: 1, name: 'Past Tense Exercise', activity: 'Puzzle', startDate: '15/06/2025', endDate: '18/06/2025', status: 100 },
        { id: 2, name: 'Reading Comprehension', activity: 'Article', startDate: '12/06/2025', endDate: '14/06/2025', status: 100 },
    ];

    // Menentukan data mana yang akan ditampilkan berdasarkan tab yang aktif
    const activitiesToShow = activeTab === 'Running' ? runningActivities : completedActivities;

    return (
        <div className="mt-8 bg-white p-4 md:p-6 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Recent Activity</h3>
                <div className="flex items-center space-x-2 self-end">
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('Running')}
                            className={`px-4 py-1 text-sm font-semibold rounded-md transition-colors ${
                                activeTab === 'Running' ? 'bg-white shadow text-gray-800' : 'text-gray-500 hover:bg-gray-200'
                            }`}
                        >
                            Running
                        </button>
                        <button
                            onClick={() => setActiveTab('Completed')}
                            className={`px-4 py-1 text-sm font-semibold rounded-md transition-colors ${
                                activeTab === 'Completed' ? 'bg-white shadow text-gray-800' : 'text-gray-500 hover:bg-gray-200'
                            }`}
                        >
                            Completed
                        </button>
                    </div>
                    <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-800">All</a>
                </div>
            </div>

            {/* Menggunakan struktur tabel HTML yang benar untuk aksesibilitas dan styling yang lebih baik */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b-2 border-gray-100">
                        <tr>
                            <th className="p-3 text-sm font-bold text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="p-3 text-sm font-bold text-gray-500 uppercase tracking-wider">Activity</th>
                            <th className="p-3 text-sm font-bold text-gray-500 uppercase tracking-wider">Start Date</th>
                            <th className="p-3 text-sm font-bold text-gray-500 uppercase tracking-wider">End Date</th>
                            <th className="p-3 text-sm font-bold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="p-3 text-sm font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activitiesToShow.map((item) => (
                            <tr key={item.id} className="border-b border-gray-100">
                                <td className="p-3 whitespace-nowrap text-gray-700 font-semibold">{item.name}</td>
                                <td className="p-3 whitespace-nowrap text-gray-600">{item.activity}</td>
                                <td className="p-3 whitespace-nowrap text-gray-600">{item.startDate}</td>
                                <td className="p-3 whitespace-nowrap text-gray-600">{item.endDate || '-'}</td>
                                <td className="p-3 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                                            <div
                                                className="bg-green-500 h-2 rounded-full"
                                                style={{ width: `${item.status}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-600">{item.status}%</span>
                                    </div>
                                </td>
                                <td className="p-3 whitespace-nowrap text-right">
                                    {item.status < 100 && (
                                        <button className="font-bold text-green-600 hover:text-green-800 transition-colors">
                                            Continue
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentActivity;
