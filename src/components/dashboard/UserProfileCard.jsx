import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; // Sesuaikan path ini jika perlu

// --- DEFINISI IKON ---
const EditIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
);

// --- KOMPONEN USER PROFILE CARD (DENGAN FUNGSI EDIT) ---
const UserProfileCard = ({ profile }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // PERBAIKAN: Gunakan optional chaining untuk keamanan
        setFullName(profile?.full_name || '');
    }, [profile]);

    const handleUpdateName = async () => {
        if (!profile) return;

        setLoading(true);
        const { error } = await supabase
            .from('profiles')
            .update({ full_name: fullName })
            .eq('id', profile.id);

        if (error) {
            alert('Error updating name: ' + error.message);
        } else {
            alert('Name updated successfully!');
            setIsEditing(false);
        }
        setLoading(false);
    };

    const handleCancelEdit = () => {
        // PERBAIKAN: Gunakan optional chaining untuk keamanan
        setFullName(profile?.full_name || '');
        setIsEditing(false);
    };
    
    // Pengecekan awal jika prop profile belum siap
    if (!profile) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-center h-full">
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center h-full justify-center">
            <img
                src={`https://ui-avatars.com/api/?name=${fullName || 'U'}&background=EBF4FF&color=4299E1&size=112`}
                alt="User Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="my-4" style={{ minHeight: '56px' }}>
                {isEditing ? (
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="text-xl font-bold text-center border-b-2 border-green-500 focus:outline-none"
                    />
                ) : (
                    <h3 className="text-xl font-bold text-gray-800">{fullName || 'Guest User'}</h3>
                )}
                {/* PERBAIKAN: Gunakan optional chaining di sini juga */}
                <p className="text-gray-500 text-sm">{profile?.email || 'user@example.com'}</p>
            </div>

            {isEditing ? (
                <div className="flex gap-2">
                    <button
                        onClick={handleUpdateName}
                        disabled={loading}
                        className="px-4 py-1 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 disabled:bg-gray-400"
                    >
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button onClick={handleCancelEdit} className="px-4 py-1 bg-gray-200 text-sm font-semibold rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                </div>
            ) : (
                <button onClick={() => setIsEditing(true)} className="mt-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                    <EditIcon className="text-gray-600" />
                </button>
            )}
        </div>
    );
};

export default UserProfileCard;
