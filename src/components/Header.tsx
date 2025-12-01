"use client";

import React, { useState, useEffect } from 'react';
// FIX: Reverting Next.js imports to local shims for Canvas execution environment compatibility
import { Menu, X } from 'lucide-react'; 

// Mock implementation for Next.js hooks and types for Canvas execution
// NOTE: For your local Next.js project, revert this to: import { usePathname } from 'next/navigation';
const usePathname = () => {
    if (typeof window !== 'undefined') {
        // Return the current path for mock active link detection
        return window.location.pathname;
    }
    return '/'; 
};

// Mock structure for navigation links
const MAIN_NAV_LINKS = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "About Us", href: "/about" },
];
type NavItem = { title: string; href: string };

// Custom Link Component using standard <a> tag
// NOTE: For your local Next.js project, revert all instances of <CustomLink> to <Link> 
// and import Link from 'next/link';
const CustomLink: React.FC<React.PropsWithChildren<{ href: string; className?: string; onClick?: () => void }>> = ({ href, className, children, onClick }) => (
    <a href={href} className={className} onClick={onClick}>
        {children}
    </a>
);


/**
 * Replicates the main Pexels Header/Navigation area with dynamic links.
 */
const Header: React.FC = () => {
    // --- Existing States & Hooks (Transition Logic) ---
    const pathname = usePathname(); 
    const [isMounted, setIsMounted] = useState(false);
    const [showTransition, setShowTransition] = useState(true);
    const isInitialLoad = React.useRef(true);

    // --- NEW STATE: Mobile Menu Control ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    useEffect(() => {
        setIsMounted(true);

        // Transition Logic
        if (isInitialLoad.current) {
            const initialTimer = setTimeout(() => {
                setShowTransition(false);
            }, 1000);
            isInitialLoad.current = false;
            return () => clearTimeout(initialTimer);
        }
        else if (!isInitialLoad.current) {
            setShowTransition(true);

            const transitionTimer = setTimeout(() => {
                setShowTransition(false);
            }, 1000);

            return () => clearTimeout(transitionTimer);
        }
    }, [pathname]);


    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navItemClass = (href: string) =>
        `text-sm font-medium transition-colors duration-200 ${isMounted && pathname === href
            ? 'text-cream border-b-2 border-cream' // Active state
            : 'text-cream/70 hover:text-cream hover:border-b-2 hover:border-cream/50'
        } pb-1`;

    // Define the base inactive classes for SSR/unmounted state
    const ssrNavClass = 'text-sm font-medium transition-colors duration-200 text-cream/70 pb-1';

    // --- 1. Static Image Logo Component for the Header ---
    const ImageLogo: React.FC = () => (
        <img
            // UPDATED PATH: Using the local logo file
            src="/assets/TheArcLog.jpg"
            alt="The Acumen Arc Logo"
            // Set the size to fit the header
            className="w-8 h-8 object-contain rounded-md"
        />
    );
    // -------------------------------------------------------------------

    // --- 2. Full Screen GIF Component (now acting as a page transition) ---
    const FullScreenTransition: React.FC = () => (
        <div className={`fixed inset-0 z-[100] overflow-hidden 
                         flex items-center justify-center bg-cream/70 
                         backdrop-blur-sm 
                         transition-opacity duration-1000 ease-in-out 
                         ${showTransition ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

            {/* TRANSITION EFFECT: Zoom-Out only */}
            <img
                src="/assets/ENE.gif" // Path to your GIF file
                alt="Animated Logo Transition"
                // Size increased (w-80 h-80) and transition duration increased
                className={`block w-80 h-80 object-cover rounded-full shadow-2xl 
                            transition-transform duration-1000 ease-in-out 
                            ${showTransition ? 'scale-100' : 'scale-0'}`}
            />
        </div>
    );
    // -------------------------------------------------------------------


    return (
        <>
            {/* 1. Full Screen GIF Transition */}
            <FullScreenTransition />

            {/* 2. Header component sits on top (z-10) with its navy background */}
            <header className={`flex justify-between items-center py-4 px-6 md:px-10
                               border-b border-cream/20 sticky top-0 
                               bg-navy backdrop-blur-sm z-30 relative `}>

                {/* Logo / Company Name (The Acumen Arc) - Text is cream */}
                <CustomLink href="/" className="flex items-center space-x-2">
                    <ImageLogo />
                    <h1 className="text-xl font-bold tracking-tight text-cream">The Acumen Arc</h1>
                </CustomLink>

                {/* Desktop Navigation (visible sm:up) */}
                <nav className="hidden sm:flex items-center space-x-8 text-sm font-medium">
                    {MAIN_NAV_LINKS.map((item: NavItem) => (
                        <CustomLink
                            key={item.href}
                            href={item.href}
                            className={isMounted ? navItemClass(item.href) : ssrNavClass}
                        >
                            {item.title}
                        </CustomLink>
                    ))}
                    {/* The Contact button needs to use Link as well */}
                    <CustomLink href="/contact">
                        <button className="bg-cream text-navy px-4 py-2 rounded-lg font-semibold 
                                           hover:bg-cream/80 transition duration-150 shadow-md">
                            Get Started
                        </button>
                    </CustomLink>
                </nav>

                {/* Mobile Menu Toggle (visible sm:down) */}
                <button
                    className="sm:hidden text-cream p-2 rounded-lg hover:bg-cream/20 transition"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </header>

            {/* 3. Mobile Menu Drawer (Side Panel) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-navy z-40 shadow-2xl transform 
                            transition-transform duration-300 ease-in-out sm:hidden
                            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col p-6 space-y-6 pt-20"> {/* pt-20 to clear the main header */}
                    {MAIN_NAV_LINKS.map((item: NavItem) => (
                        <CustomLink
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-xl font-semibold p-2 rounded-lg transition-colors
                                        ${pathname === item.href 
                                            ? 'text-cream bg-cream/10' 
                                            : 'text-cream/80 hover:text-cream hover:bg-cream/5'}`
                            }
                        >
                            {item.title}
                        </CustomLink>
                    ))}
                    <CustomLink href="/contact">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full bg-cream text-navy px-4 py-3 rounded-lg font-bold mt-4 shadow-xl 
                                       hover:bg-cream/90 transition duration-150"
                        >
                            Get Started
                        </button>
                    </CustomLink>
                </div>
            </div>

            {/* 4. Backdrop for mobile menu (optional, but good practice) */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 sm:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Header;