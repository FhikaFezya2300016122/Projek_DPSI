// src/components/layout/Sidebar.jsx

// 1. Impor useState DAN motion
import React, { useState } from "react";
import { motion } from "framer-motion"; // <-- PENYEBAB ERROR: Baris ini hilang
import { 
    HiOutlineViewGrid,
    HiOutlineBookOpen,
    HiOutlineChartPie,
    HiOutlineUser,
    HiOutlineCog,
    HiX
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

// Varian animasi (tetap sama)
const sidebarVariants = {
  visible: { x: 0 },
  hidden: { x: "-100%" }, 
};

const Sidebar = ({ onClose }) => {
    const mainMenu = [
        { icon: <HiOutlineViewGrid />, name: "Dashboard" },
        { icon: <HiOutlineBookOpen />, name: "Classroom" },
        { icon: <HiOutlineChartPie />, name: "Activity" },
    ];
    const otherMenu = [
        { icon: <HiOutlineUser />, name: "Profile" },
        { icon: <HiOutlineCog />, name: "Settings" },
    ];

    // State untuk menu aktif (tetap sama)
    const [activeItem, setActiveItem] = useState("Classroom");

    return (
        // Gunakan motion.div (tetap sama)
        <motion.div 
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween", duration: 0.3 }}
            className="w-64 bg-white p-6 flex flex-col min-h-screen border-r border-gray-200 
                       fixed top-0 left-0 h-full z-50 lg:relative lg:z-auto"
        >
            <div className="flex-grow">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                        <span className="bg-teal-500 p-2 rounded-lg">
                            <FaGraduationCap className="text-white text-xl" />
                        </span>
                        <h1 className="text-2xl font-bold text-gray-800">Englify</h1>
                    </div>
                    <button onClick={onClose} className="text-2xl text-gray-500 lg:hidden">
                        <HiX />
                    </button>
                </div>
                
                <div>
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main</h2>
                    <nav>
                        <ul>
                            {mainMenu.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <a 
                                        href="#" 
                                        onClick={() => setActiveItem(item.name)}
                                        className={`flex items-center p-3 rounded-lg transition-colors ${
                                            activeItem === item.name 
                                            ? "bg-teal-500 text-white font-semibold shadow-md"
                                            : "text-gray-500 hover:bg-teal-50 hover:text-teal-600"
                                        }`}
                                    >
                                        <span className="mr-3 text-2xl">{item.icon}</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="mt-8">
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Other Menu</h2>
                    <nav>
                        <ul>
                            {otherMenu.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <a 
                                        href="#" 
                                        onClick={() => setActiveItem(item.name)}
                                        className={`flex items-center p-3 rounded-lg transition-colors ${
                                            activeItem === item.name
                                            ? "bg-teal-500 text-white font-semibold shadow-md"
                                            : "text-gray-500 hover:bg-teal-50 hover:text-teal-600"
                                        }`}
                                    >
                                        <span className="mr-3 text-2xl">{item.icon}</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.div>
    );
};

export default Sidebar;