'use client';
import '../globals.css';
import { useEffect, useState } from 'react';
import { fetchMyProfile } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import Sidebar from '@/components/SideBar';

export default function RootLayout({ children }) {
  const { setUser } = useAuthStore();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return (window.location.href = '/login');
      }
      const [reqError, reqData] = await fetchMyProfile();
      if (reqError) {
        localStorage.removeItem('token');
        return (window.location.href = '/login');
      }
      setUser(reqData);
    })();
  }, []);

  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="p-8 flex-1">{children}</main>
      </body>
    </html>
  );
}
