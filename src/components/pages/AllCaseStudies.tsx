"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Search,
} from "lucide-react";
import Navbar from "../Navbar";
import { CTA } from "../CTA";
import Footer from "../Footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/Button";

const CATEGORIES = [
  "All",
  "Branding",
  "Web Development",
  "Marketing",
  "Strategy",
  "App Development",
  "Search Engine Optimization",
];

// ✅ RESTORED PROJECT DATA (THIS WAS THE ISSUE)
const PROJECTS = [
  {
    id: 1,
    client: "DSenergize",
    title: "Solar IoT Analytics Platform",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
    stat: "Max Energy Gen",
    desc: "Development of a cloud-based energy management dashboard allowing real-time remote monitoring."
  },
  {
    id: 2,
    client: "REQX",
    title: "Global IT Talent Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    stat: "Top-Tier Vetting",
    desc: "Corporate digital interface connecting businesses with executive IT talent."
  },
  {
    id: 3,
    client: "ShapeIQ",
    title: "Sustainable MedTech Launch",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    stat: "90% Less Waste",
    desc: "Market-entry strategy for a revolutionary recycled MedTech product."
  },
  {
    id: 4,
    client: "KrishiGRO",
    title: "Eco-Agri Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1074&auto=format&fit=crop",
    stat: "Zero Emission Tech",
    desc: "Brand positioning for an electric farming mobility solution."
  },
  {
    id: 5,
    client: "SLV",
    title: "Global Consultancy Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    stat: "5+ Sector Reach",
    desc: "Corporate website showcasing international market entry services."
  },
  {
    id: 6,
    client: "UMPL",
    title: "EV Ecosystem Visibility",
    category: "Search Engine Optimization",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    stat: "Net Zero Aligned",
    desc: "SEO strategy positioning EV retrofit solutions in India."
  },
  {
    id: 7,
    client: "NFI",
    title: "AI Analytics SaaS Platform",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    stat: "Real-Time Processing",
    desc: "Drag-and-drop AI analytics platform for real-time data visualization."
  },
];

const AllCaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0618] via-[#120726] to-[#090411] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className={cn(
          "relative w-full rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-1000",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="absolute inset-0">
            <img
              src="/assets/portfoliobg.jpg"
              className="w-full h-full object-cover"
              alt="Portfolio"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 px-8 py-28 md:px-20 max-w-4xl">
            <span className="inline-block mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/70 border border-white/20 px-3 py-1 rounded-md bg-white/10">
              Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Hall of Impact
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Explore how we help brands scale through strategy, technology, and design.
            </p>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-20 z-30 bg-white/5 backdrop-blur-xl border-y border-white/10 py-4 mb-14">
        <div className="container mx-auto px-6 flex gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap",
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
            <Link
              href={`/portfolio/${item.id}`}
              key={item.id}
              className="group relative h-[460px] rounded-[2rem] overflow-hidden bg-black shadow-xl animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-8 z-10 w-full">
                <span className="text-xs uppercase tracking-widest text-purple-300">
                  {item.category}
                </span>
                <h3 className="font-serif text-3xl font-bold mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mb-6 line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center border-t border-white/20 pt-4">
                  <span className="text-sm font-bold">{item.stat}</span>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition">
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-white/60 mb-4">No projects found.</p>
            <Button onClick={() => setActiveCategory("All")}>
              View all projects
            </Button>
          </div>
        )}
      </div>

      <CTA />
      <Footer />
    </main>
  );
};

export default AllCaseStudies;
