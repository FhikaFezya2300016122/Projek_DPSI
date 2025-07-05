import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import toast from 'react-hot-toast';

// Komponen Toggle yang bisa digunakan kembali
const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
      enabled ? 'bg-teal-500' : 'bg-gray-300'
    }`}
  >
    <span
      className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

export default function NotificationSettingsPage() {
    // State untuk menyimpan semua pengaturan notifikasi
    const [settings, setSettings] = useState({
        general: true,
        reminders: false,
        updates: true,
        rewards: true,
    });
    
    // TODO: Di aplikasi nyata, Anda akan mengambil nilai awal dari Supabase
    // useEffect(() => {
    //     async function fetchSettings() {
    //         const { data, error } = await supabase.from('profiles').select('notification_preferences').single();
    //         if (data) setSettings(data.notification_preferences);
    //     }
    //     fetchSettings();
    // }, []);

    // Fungsi untuk handle perubahan toggle
    const handleToggleChange = async (key) => {
        const newSettings = { ...settings, [key]: !settings[key] };
        setSettings(newSettings);

        // TODO: Simpan perubahan ini ke Supabase
        // const { error } = await supabase
        //     .from('profiles')
        //     .update({ notification_preferences: newSettings })
        //     .eq('id', 'USER_ID'); // Dapatkan user id dari session
        // if (error) {
        //     toast.error("Failed to save settings.");
        //     // Kembalikan ke state semula jika gagal
        //     setSettings(settings);
        // } else {
        //     toast.success("Settings saved!");
        // }
        toast.success(`'${key}' setting changed!`); // Notifikasi sementara
    }

    const notificationItems = [
        { key: 'general', title: 'General', desc: 'Updates about the app, new features, and system information.' },
        { key: 'reminders', title: 'Daily Check-in Reminders', desc: 'Reminders to check in daily and claim rewards.' },
        { key: 'updates', title: 'Class Updates from Teacher', desc: 'Notifications when new assignments are posted by the teacher.' },
        { key: 'rewards', title: 'Reward & Achievement Alerts', desc: 'Alerts when users earn badges, points, or milestones.' }
    ];

  return (
    <div className="p-8">
       <div className="flex items-center mb-6">
        <Link to="/settings" className="p-2 rounded-full hover:bg-gray-200 mr-3">&larr;</Link>
        <div>
            <p className="text-sm text-gray-500">Settings &gt; Notification</p>
            <h1 className="text-3xl font-bold">Notification</h1>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
        <ul className="divide-y divide-gray-200">
            {notificationItems.map(item => (
                 <li key={item.key} className="flex justify-between items-center py-4">
                    <div className="pr-4">
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <Toggle enabled={settings[item.key]} onChange={() => handleToggleChange(item.key)} />
                 </li>
            ))}
        </ul>
      </div>
    </div>
  );
}