import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../Image/Icon.png';

export default function RegisterSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo*/}
      <div className="flex items-center space-x-2 mb-6">
        <img src={Icon} alt="Englify Logo" className="w-6 h-6" />
        <h1 className="text-xl font-semibold text-gray-700">Englify</h1>
      </div>

      {/* Card Success */}
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
        {/* Icon Check */}
        <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-xl font-bold mb-2">🎉 Welcome to Englify! 🎉</h2>
        <p className="text-sm text-gray-600 mb-6">
          You have successfully registered and chosen your role.<br />
          Now, you're ready to explore and learn in a fun way. Let's go!
        </p>

        {/* Tombol ke Dashboard */}
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm w-full"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
