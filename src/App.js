// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Impor Komponen Layout ---
import MainLayout from './components/layout/MainLayout';

// --- Impor Halaman Umum ---
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from "./pages/ForgotPassword";
import RoleSelectionPage from './pages/RoleSelectionPage';
import SuccessPage from './pages/SuccessPage';

// --- Impor Halaman Aplikasi ---
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile';
import RankPage from './pages/RankPage';
import ClassroomListPage from "./pages/classroom/Classroom"; 
import ClassDetailPage from "./pages/classdetail/ClassDetailPage";
import ActivityPage from './pages/ActivityPage';
import PuzzleLobby from './pages/PuzzleLobby';
import PuzzleGame from './pages/PuzzleGame';
import ResultsPage from './pages/ResultsPage';
import PostDetailPage from './pages/postdetail/PostDetailPage';

// --- Impor Halaman untuk Fitur Settings ---
import SettingsPage from './pages/settings/SettingsPage';
import ChangePasswordPage from './pages/settings/ChangePasswordPage';
import NotificationSettingsPage from './pages/settings/NotificationSettingsPage';
import LanguagePage from './pages/settings/LanguagePage';
import HelpAndSupportPage from './pages/settings/HelpAndSupportPage';

// Impor file CSS utama
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Rute Publik (Tanpa MainLayout) --- */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/select-role" element={<RoleSelectionPage />} />
        <Route path="/success" element={<SuccessPage />} />
        
        {/* --- Rute Aplikasi dengan MainLayout --- */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/classroom" element={<ClassroomListPage />} /> 
          <Route path="/classroom/detail/:classId" element={<ClassDetailPage />} />
          {/* RUTE BARU SUDAH BENAR DI SINI */}
          <Route path="/classroom/detail/:classId/post/:postId" element={<PostDetailPage />} />
          
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/puzzle-lobby/:gameId" element={<PuzzleLobby />} />
          <Route path="/puzzle/:gameId" element={<PuzzleGame />} />
          <Route path="/results/:gameId" element={<ResultsPage />} />
          
          {/* --- Rute Settings --- */}
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/change-password" element={<ChangePasswordPage />} />
          <Route path="/settings/notifications" element={<NotificationSettingsPage />} />
          <Route path="/settings/language" element={<LanguagePage />} /> 
          <Route path="/settings/help" element={<HelpAndSupportPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;