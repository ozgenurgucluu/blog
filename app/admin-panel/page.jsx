"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

const AdminPanel = () => {
  const { user } = useContext(AuthContext);

  return <div>{JSON.stringify(user)}</div>;
};

export default AdminPanel;
