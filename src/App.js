import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Import halaman
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterCard from "./pages/RegisterCard";
import RegisterSuccess from "./pages/RegisterSuccess";
import ForgotPassword from "./pages/ForgotPassword";

// Impor style
import './index.css';
import './App.css';

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
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ Tambahan */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
