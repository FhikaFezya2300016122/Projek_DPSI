import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Pastikan path ini benar

// Impor gambar untuk ikon peran
import studentAvatar from '../Images/murid.png'; 
import teacherAvatar from '../Images/guru.png';
// PERBAIKAN: Impor logo Englify dari folder Images
import englifyLogo from '../Images/Icon.png';


const RoleSelectionPage = () => {
    const [selectedRole, setSelectedRole] = useState('student');
    const [actionLoading, setActionLoading] = useState(false);
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setPageLoading(false); 
        });

        return () => subscription?.unsubscribe();
    }, []);


    const handleContinue = async () => {
        setActionLoading(true);
        
        if (user) {
            const { error } = await supabase
                .from('profiles')
                .update({ role: selectedRole })
                .eq('id', user.id);

            if (error) {
                alert(error.message);
            } else {
                navigate('/success');
            }
        } else {
            alert("Sesi tidak ditemukan. Silakan login kembali.");
            navigate('/login');
        }
        setActionLoading(false);
    };

    const RoleCard = ({ role, title, description, icon }) => (
        <button
            onClick={() => setSelectedRole(role)}
            className={`p-6 border-2 rounded-2xl text-center w-full md:w-64 transition-all duration-200 ${selectedRole === role ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white hover:border-green-400'}`}
        >
            <div className="flex justify-end">
                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedRole === role ? 'border-green-500' : 'border-gray-400'}`}>
                    {selectedRole === role && <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>}
                </div>
            </div>
            <img src={icon} alt={title} className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" />
            <h3 className="font-bold text-lg mt-2">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
        </button>
    );
    
    if (pageLoading) {
        return <div className="flex items-center justify-center min-h-screen">Verifying session...</div>
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex items-center mb-8">
                {/* PERBAIKAN: Menggunakan logo yang sudah diimpor */}
                <img src={englifyLogo} alt="Englify Logo" className="w-10 h-10" />
                <span className="text-2xl font-bold ml-3 text-gray-800">Englify</span>
            </div>
            
            <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md text-center">
                <h2 className="text-2xl font-bold text-gray-800">Choose your role in Englify</h2>
                <p className="text-gray-500 mt-2">Are you joining as a student or a teacher?</p>

                <div className="flex flex-col md:flex-row gap-6 justify-center my-8">
                    <RoleCard role="student" title="Student" description="Student can join classes and play learning games" icon={studentAvatar} />
                    <RoleCard role="teacher" title="Teacher" description="Teacher can create and manage lessons" icon={teacherAvatar} />
                </div>
                
                <div className="flex justify-center items-center gap-2 mb-8">
                    <div className="w-6 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-6 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleContinue}
                        disabled={actionLoading || !user}
                        className="w-full md:w-auto px-24 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition"
                    >
                        {actionLoading ? 'Saving...' : 'Continue'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionPage;
