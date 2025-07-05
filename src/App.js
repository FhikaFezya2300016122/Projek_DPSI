// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- Impor Halaman Umum (dari kode Anda) ---
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from "./pages/ForgotPassword";
import RoleSelectionPage from './pages/RoleSelectionPage';
import SuccessPage from './pages/SuccessPage';

// --- Impor Halaman Aplikasi (dari kode Anda) ---
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile';
import RankPage from './pages/RankPage';
import ClassroomListPage from "./pages/classroom/Classroom"; 
import ClassDetailPage from "./pages/classdetail/ClassDetailPage";

// --- Impor Halaman untuk Fitur Activity ---
import ActivityPage from './pages/ActivityPage';
import PuzzleLobby from './pages/PuzzleLobby';
import PuzzleGame from './pages/PuzzleGame';
import ResultsPage from './pages/ResultsPage';

// --- Impor Halaman untuk Fitur Settings (LENGKAP) ---
import SettingsLayout from './pages/settings/SettingsLayout';
import SettingsPage from './pages/settings/SettingsPage';
import ChangePasswordPage from './pages/settings/ChangePasswordPage';
import NotificationSettingsPage from './pages/settings/NotificationSettingsPage';
import LanguagePage from './pages/settings/LanguagePage'; // <-- DITAMBAHKAN
import HelpAndSupportPage from './pages/settings/HelpAndSupportPage'; // <-- DITAMBAHKAN

// Impor file CSS utama
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Rute Publik (Landing, Login, Register, dll.) --- */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/select-role" element={<RoleSelectionPage />} />
        <Route path="/success" element={<SuccessPage />} />
        
        {/* --- Rute Aplikasi Setelah Login --- */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/classroom" element={<ClassroomListPage />} /> 
        <Route path="/classroom/detail/:classId" element={<ClassDetailPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/puzzle-lobby/:gameId" element={<PuzzleLobby />} />
        <Route path="/puzzle/:gameId" element={<PuzzleGame />} />
        <Route path="/results/:gameId" element={<ResultsPage />} />
        
        {/* --- Rute Settings yang Sudah Diperbarui --- */}
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<SettingsPage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
          <Route path="notifications" element={<NotificationSettingsPage />} />
          {/* Placeholder diganti dengan komponen asli */}
          <Route path="language" element={<LanguagePage />} /> 
          <Route path="help" element={<HelpAndSupportPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;