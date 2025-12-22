"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname() || '/';
    const router = useRouter() || { push: (href: string) => window.location.href = href };

    const handleNavigation = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href.startsWith('#')) {
            const sectionId = href.substring(1);

            if (pathname === '/') {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                router.push(`/${href}`);
            }
        } else {
            router.push(href);
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Expertise", href: "#services" },
        { name: "Work", href: "#case-studies" },
        { name: "Philosophy", href: "#about" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-30 transition-all duration-300 w-full",
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl py-3 border-b border-acumen-primary/20"
                    : "py-3"
            )}
        >
            <div className="container mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50" onClick={(e) => { e.preventDefault(); handleNavigation("#home"); }}>
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold">
                            <span className="text-xl font-serif">
                                <img src="/assets/TheArc.gif" alt="The Arc Logo" className="w-full h-full object-contain" />
                            </span>
                        </div>
                        <span className="font-serif text-lg font-bold tracking-tight text-acumen-primary">
                            The Acumen Arc
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 p-1 bg-white/50 backdrop-blur-lg rounded-full border border-acumen-secondary/20">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavigation(link.href)}
                                className="px-5 py-2 text-sm font-medium text-acumen-light rounded-full hover:bg-acumen-primary/10 hover:text-acumen-secondary transition"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="secondary"
                            size="md"
                            onClick={() => handleNavigation("/contactus")}
                        >
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-acumen-primary/10 transition-colors relative z-[60]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-acumen-secondary" />
                        ) : (
                            <Menu className="w-6 h-6 text-acumen-secondary" />
                        )}
                    </button>

                    {/* Mobile Menu Overlay */}
                    <div
                        className={cn(
                            "fixed inset-0 bg-white/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center transition-all duration-300 h-screen w-screen",
                            isMobileMenuOpen
                                ? "opacity-100 visible"
                                : "opacity-0 invisible pointer-events-none"
                        )}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex flex-col items-center gap-8 w-full px-8 pb-20"> {/* Added pb-20 for bottom spacing */}
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    className="text-3xl font-serif font-medium text-acumen-secondary hover:text-acumen-primary transition-colors"
                                    onClick={() => handleNavigation(link.href)}
                                >
                                    {link.name}
                                </button>
                            ))}

                            <div className="h-px w-24 bg-acumen-primary/20 my-6" />

                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full max-w-xs shadow-lg"
                                onClick={() => handleNavigation("/contactus")}
                            >
                                Start Your Project
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;