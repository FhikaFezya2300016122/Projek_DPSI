import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Impor hook untuk terjemahan
import { supabase } from '../../supabaseClient';
import LogoutConfirmationModal from '../../components/LogoutConfirmationModal';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const { t } = useTranslation(); // Gunakan hook i18next
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Definisikan menu di sini, menggunakan fungsi t()
  const menuItems = [
    { name: t('change_password'), path: '/settings/change-password' },
    { name: t('notification_settings'), path: '/settings/notifications' },
    { name: t('language'), path: '/settings/language' },
    { name: t('help_support'), path: '/settings/help' },
  ];

  const handleLogout = async () => {
    const toastId = toast.loading('Logging out...');
    const { error } = await supabase.auth.signOut();
    setIsModalOpen(false);
    if (error) {
      toast.error(error.message, { id: toastId });
    } else {
      toast.success('You have been logged out.', { id: toastId });
      navigate('/');
    }
  };

  // Seluruh return dibungkus dalam satu JSX Fragment <>...</>
  return (
    <>
      <div className="p-8">
        <div className="mb-6">
          <p className="text-sm text-gray-500">{t('settings_title')}</p>
          <h1 className="text-3xl font-bold text-gray-800">{t('settings_title')}</h1>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md max-w-2xl">
          <ul className="divide-y divide-gray-200">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="flex justify-between items-center py-4 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-700">{item.name}</span>
                  <span className="text-gray-400">&gt;</span>
                </Link>
              </li>
            ))}
             <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex justify-between items-center w-full py-4 px-2 rounded-lg hover:bg-gray-50 text-red-500 transition-colors"
                >
                  <span className="font-semibold">{t('logout')}</span>
                  <span className="text-gray-400">&gt;</span>
                </button>
              </li>
          </ul>
        </div>
      </div>
      
      <LogoutConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}