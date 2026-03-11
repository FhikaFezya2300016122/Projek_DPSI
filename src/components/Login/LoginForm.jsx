import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError("Email cannot be empty.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password cannot be empty.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      alert("Login successful!");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <div>
        <label className="text-sm font-medium">Email*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {emailError && <p className="text-sm text-red-600 mt-1">{emailError}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Password*</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
        {passwordError && <p className="text-sm text-red-600 mt-1">{passwordError}</p>}
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        Login
      </button>

      <p className="text-sm text-center mt-2">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 font-medium hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;