// src/components/classdetail/SessionAccordion.jsx
import React, { useState } from 'react';
import { HiChevronDown, HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import PhaseCard from './PhaseCard';

// Komponen Panah Horizontal
const ArrowHorizontal = ({ direction = 'right' }) => (
    <div className="flex-grow flex items-center mx-2">
        <div className="w-full border-t-2 border-dashed border-gray-300 relative">
            {direction === 'right' && <HiChevronRight className="absolute -right-2 -top-3 text-gray-400 w-5 h-5" />}
            {direction === 'left' && <HiChevronLeft className="absolute -left-2 -top-3 text-gray-400 w-5 h-5" />}
        </div>
    </div>
);

// Komponen Panah Vertikal
const ArrowVertical = () => (
    <div className="h-10 flex items-center justify-center">
        <div className="h-full border-l-2 border-dashed border-gray-300 relative">
            <HiChevronDown className="absolute -bottom-2 -left-3 text-gray-400 w-5 h-5" />
        </div>
    </div>
);


const SessionAccordion = ({ session }) => {
    const [isOpen, setIsOpen] = useState(session.isOpen);

    // Membagi data fase menjadi dua baris
    const topRowPhases = session.phases.slice(0, 3);
    const bottomRowPhases = session.phases.slice(3, 6);

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header Sesi */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left"
            >
                <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
                {isOpen ? <HiChevronDown className="w-6 h-6" /> : <HiChevronRight className="w-6 h-6" />}
            </button>

            {/* Konten Fase (jika terbuka) */}
            {isOpen && (
                <div className="px-6 pb-6">
                    {/* Baris Atas */}
                    <div className="flex justify-between items-center">
                        {topRowPhases.map((phase, index) => (
                            <React.Fragment key={phase.id}>
                                <PhaseCard phase={phase} />
                                {index < topRowPhases.length - 1 && <ArrowHorizontal direction="right" />}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Panah Vertikal */}
                    <div className="flex justify-end pr-28">
                        <ArrowVertical />
                    </div>

                    {/* Baris Bawah (Dibalik) */}
                    <div className="flex justify-between items-center">
                        {bottomRowPhases.reverse().map((phase, index) => (
                            <React.Fragment key={phase.id}>
                                <PhaseCard phase={phase} />
                                {index < bottomRowPhases.length - 1 && <ArrowHorizontal direction="left" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SessionAccordion;