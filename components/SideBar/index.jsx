import React from "react";
import { useAuthStore } from "@/stores/authStore";
import Image from "next/image";
import avatar from "@/icons/default-avatar.svg";
import Category from "@/icons/Category";
import Link from "next/link";

const SideBar = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex flex-col p-4 sticky flex-shrink-0 w-auto h-screen bg-blue-100 text-black gap-4">
      <Link href="/admin-panel" className="text-lg font-bold ">
        ADMİN
      </Link>
      <div className="flex items-center justify-center gap-4">
        <div className="relative w-20 h-20">
          <Image src={avatar} alt="User Avatar" layout="fill" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold"> Hi! Welcome</h1>
          <h2 className="text-xl font-semibold">
            {user ? `${user.firstName} ${user.lastName}` : "Guest"}
          </h2>
          <span className="italic">{user?.email || "No email available"}</span>
          <span>{user?.phone || "No phone available"}</span>
        </div>
      </div>
      <div className="p-4 flex gap-3 font-bold text-lg items-center ">
        <Category />
        <Link href="/admin-panel/categories">Category</Link>
      </div>
    </div>
  );
};

export default SideBar;
