// src/pages/classroom/ClassroomListPage.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
    HiX, 
    HiDotsVertical, 
    HiArrowRight  
} from "react-icons/hi";

// ===================================================================
// Komponen Modal Konfirmasi Join
// ===================================================================
const ConfirmationModal = ({ classData, onConfirm, onCancel }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onCancel}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-md text-center" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-gray-800">You are about to join “{classData.name}”</h2>
                <p className="text-gray-500 mt-2 mb-6">Is this the correct class?</p>
                <div className="bg-gray-100 rounded-xl overflow-hidden text-left shadow-inner">
                    <img src={classData.imageUrl} alt={classData.title} className="h-40 w-full object-cover"/>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">{classData.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{classData.name}</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Teacher {classData.teacher}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <button onClick={onCancel} className="flex-1 justify-center items-center gap-2 bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition flex"><HiX /> Cancel</button>
                    <button onClick={onConfirm} className="flex-1 justify-center items-center gap-2 bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition flex">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> Confirm
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ===================================================================
// Komponen Modal Konfirmasi Keluar Kelas
// ===================================================================
const LeaveClassModal = ({ classData, onConfirm, onCancel }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onCancel}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="bg-white rounded-2xl p-8 w-full max-w-sm text-center" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-gray-800">Leave Class?</h2>
                <p className="text-gray-500 mt-2">Are you sure you want to leave <span className="font-semibold text-gray-700">"{classData.title}"</span>?</p>
                <div className="flex gap-4 mt-8">
                    <button onClick={onCancel} className="flex-1 bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-200 transition">Cancel</button>
                    <button onClick={onConfirm} className="flex-1 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition">Leave</button>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ===================================================================
// Komponen Kartu Kelas
// ===================================================================
const ClassCard = ({ classInfo, onLeaveClick }) => {
    return (
        <div className="relative h-56 rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
            <img src={classInfo.imageUrl} alt={classInfo.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-5 flex flex-col text-white">
                <div className="flex justify-end">
                    <button onClick={(e) => { e.preventDefault(); onLeaveClick(); }} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                        <HiDotsVertical className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex-grow flex flex-col justify-end">
                    <h3 className="text-2xl font-bold drop-shadow-md">{classInfo.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">{classInfo.name}</span>
                        <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">Teacher {classInfo.teacher}</span>
                    </div>
                </div>
                 <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white text-teal-600 rounded-full p-3 shadow-lg">
                        <HiArrowRight className="w-6 h-6"/>
                     </div>
                 </div>
            </div>
        </div>
    );
};

// ===================================================================
// Komponen Join Banner
// ===================================================================
const JoinBanner = ({ code, setCode, onJoin, error, setError }) => {
    return (
        <div className="p-6 bg-teal-50/70 rounded-2xl flex items-center justify-between flex-wrap gap-4">
            <div className="flex-grow">
                <p className="font-semibold text-gray-700">Have a new class code?</p>
                <p className="text-sm text-gray-500">Enter the code to join another class.</p>
            </div>
            <div className="flex items-start gap-2">
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter code" 
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                            if(error) setError('');
                        }}
                        className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 w-40"
                    />
                     {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
                </div>
                <button onClick={() => onJoin(code)} className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-600">
                    Join
                </button>
            </div>
        </div>
    );
};

// ===================================================================
// Komponen Utama Halaman Daftar Kelas
// ===================================================================
const ClassroomListPage = () => {
    const FAKE_CLASS_DATABASE = {
        'CODE7C': { id: 'C7', name: 'Class 7C', title: 'English Learning', teacher: 'Salsabila', imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop'},
        'CODE8B': { id: 'B8', name: 'Class 8B', title: 'Creative Writing', teacher: 'Khomarudin', imageUrl: 'https://images.unsplash.com/photo-1491841550275-5b462bf48569?q=80&w=2070&auto=format&fit=crop'},
        'CODE9A': { id: 'A9', name: 'Class 9A', title: 'Public Speaking', teacher: 'Elizabeth', imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop'},
    };

    const [classCode, setClassCode] = useState('');
    const [foundClass, setFoundClass] = useState(null);
    const [error, setError] = useState('');
    const [classToLeave, setClassToLeave] = useState(null);
    const [joinedClasses, setJoinedClasses] = useState(() => {
        try {
            const savedClasses = localStorage.getItem('myJoinedClasses');
            return savedClasses ? JSON.parse(savedClasses) : [];
        } catch (error) {
            console.error("Failed to parse classes from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('myJoinedClasses', JSON.stringify(joinedClasses));
    }, [joinedClasses]);

    const handleJoinClass = (codeToJoin) => {
        const code = codeToJoin.trim().toUpperCase();
        if (code.length < 5) {
            setError('Kode tidak valid (minimal 5 karakter)');
            return;
        }
        const classData = FAKE_CLASS_DATABASE[code];
        if (classData) {
            if(joinedClasses.find(c => c.id === classData.id)) {
                setError('Anda sudah bergabung dengan kelas ini.');
                return;
            }
            setError('');
            setFoundClass(classData);
        } else {
            setError('Kode kelas tidak ditemukan.');
        }
    };
    
    const handleConfirmJoin = () => {
        setJoinedClasses(prevClasses => {
            if (prevClasses.find(c => c.id === foundClass.id)) { return prevClasses; }
            return [...prevClasses, foundClass];
        });
        setFoundClass(null);
        setClassCode('');
    };

    const handleConfirmLeave = () => {
        if (!classToLeave) return;
        setJoinedClasses(prevClasses => prevClasses.filter(c => c.id !== classToLeave.id));
        setClassToLeave(null);
    };

    const handleCancelJoin = () => setFoundClass(null);

    return (
        <div className="p-8">
            {joinedClasses.length === 0 ? (
                <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Enter the connect code your teacher shared with you below</h3>
                        <div className="w-full">
                            <input type="text" placeholder="Type connect code" value={classCode} onChange={(e) => { setClassCode(e.target.value); if (error) setError(''); }} className="w-full max-w-sm bg-white px-5 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-center" />
                            {error && (<p className="text-red-500 text-sm mt-2">{error}</p>)}
                            <button onClick={() => handleJoinClass(classCode)} className={`w-full max-w-sm bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition font-semibold ${error ? 'mt-2' : 'mt-4'}`}>Join Class</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    <JoinBanner code={classCode} setCode={setClassCode} onJoin={() => handleJoinClass(classCode)} error={error} setError={setError} />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Class</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {joinedClasses.map((classInfo) => (
                                <Link to={`/classroom/detail/${classInfo.id}`} key={classInfo.id}>
                                    <ClassCard classInfo={classInfo} onLeaveClick={(e) => { e.preventDefault(); setClassToLeave(classInfo); }} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <AnimatePresence>
                {foundClass && <ConfirmationModal classData={foundClass} onConfirm={handleConfirmJoin} onCancel={handleCancelJoin} />}
                {classToLeave && <LeaveClassModal classData={classToLeave} onConfirm={handleConfirmLeave} onCancel={() => setClassToLeave(null)} />}
            </AnimatePresence>
        </div>
    );
};

export default ClassroomListPage;