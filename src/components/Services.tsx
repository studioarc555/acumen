"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";

const RADIUS = 260;
const ANGLE_STEP = 18;

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeLock = useRef(false);

  const handleWheel = (e: { deltaX: number; deltaY: number; preventDefault: () => void; }) => {
    // 🛑 ignore vertical scroll
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    e.preventDefault();

    // prevent rapid swipes
    if (swipeLock.current) return;
    swipeLock.current = true;

    // 👉 swipe left (two-finger left)
    if (e.deltaX > 0) {
      setActiveIndex((prev) =>
        Math.min(prev + 1, SERVICES_DATA.length - 1)
      );
    }

    // 👈 swipe right (two-finger right)
    if (e.deltaX < 0) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      swipeLock.current = false;
    }, 600); // sync with animation
  };

  return (
    <section
      id="services"
      className="relative bg-[#0F0B1D] py-28 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 right-[-20%] w-[700px] h-[700px] bg-purple-600/25 blur-[160px]" />
      <div className="absolute bottom-[-40%] left-[-20%] w-[600px] h-[600px] bg-indigo-600/20 blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3">
            Signature Services
          </h2>
        </div>

        {/* SEMI-CIRCULAR STACK (TRACKPAD SWIPE) */}
        <div
          className="relative h-[460px] flex items-center justify-center"
          onWheel={handleWheel}
        >
          {SERVICES_DATA.map((service, idx) => {
            const offset = idx - activeIndex;
            const angle = offset * ANGLE_STEP;
            const rad = (angle * Math.PI) / 180;

            const x = Math.sin(rad) * RADIUS;
            const y = Math.abs(1 - Math.cos(rad)) * 80;

            return (
              <motion.div
                key={idx}
                className="absolute"
                animate={{
                  x,
                  y,
                  scale: idx === activeIndex ? 1 : 0.9,
                  opacity: Math.abs(offset) > 4 ? 0 : 1,
                  zIndex: 100 - Math.abs(offset),
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <div className="w-[320px] md:w-[520px]">
                  <Link href={`/services/${service.slug}`}>
                    <div
                      className="
                        h-[340px] md:h-[420px]
                        rounded-[2rem]
                        p-8
                        bg-white/5
                        border border-white/10
                        backdrop-blur-xl
                        hover:border-white/30
                        hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]
                        transition
                        flex flex-col justify-between
                      "
                    >
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                          <service.icon className="w-7 h-7 text-purple-400" />
                        </div>

                        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
                          {service.title}
                        </h3>

                        <p className="text-white/70 text-sm md:text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-purple-400 uppercase tracking-widest mt-6">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOT PAGINATION */}
        <div className="mt-14 flex justify-center">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur px-3 py-2 rounded-full">
            {SERVICES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-10 h-2 bg-purple-500"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
