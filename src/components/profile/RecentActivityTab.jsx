import React from 'react';

// Komponen ini menampilkan tabel aktivitas terbaru pengguna.
const RecentActivityTab = () => {
     const activities = [
        { id: 1, name: 'Grammar Quiz', activity: 'Puzzle', startDate: '22/06/2025', status: 35 },
        { id: 2, name: 'Vocabulary Builder', activity: 'Flashcards', startDate: '21/06/2025', status: 60 },
        { id: 3, name: 'Listening Practice', activity: 'Audio Task', startDate: '20/06/2025', status: 85 },
    ];
    return (
    <div className="mt-6 bg-white p-4 md:p-6 rounded-2xl shadow-sm">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="border-b-2 border-gray-100">
                    <tr>
                        <th className="p-3 text-sm font-bold text-gray-500 uppercase">Name</th>
                        <th className="p-3 text-sm font-bold text-gray-500 uppercase">Activity</th>
                        <th className="p-3 text-sm font-bold text-gray-500 uppercase">Start Date</th>
                        <th className="p-3 text-sm font-bold text-gray-500 uppercase">Status</th>
                        <th className="p-3 text-sm font-bold text-gray-500 uppercase text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100">
                            <td className="p-3 text-gray-700 font-semibold">{item.name}</td>
                            <td className="p-3 text-gray-600">{item.activity}</td>
                            <td className="p-3 text-gray-600">{item.startDate}</td>
                            <td className="p-3">
                                <div className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2 mr-3"><div className="bg-green-500 h-2 rounded-full" style={{ width: `${item.status}%` }}></div></div>
                                    <span className="text-sm font-semibold text-gray-600">{item.status}%</span>
                                </div>
                            </td>
                            <td className="p-3 text-right"><button className="font-bold text-green-600 hover:text-green-800">Continue</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)};

// PASTIKAN BARIS INI ADA DI AKHIR FILE ANDA
export default RecentActivityTab;
