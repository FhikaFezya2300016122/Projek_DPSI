import React from 'react';
import RegisterForm from '../components/Register/Registerform.jsx';
import logo from '../Images/Icon.png'; // Import langsung dari src

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <img src={logo} alt="Englify Logo" className="h-8 mb-6" />

      {/* Register Form */}
      <RegisterForm />
    </div>
  );
};

export default Register;
