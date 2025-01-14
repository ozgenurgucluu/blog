"use client";
import { useAuthStore } from "@/stores/authStore";

const AdminPanel = () => {
  const { user } = useAuthStore();
  return <div>{JSON.stringify(user)}</div>;
};

export default AdminPanel;
