import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-green-50 shadow">
      <div className="text-xl font-bold text-green-600">Englify</div>
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Features</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Testimonials</a>
        <a href="#" className="text-gray-700 hover:text-green-600">FAQ</a>
      </nav>
      <div className="space-x-3">
        <a href="/login" className="text-gray-700 hover:text-green-600">Login</a>
        <a href="/register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm">Register</a>
      </div>
    </header>
  );
};

export default Header;