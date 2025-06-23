import React, { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showGoogleUI, setShowGoogleUI] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        localStorage.setItem('googleUser', JSON.stringify(res.data));
        console.log('Google user info:', res.data);
        navigate('/roleselection');
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    },
    onError: (error) => {
      console.error('Google Login Failed:', error);
    }
  });

  const handleGoogleRegister = () => {
    setShowGoogleUI(true);
    setTimeout(() => login(), 1000); // Delay untuk visualisasi
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/roleselection');
  };

  if (showGoogleUI) {
    return (
      <div className="w-[1440px] h-[1024px] relative bg-slate-100 overflow-hidden">
        <div className="w-[1040px] min-h-96 px-9 pt-28 pb-9 left-[200px] top-[288px] absolute bg-white rounded-3xl inline-flex flex-col justify-center items-start">
          <div className="self-stretch flex-1 relative">
            <div className="w-[484px] h-56 left-0 top-[-72px] absolute">
              <div className="w-[1039px] h-12 pl-4 pr-[865.47px] py-3 left-[-35px] top-[-32px] absolute border-b border-stone-300 inline-flex justify-start items-center gap-3">
                <div className="w-5 h-6 relative">
                  <div className="w-2.5 h-2.5 left-[10px] top-[10px] absolute bg-blue-500" />
                  <div className="w-4 h-2 left-[1.07px] top-[13.89px] absolute bg-green-600" />
                  <div className="w-1 h-2 left-0 top-[7.52px] absolute bg-yellow-500" />
                  <div className="w-4 h-2 left-[1.07px] top-[2px] absolute bg-red-500" />
                </div>
                <div className="justify-center text-zinc-700 text-sm font-medium font-['Inter'] leading-tight">
                  Register with Google
                </div>
              </div>
              <div className="w-44 h-11 left-0 top-[72px] absolute justify-center text-stone-900 text-4xl font-normal font-['Inter'] leading-10">
                Register
              </div>
              <div className="w-28 h-6 left-0 top-[132px] absolute justify-center text-stone-900 text-base font-normal font-['Inter'] leading-normal">
                to continue to
              </div>
              <div className="w-32 h-5 left-[109.95px] top-[134px] absolute justify-center text-blue-700 text-base font-medium font-['Inter'] tracking-tight">
                Englify
              </div>
            </div>
            <div className="w-[460px] h-24 left-[508px] top-0 absolute">
              <div className="w-[460px] h-14 left-0 top-[8px] absolute rounded border border-neutral-500" />
              <div className="w-[460px] h-14 left-0 top-[8px] absolute rounded border-2 border-blue-700" />
              <div className="w-[456px] h-12 left-[2px] top-[10px] absolute rounded" />
              <div className="h-3.5 max-w-[1068px] px-1.5 left-[8px] top-[0.75px] absolute bg-white inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="justify-center text-blue-700 text-xs font-normal font-['Inter']">
                  Email or phone
                </div>
              </div>
              <div className="w-24 h-4 left-0 top-[74px] absolute justify-center text-blue-700 text-sm font-medium font-['Inter'] tracking-tight">
                Forgot email?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-1">Create a Profile</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Create a free profile in less than 5 minutes
      </p>

      <div className="space-y-3 mb-6">
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-2 border rounded-md py-2 shadow-sm hover:bg-gray-100 transition"
        >
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
  );
}
