// components/Login/SocialLoginButtons.jsx
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLoginButtons({ isRegister }) {
  const handleGoogleRedirect = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Ganti URL backend-mu
  };

  const handleTwitterRedirect = () => {
    window.location.href = "http://localhost:5000/auth/twitter"; // Kalau pakai X juga
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleGoogleRedirect}
        className="w-full flex items-center justify-center gap-2 border rounded-md py-2 shadow-sm hover:bg-gray-100 transition"
      >
        <FcGoogle size={20} />
        <span className="text-sm font-medium">
          {isRegister ? "Register" : "Login"} with Google
        </span>
      </button>

      <button
        onClick={handleTwitterRedirect}
        className="w-full flex items-center justify-center gap-2 border rounded-md py-2 shadow-sm hover:bg-gray-100 transition"
      >
        <FaXTwitter size={18} />
        <span className="text-sm font-medium">
          {isRegister ? "Register" : "Login"} with X
        </span>
      </button>
    </div>
  );
}