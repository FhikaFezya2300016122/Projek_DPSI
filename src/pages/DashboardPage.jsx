import React from 'react';

// Impor semua komponen yang dibutuhkan untuk halaman dasbor.
// Pastikan jalur ini cocok dengan struktur folder Anda.
import Sidebar from '../components/layout/Sidebar/sidebar';
import Header from '../components/layout/Header/Header';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import StatCards from '../components/dashboard/StatCards';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import RecentActivity from '../components/dashboard/RecentActivity';

// Ini adalah komponen utama untuk halaman dasbor Anda.
// Tugasnya adalah menyusun semua komponen kecil menjadi satu halaman yang utuh.
const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <WelcomeBanner />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <StatCards />
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <BadgeDisplay />
                <UserProfileCard />
              </div>
            </div>
          </div>
          <RecentActivity />
        </main>
      </div>
    </div>
  );
};

// Jangan lupa untuk mengekspor komponen ini agar bisa digunakan di App.js
export default DashboardPage;
