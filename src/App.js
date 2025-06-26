import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Menggabungkan SEMUA halaman dari kedua versi ---

// Halaman Umum
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from "./pages/ForgotPassword";

// Halaman dari Fitur Anda
import RoleSelectionPage from './pages/RoleSelectionPage';
import SuccessPage from './pages/SuccessPage';
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile';
import RankPage from './pages/RankPage';

// Halaman dari Fitur Teman Anda
import ClassroomListPage from "./pages/classroom/Classroom"; 
import ClassDetailPage from "./pages/classdetail/ClassDetailPage";

// Impor file CSS utama
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Semua rute sekarang menjadi individual --- */}
        
        {/* Rute Registrasi & Login */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/select-role" element={<RoleSelectionPage />} />
        <Route path="/success" element={<SuccessPage />} />
        
        {/* Rute setelah login (Masing-masing halaman ini akan memanggil Sidebar/Header sendiri) */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/classroom" element={<ClassroomListPage />} /> 
        <Route path="/classroom/detail/:classId" element={<ClassDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
