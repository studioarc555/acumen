"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import { SERVICES_DATA } from "@/lib/services-data";

// --- Utility: Custom Smooth Scroll Function ---
const scrollToTarget = (
  container: HTMLElement | Window,
  targetPos: number,
  direction: "horizontal" | "vertical",
  duration: number = 500 // Reduced default duration for faster transition
) => {
  const startPos =
    direction === "horizontal"
      ? (container as HTMLElement).scrollLeft
      : container instanceof Window
      ? window.scrollY
      : (container as HTMLElement).scrollTop;
  const distance = targetPos - startPos;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);
    const run = ease(Math.min(timeElapsed / duration, 1));
    const nextPos = startPos + distance * run;

    if (direction === "horizontal") {
      (container as HTMLElement).scrollTo({ left: nextPos });
    } else {
      container.scrollTo({ top: nextPos });
    }

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAutoScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = SERVICES_DATA;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAutoScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex((card) => card === entry.target);
            if (index !== -1) {
              setActiveIndex((prev) => (prev !== index ? index : prev));
            }
          }
        });
      },
      { threshold: 0.6 }
    );
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, [services]);

  const handleDotClick = (idx: number) => {
    const card = cardsRef.current[idx];
    const container = containerRef.current;
    if (!card || !container) return;

    isAutoScrolling.current = true;
    
    // Calculate distance logic: if jumping more than 2 cards, make it faster
    const jumpDistance = Math.abs(idx - activeIndex);
    const scrollSpeed = jumpDistance > 2 ? 300 : 500; // Faster speed for long jumps

    setActiveIndex(idx);

    if (isMobile) {
      const rect = card.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const stickyOffset = 80 + idx * 10;
      const targetY = rect.top + scrollTop - stickyOffset - 20;
      scrollToTarget(window, targetY, "vertical", scrollSpeed);
    } else {
      const containerWidth = container.clientWidth;
      const cardWidth = card.clientWidth;
      const cardLeft = card.offsetLeft;
      const targetX = cardLeft - containerWidth / 2 + cardWidth / 2;
      scrollToTarget(container, targetX, "horizontal", scrollSpeed);
    }

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, scrollSpeed + 100);
  };

  return (
    <section id="services" className="bg-white relative z-0 overflow-visible">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-6 gap-4 md:gap-8 pt-8">
          <div className="max-w-2xl">
            <span className="text-sm md:text-lg font-bold text-acumen-primary uppercase tracking-widest">
              Our Expertise <span className="font-serif"> & </span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-acumen-primary mt-2">
              Signature Services
            </h2>
          </div>
        </div>

        {/* LAYOUT WRAPPER */}
        <div className="flex flex-row md:flex-col gap-4 relative">
          <div
            ref={containerRef}
            className={`
              flex-1 flex flex-col md:flex-row 
              md:overflow-x-auto md:snap-x md:snap-mandatory 
              gap-6 py-20 px-6 md:px-12
              no-scrollbar relative
            `}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              perspective: "1000px"
            }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                ref={(el) => { cardsRef.current[idx] = el; }}
                initial={{ opacity: 0, y: 50, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                style={{
                  top: `${80 + idx * 10}px`,
                  left: isMobile ? 0 : `${idx * 40}px`,
                  zIndex: idx + 1,
                  willChange: "transform",
                }}
                className={`
                  w-full h-[300px] 
                  md:min-w-[550px] md:w-[550px] md:h-[400px] md:flex-shrink-0
                  sticky md:snap-center
                  group relative flex flex-col justify-between
                  p-0 rounded-[2rem]
                  bg-[#F9F5FF]
                  border-[3px] border-acumen-primary/10 hover:border-acumen-primary/50
                  transition-colors duration-300
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_-10px_rgba(88,28,135,0.15)]
                  cursor-pointer overflow-hidden
                `}
                whileHover={{
                  y: 0, // Changed from -12 to 0 to prevent raising out
                  scale: 1.02,
                  zIndex: idx + 1, // Keep original z-index to stay in stack
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Link to Separate Page */}
                <Link href={`/services/${service.slug}`} className="block w-full h-full p-6 md:p-8">
                  
                  {/* DECORATIVE BLOB */}
                  <motion.div
                    className="absolute -right-12 -top-12 w-40 h-40 bg-acumen-primary/5 rounded-full blur-3xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* CONTENT WRAPPER */}
                  <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none"> 
                    
                    <div>
                      {/* ICON */}
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-acumen-primary transition-all duration-300"
                        whileHover={{ rotate: -5, scale: 1.05 }}
                        transition={{ type: "tween", duration: 0.3 }}
                      >
                        <service.icon className="w-6 h-6 md:w-8 md:h-8 text-acumen-primary group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      {/* TEXT */}
                      <div className="group-hover:translate-x-1 transition-transform duration-300 ease-out">
                        <h3 className="font-serif text-xl md:text-3xl font-semibold text-acumen-secondary mb-3 md:mb-4">
                          {service.title}
                        </h3>
                        <p className="text-acumen-light text-sm md:text-lg leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center text-xs md:text-sm font-bold tracking-wide text-acumen-primary uppercase mt-auto">
                      <span className="group-hover:mr-2 transition-all duration-300">
                        Learn more
                      </span>
                      <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="hidden md:block min-w-[50px] flex-shrink-0" />
          </div>

          {/* PAGINATION DOTS */}
          <div className="flex-shrink-0 flex flex-col justify-center sticky top-[30vh] h-fit ml-2 md:flex-row md:static md:w-full md:mt-4 md:ml-0 md:gap-2 md:items-center">
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full md:bg-transparent md:p-0">
              {services.map((_, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`
                    rounded-full cursor-pointer transition-colors duration-300
                    ${activeIndex === idx ? "bg-acumen-primary" : "bg-acumen-primary/20 hover:bg-acumen-primary/40"}
                    w-1.5 h-6 ${activeIndex === idx ? "h-8" : "h-6"}
                    md:h-2 md:${activeIndex === idx ? "w-8" : "w-2"}
                  `}
                  layout
                  transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;