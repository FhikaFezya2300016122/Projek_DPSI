import React from "react";
import Icon from "../../Images/Icon.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-8 bg-white shadow-sm">
      {/* Logo dan Brand */}
      <div className="flex items-center gap-4">
        <img src={Icon} alt="Englify Logo" className="w-12 h-12" />
        <span className="text-3xl font-bold text-green-600">Englify</span>
      </div>

      {/* Menu Navigasi */}
      <nav className="hidden md:flex space-x-12 text-[20px] font-semibold text-gray-700">
        <a href="#home" className="font-extrabold text-black hover:text-green-600">
          Home
        </a>
        <a href="#features" className="hover:text-green-600">
          Features
        </a>
        <a href="#testimonials" className="hover:text-green-600">
          Testimonials
        </a>
        <a href="#faqs" className="hover:text-green-600">
          FAQ
        </a>
      </nav>

      {/* Tombol Auth */}
      <div className="flex items-center space-x-6">
        <a
          href="/login"
          className="px-6 py-3 border border-gray-400 text-lg rounded-full hover:border-green-500 hover:text-green-600 transition"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-7 py-3 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition"
        >
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
