"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#services" },
    { name: "Work", href: "#case-studies" },
    { name: "Philosophy", href: "#about" },
  ];

  const handleNav = (href: string) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      if (pathname === "/") {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all",
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* LOGO */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="flex items-center gap-2"
          >
            <img
              src="/assets/TheArc.gif"
              alt="The Acumen Arc"
              className="w-9 h-9 object-contain"
            />
            <span className="font-serif font-bold text-lg text-white">
              The Acumen Arc
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Button
              variant="secondary"
              onClick={() => router.push("/contactus")}
            >
              Let’s Talk
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-3xl font-serif text-white"
                  onClick={() => handleNav(link.href)}
                >
                  {link.name}
                </button>
              ))}

              <Button
                size="lg"
                onClick={() => handleNav("/contactus")}
              >
                Start a Project
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
