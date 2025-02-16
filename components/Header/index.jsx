'use client';
import React, { use } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const Header = ({ categories }) => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-center bg-bgHeader h-24">
      <div className="flex justify-evenly container  ">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/${category.slug}`}
            className={classNames(
              'text-gray-400 font-semibold tracking-tight hover:text-gray-100',
              {
                'text-gray-100 font-medium text-lg':
                  pathname === `/${category.slug}`,
              }
            )}
          >
            {category.title.toUpperCase('tr')}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
