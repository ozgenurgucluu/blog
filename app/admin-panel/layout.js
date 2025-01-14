"use client";
import { useContext, useEffect, useState } from "react";
import { fetchMyProfile } from "@/services/authService";
import { AuthContext } from "@/contexts/authContext";
import AuthContextProvider from "@/contexts/authContext";

export default function RootLayout({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return (window.location.href = "/login");
      }
      const [reqError, reqData] = await fetchMyProfile();
      if (reqError) {
        localStorage.removeItem("token");
        return (window.location.href = "/login");
      }
      setUser(reqData);
    })();
  }, []);

  return (
    <html lang="en">
      <AuthContextProvider user={user}>
        <body>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
