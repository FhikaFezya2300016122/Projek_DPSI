import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";

// Impor halaman-halaman utama Anda
import Landing from './pages/Landing';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import Register from "./pages/Register";
import RegisterCard from "./pages/RegisterCard";
import RegisterSuccess from "./pages/RegisterSuccess";
import ForgotPassword from "./pages/ForgotPassword";

// Impor file CSS utama Anda
import './index.css';

// --- Komponen Placeholder untuk Halaman Baru ---
// Untuk sementara, kita buat komponen sederhana di sini.
// Nantinya, Anda bisa memindahkan masing-masing ke dalam filenya sendiri di folder /pages.

const Classroom = () => (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Halaman Classroom</h1>
    </div>
);

const Activity = () => (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Halaman Activity</h1>
    </div>
);

const Profile = () => (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Halaman Profile</h1>
    </div>
);

const Settings = () => (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Halaman Setting</h1>
    </div>
);


// --- Komponen App Utama ---
function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/roleselection" element={<RegisterCard />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
