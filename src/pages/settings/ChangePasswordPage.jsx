import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import toast from 'react-hot-toast';

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validasi di sisi klien
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('All fields are required.');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('New password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match.');
      return;
    }

    setLoading(true);

    // 2. Verifikasi password saat ini dengan mencoba login ulang (langkah keamanan yang baik)
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: currentPassword,
        });

        if (signInError) {
            toast.error('Your current password is not correct.');
            setLoading(false);
            return;
        }
    } else {
        toast.error('User not found. Please log in again.');
        setLoading(false);
        return;
    }


    // 3. Jika password saat ini benar, update dengan password baru.
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      toast.error(updateError.message);
    } else {
      toast.success('Password updated successfully!');
      // Arahkan kembali ke halaman settings setelah 2 detik
      setTimeout(() => navigate('/settings'), 2000);
      
      // Kosongkan form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }

    setLoading(false);
  };

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Link to="/settings" className="p-2 rounded-full hover:bg-gray-200 mr-3">
            &larr;
        </Link>
        <div>
            <p className="text-sm text-gray-500">Settings &gt; Change password</p>
            <h1 className="text-3xl font-bold">Change password</h1>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">Create a strong password with at least 8 characters to keep your account secure</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your current password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm new password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Re-enter your new password"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-600 disabled:bg-teal-300 transition-colors"
            >
              {loading ? 'Saving...' : 'Save Change'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}