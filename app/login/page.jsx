"use client";
import { login } from "@/services/authService";
import React, { use, useEffect } from "react";
import { useState } from "react";

const LoginPage = () => {
  const [render, setRender] = useState(false);

  const [data, setData] = useState({
    email: "ozgenurguclu0@gmail.com",
    password: "Test123456*",
  });

  const handleSubmit = async () => {
    const [reqError, reqData] = await login(data);
    if (reqError) {
      return alert("kullanıcı bulunamadı");
    }
    localStorage.setItem("token", reqData.token);

    window.location.href = "/admin-panel";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return (window.location.href = "/admin-panel");
    }
    setRender(true);
  }, []);

  return (
    render && (
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="flex flex-col items-center gap-3 space-y-2 bg-white p-10 py-16  rounded-md shadow-md">
          <div className="flex flex-col w-[360px] gap-1 ">
            <input
              type="text"
              placeholder="Email address"
              className="border border-gray-300 outline-none rounded-md p-3"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-[360px] gap-1 ">
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 outline-none rounded-md p-3"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-[360px] bg-blue-400 rounded-md py-3 text-white text-lg font-semibold"
          >
            Login
          </button>
          <label className="italic text-gray-400">
            ozgenurguclu0@gmail.com Test123456*
          </label>
        </div>
      </div>
    )
  );
};

export default LoginPage;
