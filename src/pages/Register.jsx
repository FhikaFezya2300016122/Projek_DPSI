import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'; 
import logo from "../Images/Icon.png"; 

export default function RegisterForm() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/roleselection'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo dan Brand di luar box */}
      <div className="flex items-center gap-2 mb-6">
        <img src={logo} alt="Englify Logo" className="h-6" />
        <h1 className="text-xl font-semibold text-gray-700">Englify</h1>
      </div>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-1">Create a Profile</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create a free profile in less than 5 minutes
        </p>

        {/* Tombol Social Login */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 shadow-sm hover:bg-gray-100 transition">
            <FcGoogle size={20} />
            <span className="text-sm font-medium">Register with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 shadow-sm hover:bg-gray-100 transition">
            <FaXTwitter size={18} />
            <span className="text-sm font-medium">Register with X</span>
          </button>
        </div>

        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form Input */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium">Full Name*</label>
            <input
              type="text"
              placeholder="e.g. Arief Maulana"
              required
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email*</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password*</label>
            <input
              type="password"
              placeholder="Must be at least 8 characters"
              required
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-sm cursor-pointer">
              I agree with terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 flex justify-center space-x-2">
          <span className="h-2 w-4 bg-gray-800 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}