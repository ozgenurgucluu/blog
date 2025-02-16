'use client';
import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import Image from 'next/image';
import avatar from '@/icons/default-avatar.svg';
import Category from '@/icons/Category';
import Link from 'next/link';
import TagIcon from '@/icons/TagIcon';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { GrDocument } from 'react-icons/gr';

const SideBar = () => {
  const { user } = useAuthStore();
  const pathname = usePathname();

  const links = [
    {
      title: 'KATEGORİ',
      pathname: '/admin-panel/categories',
      icon: <Category />,
    },
    {
      title: 'ETİKETLER',
      pathname: '/admin-panel/tags',
      icon: <TagIcon />,
    },
    {
      title: 'İÇERİKLER',
      pathname: '/admin-panel/posts',
      icon: <GrDocument className="w-5 h-5" />,
    },
  ];

  const activeLink = links.find((link) => link.pathname === pathname);

  return (
    <div className="flex flex-col px-4 py-6 sticky top-0 flex-shrink-0 h-screen bg-white shadow-lg text-black/75 gap-8">
      <Link
        href="/admin-panel"
        className="text-md font-semibold text-black/70 hover:text-black transition-colors"
      >
        Dashboard
      </Link>
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            loader={({ src }) => src}
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
        {links.map((link, index) => (
          <Link
            href={link.pathname}
            key={index}
            className={classNames(
              'text-sm font-medium text-black hover:text-blue-600 flex items-center gap-3 group hover:bg-gray-200 p-3 rounded-lg cursor-pointer transition-all',
              {
                ' text-blue-600 ': pathname === link.pathname,
              }
            )}
          >
            <span className="w-5 h-5 text-gray-700 hover:text-blue-600">
              {link.icon}
            </span>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
