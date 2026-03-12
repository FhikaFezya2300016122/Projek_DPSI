import React from 'react';

// Komponen ini sekarang menerima 'profile' sebagai prop untuk menampilkan nama pengguna.
const WelcomeBanner = ({ profile }) => ( 
    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-white p-6 md:p-8 rounded-2xl overflow-hidden">
        <div className="relative z-10">
            {/* Menampilkan nama lengkap dari data profil */}
            <h2 className="text-xl font-semibold">Hi, {profile?.full_name || 'User'}</h2>
            <p className="text-2xl md:text-3xl font-bold mt-1">Welcome to Englify!</p>
        </div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full"></div>
        <div className="absolute right-20 -bottom-16 w-32 h-32 bg-white/10 rounded-full"></div>
    </div>
);

export default WelcomeBanner;
