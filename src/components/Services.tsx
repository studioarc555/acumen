"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";

// Geometry (UNCHANGED)
const RADIUS = 380;
const ANGLE_STEP = 21;

// Swipe tuning
const WHEEL_STEP = 140; // distance for one card shift

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelAccumulation = useRef(0);

  const handleWheel = (e: {
    deltaX: number;
    deltaY: number;
    preventDefault: () => void;
  }) => {
    // Ignore vertical scrolling
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    e.preventDefault();

    // Accumulate horizontal delta
    wheelAccumulation.current += e.deltaX;

    // Determine how many steps to move
    const steps = Math.trunc(wheelAccumulation.current / WHEEL_STEP);

    if (steps === 0) return;

    setActiveIndex((prev) => {
      let next = prev + steps;

      // Clamp within bounds
      next = Math.max(0, Math.min(next, SERVICES_DATA.length - 1));

      return next;
    });

    // Remove consumed delta
    wheelAccumulation.current -= steps * WHEEL_STEP;
  };

  return (
    <section
      id="services"
      className="relative bg-[#0F0B1D] py-34 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute -top-44 right-[-22%] w-[780px] h-[780px] bg-purple-600/25 blur-[170px]" />
      <div className="absolute bottom-[-42%] left-[-22%] w-[700px] h-[700px] bg-indigo-600/20 blur-[170px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-22 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4">
            Signature Services
          </h2>
        </div>

        {/* CENTERED SEMI-CIRCLE */}
        <div
          className="
            relative
            h-[580px]
            flex
            items-center
            justify-center
          "
          onWheel={handleWheel}
        >
          {SERVICES_DATA.map((service, idx) => {
            const offset = idx - activeIndex;
            const angle = offset * ANGLE_STEP;
            const rad = (angle * Math.PI) / 180;

            const x = Math.sin(rad) * RADIUS;
            const y = Math.abs(1 - Math.cos(rad)) * 100;

            return (
              <motion.div
                key={idx}
                className="absolute will-change-transform"
                animate={{
                  x,
                  y,
                  scale: idx === activeIndex ? 1 : 0.945,
                  opacity: Math.abs(offset) > 4 ? 0 : 1,
                  zIndex: 100 - Math.abs(offset),
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                {/* CARD */}
                <div className="w-[380px] sm:w-[420px] md:w-[660px]">
                  <Link href={`/services/${service.slug}`}>
                    <div
                      className="
                        h-[390px]
                        sm:h-[430px]
                        md:h-[520px]
                        rounded-[2.75rem]
                        p-11
                        bg-white/5
                        border border-white/10
                        backdrop-blur-xl
                        hover:border-white/30
                        hover:shadow-[0_45px_100px_-30px_rgba(0,0,0,0.85)]
                        transition
                        flex flex-col justify-between
                      "
                    >
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-9">
                          <service.icon className="w-8 h-8 text-purple-400" />
                        </div>

                        <h3 className="font-serif text-2xl md:text-4xl font-semibold text-white mb-5">
                          {service.title}
                        </h3>

                        <p className="text-white/70 text-base md:text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-purple-400 uppercase tracking-widest mt-9">
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
        <div className="mt-18 flex justify-center">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur px-4 py-3 rounded-full">
            {SERVICES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-12 h-2 bg-purple-500"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
