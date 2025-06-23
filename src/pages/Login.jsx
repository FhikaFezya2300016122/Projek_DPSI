import React from "react";
import logo from "../Images/Icon.png";
import SocialLoginButtons from "../components/Login/SocialLoginButtons";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo dan Brand di luar box */}
      <div className="flex items-center gap-2 mb-6">
        <img src={logo} alt="Englify Logo" className="h-6" />
        <h1 className="text-xl font-semibold text-gray-700">Englify</h1>
      </div>

      {/* Card login */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Create a free profile in less than 5 minutes
        </p>

        {/* Tombol Login Google & X */}
        <SocialLoginButtons isRegister={false} />

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Form Login */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
