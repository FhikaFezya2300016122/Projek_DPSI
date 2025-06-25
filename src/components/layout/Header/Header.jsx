import React from 'react';
// 1. Impor Link dari react-router-dom
import { Link } from 'react-router-dom';

// --- DEFINISI IKON ---
const SearchIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const BellIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
);


// --- KOMPONEN HEADER ---
const Header = () => (
  <header className="flex items-center justify-between p-4 md:p-6 bg-white border-b border-gray-200">
    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
    <div className="flex items-center space-x-4 md:space-x-6">
      <div className="relative hidden md:block">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for something"
          className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <button className="text-gray-500 hover:text-gray-800">
        <BellIcon />
      </button>

      {/* 2. Bungkus gambar avatar dengan komponen Link */}
      <Link to="/profile" className="flex-shrink-0">
        <img
            src="https://placehold.co/40x40/E2E8F0/4A5568?text=U"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-green-400 transition"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/E2E8F0/4A5568?text=U'; }}
        />
      </Link>
    </div>
  </header>
);

export default Header;
