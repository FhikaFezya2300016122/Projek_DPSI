import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Impor semua halaman yang diperlukan
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import RoleSelectionPage from './pages/RoleSelectionPage';
import SuccessPage from './pages/SuccessPage'; // Halaman baru
import DashboardPage from './pages/DashboardPage';
import Profile from './pages/Profile';
import RankPage from './pages/RankPage';

// Impor file CSS utama
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-role" element={<RoleSelectionPage />} />
        <Route path="/success" element={<SuccessPage />} /> {/* Rute baru */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank" element={<RankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
