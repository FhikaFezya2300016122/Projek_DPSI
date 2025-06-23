import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Icon.png";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email cannot be empty. Please enter your email.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address. Please check and try again.");
    } else {
      setError("");
      setStep(2);
      // Simulasi kirim kode ke email
      console.log("Verification code sent to:", email);
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code === "123456") {
      setStep(3);
      setError("");
    } else {
      setError("Invalid verification code. Try again.");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Englify Logo" className="h-8" />
        </div>

        <h1 className="text-xl font-bold text-center mb-2">Forgot Password?</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          {step === 1 && "No worries, we’ll send you reset instructions."}
          {step === 2 && "Enter the verification code we sent to your email."}
          {step === 3 && "Create your new password below."}
        </p>

        {success ? (
          <div className="text-center text-green-600 font-medium">
            ✅ Password has been reset successfully!
          </div>
        ) : (
          <form
            onSubmit={
              step === 1
                ? handleEmailSubmit
                : step === 2
                ? handleCodeSubmit
                : handlePasswordReset
            }
            className="flex flex-col gap-4"
          >
            {step === 1 && (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}

            {step === 2 && (
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter verification code"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}

            {step === 3 && (
              <>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </>
            )}

            {error && <p className="text-sm text-red-600 -mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              {step === 1 && "Send Code"}
              {step === 2 && "Verify Code"}
              {step === 3 && "Reset Password"}
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;