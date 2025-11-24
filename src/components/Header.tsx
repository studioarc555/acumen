'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';
import { MAIN_NAV_LINKS, NavItem } from '../config/navigation'; 

/**
 * Replicates the main Pexels Header/Navigation area with dynamic links.
 */
const Header: React.FC = () => {
  const pathname = usePathname();

  const navItemClass = (href: string) => 
    `text-sm font-medium transition-colors duration-200 ${
      pathname === href 
        ? 'text-gray-900 border-b-2 border-gray-900' 
        : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
    } pb-1`;

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-10 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
      {/* Logo / Company Name (The Acumen Arc) */}
      <Link href="/" className="flex items-center space-x-2">
        <Zap className="w-6 h-6 text-gray-900" />
        <h1 className="text-xl font-bold tracking-tight text-gray-900">The Acumen Arc</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center space-x-8 text-sm text-gray-600 font-medium">
        {MAIN_NAV_LINKS.map((item: NavItem) => (
          <Link key={item.href} href={item.href} className={navItemClass(item.href)}>
            {item.title}
          </Link>
        ))}
        <Link href="/contact" passHref>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-150">
            Get Started
          </button>
        </Link>
      </nav>
      {/* TODO: Add Mobile Menu Drawer */}
    </header>
  );
};

export default Header;