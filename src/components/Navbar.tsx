"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Expertise", href: "#services" },
        { name: "Portfolio", href: "#case-studies" },
        { name: "Philosophy", href: "#about" },
    ];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl py-3 border-b border-acumen-primary/20"
                    : "py-3"
            )}
        >
            <div className="container mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group z-50" onClick={() => scrollToSection("home")}>
                        {/* FIX: Using acumen-primary for a branded logo background */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold">
                            <img src="/assets/TheArc.gif" alt="Acumen Logo" className="w-10 h-10" /> 
                        </div>
                        {/* FIX: Using acumen-primary for text */}
                        <span className="font-serif text-lg font-bold tracking-tight text-acumen-primary">
                            The Acumen Arc
                        </span>
                    </a>

                    {/* Desktop Nav - Applied dark purple border */}
                    <div className="hidden md:flex items-center gap-1 p-1 bg-white/50 backdrop-blur-lg rounded-full border border-acumen-secondary">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                // FIX: Updated colors to use acumen-light for links, acumen-primary/10 for hover bg
                                className="px-5 py-2 text-sm font-medium text-acumen-light rounded-full hover:bg-acumen-primary/10 hover:text-acumen-secondary transition"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href.substring(1));
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="secondary" // Assuming primary button is dark purple (acumen-primary)
                            size="md"
                            onClick={() => scrollToSection("contact")}
                        >
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        // FIX: Updated hover background and icon colors
                        className="md:hidden p-2 rounded-full hover:bg-acumen-primary/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-acumen-secondary" />
                        ) : (
                            <Menu className="w-6 h-6 text-acumen-secondary" />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={cn(
                            "fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-300",
                            isMobileMenuOpen
                                ? "opacity-100 visible"
                                : "opacity-0 invisible pointer-events-none"
                        )}
                    >
                        <div className="flex flex-col items-center gap-6 w-full px-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    // FIX: Updated text colors for mobile links
                                    className="text-2xl font-serif font-medium text-acumen-secondary hover:text-acumen-primary transition-colors"
                                    onClick={() => scrollToSection(link.href.substring(1))}
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* FIX: Updated divider color */}
                            <div className="h-px w-12 bg-acumen-primary/20 my-4" />

                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full max-w-xs"
                                onClick={() => scrollToSection("contact")}
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