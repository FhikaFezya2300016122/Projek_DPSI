// src/pages/settings/SettingsLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar/sidebar';
import Header from '../../components/layout/Header/Header';
import { Toaster } from 'react-hot-toast';

export default function SettingsLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Toaster position="top-center" reverseOrder={false} />
          
          {/* PASTIKAN BARIS INI ADA! INI YANG PALING PENTING */}
          <Outlet /> 
          
        </main>
      </div>
    </div>
  );
}