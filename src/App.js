// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Import Halaman-Halaman
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword"; 
// Ganti nama impor agar lebih jelas
import ClassroomListPage from "./pages/classroom/Classroom"; 
import ClassDetailPage from "./pages/classdetail/ClassDetailPage";

// Impor Layout Utama
import MainLayout from "./components/layout/MainLayout";

import './index.css';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          {/* Rute-rute yang TIDAK menggunakan layout sidebar */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Grup Rute yang MENGGUNAKAN layout sidebar */}
          <Route element={<MainLayout />}>
            <Route path="/classroom/home" element={<ClassroomListPage />} />
            <Route path="/classroom/detail/:classId" element={<ClassDetailPage />} />
          </Route>

        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;