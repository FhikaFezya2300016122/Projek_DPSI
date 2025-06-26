import React from 'react';

// Komponen ini menampilkan informasi detail pengguna.
// Menerima 'user' sebagai prop dari halaman profil utama.
const PersonalInfoTab = ({ user }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
                <img src={`https://ui-avatars.com/api/?name=${user?.email?.charAt(0)}&background=EBF4FF&color=4299E1&size=40`} className="w-10 h-10 rounded-full" alt="User Avatar" />
                <p className="font-bold text-gray-800">{user?.email?.split('@')[0]}</p>
            </div>
            <button className="px-4 py-2 text-sm bg-gray-100 font-semibold rounded-lg hover:bg-gray-200 transition">Edit Profile</button>
        </div>
        <div>
            <h4 className="font-bold text-lg mb-4">Personal information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                    <label className="text-gray-500">Username</label>
                    <p className="font-semibold text-gray-900">{user?.email?.split('@')[0] || 'N/A'}</p>
                </div>
                <div>
                    <label className="text-gray-500">Email Address</label>
                    <p className="font-semibold text-gray-900">{user?.email || 'N/A'}</p>
                </div>
                <div>
                    <label className="text-gray-500">Full Name</label>
                    <p className="font-semibold text-gray-900">{user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'N/A'}</p>
                </div>
                 <div>
                    <label className="text-gray-500">Phone Number</label>
                    <p className="font-semibold text-gray-900">{user?.phone || '+62 857 4118 4110'}</p>
                </div>
                <div className="md:col-span-2">
                    <label className="text-gray-500">Bio</label>
                    <p className="font-semibold text-gray-900 mt-1">
                        Lorem ipsum dolor sit amet consectetur. Eu non mauris aliquam faucibus et semper risus eget leo. Lorem velit curabitur sit faucibus elementum viverra cursus.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default PersonalInfoTab;
