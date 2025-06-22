import React from 'react';
// 1. Impor Link dan useLocation dari react-router-dom
import { Link, useLocation } from 'react-router-dom';

// --- DEFINISI IKON ---
// Ikon-ikon ini didefinisikan di sini agar komponen mandiri.
// Sebaiknya, Anda memiliki satu file pusat untuk semua ikon.
const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const BookOpenIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const ActivityIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);
const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const SettingsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);

// --- KOMPONEN SIDEBAR ---
const Sidebar = () => {
    // 2. Dapatkan objek lokasi untuk mengetahui path URL saat ini
    const location = useLocation();

    // 3. Tambahkan properti `path` untuk setiap item menu
    const mainMenuItems = [
        { icon: <HomeIcon />, name: 'Dashboard', path: '/dashboard' },
        { icon: <BookOpenIcon />, name: 'Classroom', path: '/classroom' },
        { icon: <ActivityIcon />, name: 'Activity', path: '/activity' },
    ];
    const otherMenuItems = [
        { icon: <UserIcon />, name: 'Profile', path: '/profile' },
        { icon: <SettingsIcon />, name: 'Settings', path: '/settings' },
    ];

    const NavItem = ({ item }) => {
        // 4. Tentukan apakah item aktif dengan membandingkan path
        const isActive = location.pathname === item.path;
        
        return (
            // 5. Ganti tag <a> dengan komponen <Link>
            <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                        ? 'bg-green-100 text-green-600 font-bold'
                        : 'text-gray-500 hover:bg-gray-100'
                }`}
            >
                {React.cloneElement(item.icon, { className: 'w-6 h-6 mr-3' })}
                <span>{item.name}</span>
            </Link>
        );
    };

    return (
        <aside className="hidden md:flex w-64 bg-white p-6 flex-col flex-shrink-0 border-r border-gray-200">
            <div className="flex items-center mb-10">
                <div className="bg-green-500 text-white font-bold rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>
                </div>
                <h1 className="text-2xl font-bold ml-3 text-gray-800">Englify</h1>
            </div>
            <nav className="space-y-4">
                <div>
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Main</h2>
                    <div className="space-y-2">
                        {mainMenuItems.map((item) => <NavItem key={item.name} item={item} />)}
                    </div>
                </div>
                <div>
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-2">Other Menu</h2>
                    <div className="space-y-2">
                        {otherMenuItems.map((item) => <NavItem key={item.name} item={item} />)}
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
