// src/components/AuthDebugger.jsx
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';

function AuthDebugger() {
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log('--- Auth Debugger ---');
    if (loading) {
      console.log('Auth state sedang loading...');
      return;
    }

    if (user) {
      console.log('✅ Pengguna terdeteksi (login berhasil):', user);
      
      const fetchProfile = async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('❌ Gagal mengambil data profil:', error);
        } else if (data) {
          console.log('✅ Data profil ditemukan:', data);
        } else {
          console.warn('⚠️ Tidak ada data profil untuk pengguna ini. Kemungkinan trigger tidak berjalan saat pendaftaran.');
        }
      };

      fetchProfile();
    } else {
      console.log('❌ Tidak ada pengguna yang login.');
    }
  }, [user, loading]);

  return null; // Komponen ini tidak menampilkan apa-apa
}

export default AuthDebugger;