import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Pastikan path ini benar

// Impor ikon
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";
import logo from '../Images/Icon.png'; // Impor logo Anda

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) throw error;

            navigate('/dashboard'); // Arahkan ke dasbor setelah berhasil
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    const handleOAuthLogin = async (provider) => {
        setError(null);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: provider,
        });
        if (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
            {/* Logo di atas kartu */}
            <div className="flex items-center mb-6">
                <img src={logo} alt="Englify Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold ml-2 text-gray-800">Englify</span>
            </div>
            
            {/* Kartu Login */}
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg relative">
                {/* Tombol Close (opsional) */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-sm text-gray-500 mt-1">Create a free profile in less than 5 minutes</p>
                </div>

                {/* Tombol Login Sosial */}
                <div className="space-y-3 mb-6">
                    <button
                        type="button"
                        onClick={() => handleOAuthLogin('google')}
                        className="w-full flex items-center justify-center gap-3 border rounded-md py-2.5 shadow-sm hover:bg-gray-50 transition"
                    >
                        <FcGoogle size={22} />
                        <span className="text-sm font-medium text-gray-700">Login With Google</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleOAuthLogin('twitter')}
                        className="w-full flex items-center justify-center gap-3 border rounded-md py-2.5 shadow-sm hover:bg-gray-50 transition"
                    >
                        <FaXTwitter size={20} />
                        <span className="text-sm font-medium text-gray-700">Login With X</span>
                    </button>
                </div>

                {/* Pemisah "or" */}
                <div className="flex items-center mb-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-4 text-sm text-gray-400">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Form Login Email */}
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email*</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-700">Password*</label>
                            <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                                Forgot?
                            </Link>
                        </div>
                        <div className="relative">
                             <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                             <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-md font-semibold transition disabled:bg-gray-400"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="text-sm text-center mt-6">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-green-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
