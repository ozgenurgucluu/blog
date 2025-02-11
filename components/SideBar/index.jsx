'use client';
import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import Image from 'next/image';
import avatar from '@/icons/default-avatar.svg';
import Category from '@/icons/Category';
import Link from 'next/link';
import TagIcon from '@/icons/TagIcon';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const { user } = useAuthStore();
  const pathname = usePathname();

  return (
    <div className="flex flex-col px-4 py-6 sticky top-0 flex-shrink-0 h-screen bg-white shadow-lg text-black/75 gap-8">
      <Link
        href="/admin-panel"
        className="text-md font-semibold text-black/70 hover:text-black transition-colors"
      >
        Dashboard {pathname}
      </Link>
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={avatar}
            alt="User Avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm text-gray-500">Hi! Welcome</h1>
          <h2 className="text-lg font-semibold text-black">
            {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
          </h2>
          <span className="italic text-md text-gray-600">
            {user?.email || 'No email available'}
          </span>
          <span className="text-md text-gray-600">
            {user?.phone || 'No phone available'}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 border-t border-b border-gray-200">
        <Link
          href="/admin-panel/categories"
          className="text-sm font-medium text-black  hover:text-blue-600 flex items-center gap-3 group hover:bg-gray-200 p-3 rounded-lg cursor-pointer transition-all"
        >
          <Category className="w-5 h-5 text-gray-700 hover:text-blue-600" />
          Categories
        </Link>
        <Link
          href="/admin-panel/tags"
          className="text-sm font-medium text-black flex items-center gap-3 group hover:bg-gray-200 p-3 rounded-lg cursor-pointer transition-all hover:text-blue-600"
        >
          <TagIcon className="w-5 h-5 text-gray-700 hover:text-blue-600 " />
          Tags
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
