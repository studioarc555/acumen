"use client";

import {
  Linkedin,
  Mail,
  ArrowRight,
  Facebook,
  Instagram,
  Loader2,
  Check,
} from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const companyLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/allcasestudies" },
    { name: "Contact", href: "/contactus" },
    { name: "Careers", href: "/careers" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-[#0F0B1D] border-t border-white/10 pt-20 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/assets/TheArc.gif"
                alt="Acumen Logo"
                className="w-10 h-10"
              />
              <span className="font-serif text-xl font-bold text-white">
                The Acumen Arc
              </span>
            </a>

            <p className="text-white/70 mb-8 max-w-xs leading-relaxed">
              Strategy That Moves. Creativity That Wins.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.linkedin.com/company/theacumenarc/",
                  icon: Linkedin,
                },
                {
                  href: "https://www.instagram.com/theacumenarc",
                  icon: Instagram,
                },
                { href: "https://facebook.com", icon: Facebook },
                { href: "mailto:syedah@theacumenarc.com", icon: Mail },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 hover:bg-acumen-primary hover:text-white transition-all"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-white/70">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-acumen-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-white/70">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-acumen-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status !== "idle"}
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-acumen-primary"
                  required
                />
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    status === "success"
                      ? "bg-green-500 text-white"
                      : "bg-acumen-primary text-white hover:bg-acumen-secondary"
                  }`}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === "success" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/50">
          <p>© {currentYear} The Acumen Arc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
