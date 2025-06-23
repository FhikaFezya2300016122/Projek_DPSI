import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoleSelection from '../components/Register/RoleSelection';
import Icon from '../Images/Icon.png';

export default function RegisterCard() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) return;
    localStorage.setItem('selectedRole', selectedRole);
    navigate('/register-success'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo*/}
      <div className="flex items-center space-x-2 mb-6">
        <img src={Icon} alt="Englify Logo" className="w-6 h-6" />
        <h1 className="text-xl font-semibold text-gray-700">Englify</h1>
      </div>

      <RoleSelection
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        onContinue={handleContinue}
      />
    </div>
  );
}
