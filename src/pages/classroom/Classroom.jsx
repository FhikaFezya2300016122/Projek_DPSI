// src/pages/classroom/ClassroomListPage.jsx

import React, { useState, useEffect } from "react";
import myIllustration from "../../Images/joinclass.png";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
    HiX, 
    HiDotsHorizontal, // <-- PERUBAHAN 1: Ikon diubah
    HiArrowRight 
} from "react-icons/hi";

// ===================================================================
// KITA AKAN DEFINISIKAN SEMUA SUB-KOMPONEN DI ATAS KOMPONEN UTAMA
// ===================================================================

const ConfirmationModal = ({ classData, onConfirm, onCancel }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" 
            onClick={onCancel}
        >
            <motion.div 
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: 30, opacity: 0 }} 
                className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-8" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">You are about to join “{classData.name}”</h2>
                    <p className="text-gray-500 mt-2 mb-6">Is this the correct class?</p>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden text-white">
                    <img src={classData.imageUrl} alt={classData.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 z-10 p-4">
                        <h3 className="text-2xl font-bold drop-shadow-lg">{classData.title}</h3>
                        <div className="flex flex-col items-start gap-1 mt-2">
                            <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">{classData.name}</span>
                            <span className="bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">Teacher {classData.teacher}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <button onClick={onCancel} className="flex-1 justify-center items-center gap-2 bg-gray-100 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 flex">
                        <HiX className="w-5 h-5" /> Cancel
                    </button>
                    <button onClick={onConfirm} className="flex-1 justify-center items-center gap-2 bg-teal-500 text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-all duration-200 flex shadow-lg shadow-teal-500/30">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> 
                        Confirm
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

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

const ClassCard = ({ classInfo, onLeaveClick }) => {
    return (
        <div className="relative h-64 rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer bg-white">
            <div className="h-2/5 overflow-hidden">
                <img src={classInfo.imageUrl} alt={classInfo.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-4 flex flex-col h-3/5">
                <div className="flex justify-between items-start">
                    <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full">{classInfo.name}</span>
                    <button onClick={(e) => { e.preventDefault(); onLeaveClick(); }} className="p-1 rounded-full text-gray-400 hover:bg-gray-100 transition-colors">
                        <HiDotsHorizontal className="w-5 h-5" /> {/* <-- PERUBAHAN 2: Ikon diganti */}
                    </button>
                </div>
                <div className="mt-2 flex-grow">
                    <h3 className="text-lg font-bold text-gray-900">{classInfo.title}</h3>
                    <p className="text-sm text-gray-500">Teacher: {classInfo.teacher}</p>
                </div>
                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-gray-500">Progress</span>
                        <span className="text-xs font-bold text-teal-600">{classInfo.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${classInfo.progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JoinClassBanner = ({ code, setCode, onJoin, error, setError }) => { // <-- PERUBAHAN 3: setError ditambahkan
    return (
        <div className="relative p-6 rounded-2xl overflow-hidden bg-teal-50">
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${myIllustration})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                }}
            ></div>
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                <p className="text-lg font-semibold text-gray-700">
                    Enter the connect code your teacher shared with you below
                </p>
                <div className="flex items-start gap-2">
                    <div>
                        <input
                            type="text"
                            placeholder="Type connect code"
                            value={code}
                            onChange={(e) => {
                                setCode(e.target.value);
                                if (error) setError('');
                            }}
                            className="px-4 py-3 bg-white rounded-xl border-gray-300 w-64 text-center focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <button
                        onClick={() => onJoin(code)}
                        className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-600 transition-all duration-200"
                    >
                        Join Class
                    </button>
                </div>
            </div>
        </div>
    );
};

// ===================================================================
// KOMPONEN UTAMA (HANYA ADA SATU `export default` SEKARANG)
// ===================================================================
const ClassroomListPage = () => {
    // --- State & Functions (tidak ada perubahan) ---
    const FAKE_CLASS_DATABASE = {
        'CODE7C': { id: 'C7', name: 'Class 7C', title: 'English Learning', teacher: 'Salsabila', imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop', progress: 75 },
        'CODE8B': { id: 'B8', name: 'Creative Writing', teacher: 'Khomarudin', imageUrl: 'https://images.unsplash.com/photo-1491841550275-5b462bf48569?q=80&w=2070&auto=format&fit=crop', progress: 40 },
        'CODE9A': { id: 'A9', name: 'Public Speaking', teacher: 'Elizabeth', imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop', progress: 95 },
    };
    const [classCode, setClassCode] = useState('');
    const [foundClass, setFoundClass] = useState(null);
    const [error, setError] = useState('');
    const [classToLeave, setClassToLeave] = useState(null);
    const [joinedClasses, setJoinedClasses] = useState(() => {
        try {
            const savedClasses = localStorage.getItem('myJoinedClasses');
            return savedClasses ? JSON.parse(savedClasses) : [];
        } catch (error) { console.error("Failed to parse classes from localStorage", error); return []; }
    });
    useEffect(() => {
        localStorage.setItem('myJoinedClasses', JSON.stringify(joinedClasses));
    }, [joinedClasses]);
    const handleJoinClass = (codeToJoin) => {
        const code = codeToJoin.trim().toUpperCase();
        if (code.length < 5) { setError('Kode tidak valid (minimal 5 karakter)'); return; }
        const classData = FAKE_CLASS_DATABASE[code];
        if (classData) {
            if(joinedClasses.find(c => c.id === classData.id)) { setError('Anda sudah bergabung dengan kelas ini.'); return; }
            setError('');
            setFoundClass(classData);
        } else { setError('Kode kelas tidak ditemukan.'); }
    };
    const handleConfirmJoin = () => {
        setJoinedClasses(prevClasses => {
            if (prevClasses.find(c => c.id === foundClass.id)) { return prevClasses; }
            return [...prevClasses, foundClass];
        });
        setFoundClass(null); setClassCode('');
    };
    const handleConfirmLeave = () => {
        if (!classToLeave) return;
        setJoinedClasses(prevClasses => prevClasses.filter(c => c.id !== classToLeave.id));
        setClassToLeave(null);
    };
    const handleCancelJoin = () => setFoundClass(null);

    return (
        <div className="space-y-8">
            {/* PERUBAHAN 4: STRUKTUR TAMPILAN DISEMPURNAKAN */}
            <JoinClassBanner 
                code={classCode}
                setCode={setClassCode}
                onJoin={handleJoinClass}
                error={error}
                setError={setError} // <-- Prop setError ditambahkan
            />
            {joinedClasses.length > 0 && (
                <>
                    <h1 className="text-2xl font-bold text-gray-800 pt-4">
                        Your Class
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {joinedClasses.map((classInfo) => (
                            <Link to={`/classroom/detail/${classInfo.id}`} key={classInfo.id}>
                                <ClassCard classInfo={classInfo} onLeaveClick={() => setClassToLeave(classInfo)} />
                            </Link>
                        ))}
                    </div>
                </>
            )}
            <AnimatePresence>
                {foundClass && <ConfirmationModal classData={foundClass} onConfirm={handleConfirmJoin} onCancel={handleCancelJoin} />}
                {classToLeave && <LeaveClassModal classData={classToLeave} onConfirm={handleConfirmLeave} onCancel={() => setClassToLeave(null)} />}
            </AnimatePresence>
        </div>
    );
};

export default ClassroomListPage; // <-- HANYA ADA SATU EXPORT DEFAULT