// src/components/classdetail/PhaseCard.jsx
import React from 'react';
import { HiLockClosed } from 'react-icons/hi';

const PhaseCard = ({ phase }) => {
    const isLocked = phase.status === 'locked';
    const isCompleted = phase.status === 'completed';

    return (
        // PERUBAHAN 1: Ukuran kartu diperbesar
        <div className={`relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg`}>
            <img 
                src={phase.imageUrl} 
                alt={phase.title} 
                className={`w-full h-full object-cover ${isLocked ? 'grayscale' : ''}`} 
            />
            {/* Overlay gelap untuk status terkunci */}
            {isLocked && <div className="absolute inset-0 bg-black/50"></div>}

            <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                {/* Judul & Status Selesai */}
                <div>
                    <h4 className="font-bold text-lg">{phase.title}</h4>
                    {isCompleted && <span className="text-xs font-semibold bg-green-500/80 px-2 py-0.5 rounded-full">Completed</span>}
                </div>
                
                {/* PERUBAHAN 2: Tampilan Kunci & Waktu */}
                {isLocked ? (
                    <div className="text-center">
                        <HiLockClosed className="mx-auto w-8 h-8 mb-1" />
                        <p className="text-sm font-semibold">{phase.availability}</p>
                    </div>
                ) : (
                    <div></div> // Placeholder agar tombol tetap di bawah
                )}
                
                {/* Tombol Aksi */}
                <button 
                    disabled={isLocked}
                    className={`w-full text-base font-bold py-2.5 rounded-lg transition-colors ${
                        isCompleted ? 'bg-yellow-500/90 hover:bg-yellow-600' : 'bg-teal-500/90 hover:bg-teal-600'
                    }`}
                >
                    {isCompleted ? 'Review' : 'Start Now'}
                </button>
            </div>
        </div>
    );
};

export default PhaseCard;