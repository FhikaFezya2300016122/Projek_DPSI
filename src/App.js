// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterCard from './pages/RegisterCard';
import RegisterSuccess from './pages/RegisterSuccess';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/roleselection" element={<RegisterCard />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
      </Routes>
    </Router>
  );
}
