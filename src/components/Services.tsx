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
const WHEEL_STEP = 140;
const TOUCH_STEP = 120;

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Wheel
  const wheelAccumulation = useRef(0);

  // Touch
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  /** ---------- TRACKPAD / MOUSE ---------- */
  const handleWheel = (e: {
    deltaX: number;
    deltaY: number;
    preventDefault: () => void;
  }) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    e.preventDefault();

    wheelAccumulation.current += e.deltaX;
    const steps = Math.trunc(wheelAccumulation.current / WHEEL_STEP);
    if (!steps) return;

    setActiveIndex((prev) =>
      Math.max(0, Math.min(prev + steps, SERVICES_DATA.length - 1))
    );

    wheelAccumulation.current -= steps * WHEEL_STEP;
  };

  /** ---------- TOUCH (MOBILE) ---------- */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current =
      touchStartX.current - e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const steps = Math.trunc(touchDeltaX.current / TOUCH_STEP);
    if (!steps) return;

    setActiveIndex((prev) =>
      Math.max(0, Math.min(prev + steps, SERVICES_DATA.length - 1))
    );

    touchDeltaX.current = 0;
  };

  return (
    <section
      id="services"
      className="relative bg-[#0F0B1D] py-36 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute -top-44 right-[-22%] w-[780px] h-[780px] bg-purple-600/25 blur-[170px]" />
      <div className="absolute bottom-[-42%] left-[-22%] w-[700px] h-[700px] bg-indigo-600/20 blur-[170px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-24 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4">
            Signature Services
          </h2>
        </div>

        {/* CARD AREA */}
        <div
          className="relative h-[620px] flex items-center justify-center"
          onWheel={handleWheel}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
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

        {/* DOTS — now safely below */}
        <div className="mt-24 flex justify-center relative z-20">
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
