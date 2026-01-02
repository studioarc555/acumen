"use client";

import React from "react";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Users,
  Zap,
  Heart,
  Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";

// --- DATA ---
const PERKS = [
  { icon: Zap, title: "High Impact Work", desc: "Work on visionary projects that reshape industries, not just maintain them." },
  { icon: Users, title: "Collaborative Culture", desc: "A flat hierarchy where the best idea wins, regardless of your title." },
  { icon: Target, title: "Continuous Growth", desc: "Budget for courses, conferences, and personal development." },
  { icon: Heart, title: "Holistic Wellness", desc: "Flexible hours and remote-friendly options to protect balance." }
];

const OPEN_POSITIONS = [
  {
    id: 1,
    role: "Senior UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / New Delhi",
    link: "mailto:careers@theacumenarc.com?subject=Application: Senior UI/UX Designer"
  },
  {
    id: 2,
    role: "Frontend Developer (React/Next.js)",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    link: "mailto:careers@theacumenarc.com?subject=Application: Frontend Developer"
  },
  {
    id: 3,
    role: "Digital Strategy Lead",
    department: "Strategy",
    type: "Contract / Full-time",
    location: "New Delhi",
    link: "mailto:careers@theacumenarc.com?subject=Application: Digital Strategy Lead"
  }
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0618] via-[#120726] to-[#090411]
                     text-white overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 text-center overflow-hidden">
        <div className="absolute -top-1/3 right-[-15%] w-[700px] h-[700px] bg-purple-900/40 blur-[160px]" />
        <div className="absolute -bottom-1/3 left-[-20%] w-[600px] h-[600px] bg-indigo-900/30 blur-[160px]" />

        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase
                           bg-white/10 px-4 py-1 rounded-full border border-white/20">
            Careers
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build the <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent italic">
              extraordinary
            </span>{" "}
            with us.
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl mb-12">
            Join visionaries, builders, and strategists shaping the next era of digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-gradient-to-r from-purple-600 to-indigo-600
                         text-white shadow-[0_30px_80px_-25px_rgba(139,92,246,0.8)]"
              onClick={() => document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Openings
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((perk, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur
                         border border-white/10 hover:border-white/30
                         transition hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <perk.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {perk.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="positions" className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Open Positions
              </h2>
              <p className="text-white/70 max-w-lg">
                Find the role that aligns with your expertise and ambition.
              </p>
            </div>
            <div className="text-sm font-semibold bg-white/10 px-4 py-2 rounded-full">
              {OPEN_POSITIONS.length} Roles Available
            </div>
          </div>

          <div className="grid gap-6">
            {OPEN_POSITIONS.map((job) => (
              <a
                key={job.id}
                href={job.link}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10
                           hover:border-purple-400 transition
                           flex flex-col md:flex-row justify-between gap-6"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-purple-400 bg-white/10 px-3 py-1 rounded-full">
                    {job.department}
                  </span>

                  <h3 className="font-serif text-xl md:text-2xl font-bold mt-4 mb-3 group-hover:text-purple-300">
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-purple-400 font-semibold
                                group-hover:translate-x-2 transition-transform">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* GENERAL CTA */}
          <div className="mt-20 p-12 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute -top-20 right-[-20%] w-80 h-80 bg-purple-600/20 blur-[120px]" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Don’t see your perfect role?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                We’re always excited to meet exceptional talent.
              </p>
              <a href="mailto:careers@theacumenarc.com">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600
                             text-white shadow-lg"
                >
                  Email Your Portfolio
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
