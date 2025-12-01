"use client"; // Added to make this component a client component, resolving the image handler error

import React from 'react';
// Removed the import for Link from 'next/link' as it caused a resolution error
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Define a minimal structure for navigation items used in the Footer
interface NavItem {
    title: string;
    href: string;
}

// Mock data for Quick Links (since the original imported file is not available)
const MAIN_NAV_LINKS: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
];

/**
 * Universal Footer Component for The Acumen Arc.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info - LOGO AND BRAND NAME */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            {/* Replaced Link component with a standard <a> tag */}
            <a href="/" className="flex items-center space-x-2">
              {/* Replaced <Zap /> SVG with an <img> tag for the logo */}
              <img
                src="/assets/TheArcLog.jpg" // Assuming 'TheArcLog.jpg' is the correct image filename
                alt="The Acumen Arc Logo"
                className="h-8 w-auto object-contain rounded-md" // Adjust size and invert color for dark background
                // The onError handler is now safe because the entire component is marked as "use client"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.style.display = 'none';
                    // Fallback to text if the image fails to load
                    target.insertAdjacentHTML('afterend', '<span class="text-xl font-bold tracking-tight text-cream">A</span>');
                    console.error("TheArcLog.jpg failed to load in Footer.");
                }}
              />
              <span className="text-xl font-bold tracking-tight text-cream">The Acumen Arc</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Where creative strategy and technical expertise converge to deliver digital excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {MAIN_NAV_LINKS.map((item: NavItem) => (
                <li key={item.href}>
                  {/* Replaced Link component with a standard <a> tag */}
                  <a href={item.href} className="text-gray-400 hover:text-cream transition-colors text-sm">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Core Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Marketing PR</li>
              <li>App Development</li>
              <li>Video Production</li>
              <li>Advanced SEO</li>
              {/* <li>Email Marketing</li>
              <li>Social Media</li> */}
              {/* <li>24/7 Sales & Support</li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                <a href="mailto:info@acumenarc.com" className="text-gray-400 hover:text-cream transition-colors text-sm">
                  info@acumenarc.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Global HQ, Digital Tower, Suite 101
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-navy/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} The Acumen Arc. All rights reserved.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-cream transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-cream transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-cream transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;