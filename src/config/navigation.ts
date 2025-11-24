import { Code, BarChart3, Smartphone, Video, Mic, Palette, Users, Zap, type LucideIcon } from 'lucide-react';

// 1. Interface for defining all main navigation links
export interface NavItem {
  title: string;
  href: string;
}

// 2. Interface for services (used for the Category Bar and Homepage Cards)
export interface ServiceCategory {
  title: string;
  href: string;
  icon: LucideIcon;
  color: string; // Tailwind class for styling
  featured?: boolean;
  description: string;
}

// --- Dynamic Navigation Links (Used in the main Header) ---
export const MAIN_NAV_LINKS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Case Studies', href: '/portfolio' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

// --- Dynamic Service Categories (Used in the horizontal Category Bar and Homepage) ---
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { title: 'All Services', href: '/services', icon: Zap, color: 'bg-gray-800', description: 'Explore all our core offerings.' },
  {
    title: 'Web Development',
    href: '/services/web',
    icon: Code,
    color: 'bg-indigo-600',
    description: 'Bespoke, high-performance websites built with Next.js and secure APIs.',
  },
  {
    title: 'Marketing & PR',
    href: '/services/marketing',
    icon: BarChart3,
    color: 'bg-rose-600',
    description: 'Data-driven campaigns to elevate your brand presence and market authority.',
    featured: true, // Used for the large right card on the home page
  },
  {
    title: 'App Development',
    href: '/services/app',
    icon: Smartphone,
    color: 'bg-cyan-600',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    title: 'Video Shoots',
    href: '/services/video',
    icon: Video,
    color: 'bg-green-600',
    description: 'High-definition video production for commercials, corporate, and social media.',
  },
  {
    title: 'Podcast Production',
    href: '/services/podcast',
    icon: Mic,
    color: 'bg-amber-600',
    description: 'From recording to final mastering, we handle full-service audio production.',
  },
  {
    title: 'Brand Identity',
    href: '/services/branding',
    icon: Palette,
    color: 'bg-fuchsia-600',
    description: 'Crafting compelling logos, style guides, and visual assets that resonate.',
  },
];