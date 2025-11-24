'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SERVICE_CATEGORIES, ServiceCategory } from '../config/navigation'; 

/**
 * Renders the horizontal navigation bar below the hero section using dynamic data.
 */
const CategoryNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center border-b border-gray-100 bg-white px-6 md:px-10">
      <div className="flex space-x-3 overflow-x-auto whitespace-nowrap py-3">
        {SERVICE_CATEGORIES.map((category: ServiceCategory) => {
          const isActive = pathname === category.href;
          return (
            <Link
              key={category.href}
              href={category.href}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNav;