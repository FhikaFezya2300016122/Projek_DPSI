import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; // Pastikan path ini benar

// --- KOMPONEN RECENT ACTIVITY (TERHUBUNG SUPABASE) ---
const RecentActivity = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect untuk mengambil data aktivitas saat komponen dimuat
    useEffect(() => {
        const fetchActivities = async () => {
            setLoading(true);
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                // Mengambil data dari tabel user_activities, hanya untuk pengguna yang sedang login
                const { data, error } = await supabase
                    .from('user_activities')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('start_date', { ascending: false }); // Mengurutkan dari yang terbaru

                if (error) {
                    setError(error.message);
                } else {
                    setActivities(data);
                }
            }
            setLoading(false);
        };

        fetchActivities();
    }, []);

    // Tampilan saat data sedang dimuat
    if (loading) {
        return (
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm text-center">
                <p className="text-gray-500">Loading recent activity...</p>
            </div>
        );
    }
    
    // Tampilan jika terjadi error
    if (error) {
        return (
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm text-center">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="mt-8 bg-white p-4 md:p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
                <a href="#" className="text-sm font-semibold text-gray-500 hover:text-gray-800">All</a>
            </div>

            {/* Tampilan jika tidak ada aktivitas */}
            {activities.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500">No recent activity found.</p>
                    <p className="text-sm text-gray-400 mt-1">Start a new lesson to see your progress here!</p>
                </div>
            ) : (
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
                                    <td className="p-3 text-gray-600">{item.activity_type}</td>
                                    <td className="p-3 text-gray-600">{new Date(item.start_date).toLocaleDateString()}</td>
                                    <td className="p-3">
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${item.status}%` }}></div>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-600">{item.status}%</span>
                                        </div>
                                    </td>
                                    <td className="p-3 text-right">
                                        <button className="font-bold text-green-600 hover:text-green-800 transition-colors">
                                            Continue
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecentActivity;
