import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di Classroom!</h1>
      <p className="text-lg text-gray-700 mb-6">Ini adalah halaman utama kelas Anda. Silakan pilih menu di atas untuk mulai belajar atau bergabung dengan kelas.</p>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Gabung Kelas</button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">Mulai Belajar</button>
      </div>
    </div>
  );
};

export default Home;
