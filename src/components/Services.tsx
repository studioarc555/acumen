"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Detect active card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        }),
      { threshold: 0.6 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Handle scroll buttons state
  const updateButtons = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth <
        container.scrollWidth - 10
    );
  };

  useEffect(() => {
    updateButtons();
    containerRef.current?.addEventListener("scroll", updateButtons);
    return () =>
      containerRef.current?.removeEventListener("scroll", updateButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="relative bg-[#0F0B1D] py-28 overflow-hidden">
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

        {/* NAV BUTTONS */}
        <div className="absolute right-6 top-40 z-20 hidden md:flex gap-3">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur
                         border border-white/20 text-white
                         hover:bg-white/20 transition"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur
                         border border-white/20 text-white
                         hover:bg-white/20 transition"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
            </button>
          )}
        </div>

        {/* CARDS */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-hidden pb-8"
        >
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={idx}
   
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[520px]"
            >
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
            </motion.div>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-3">
          {SERVICES_DATA.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === activeIndex
                  ? "w-10 bg-purple-500"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
