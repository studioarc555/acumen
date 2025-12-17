"use client";

import React, { useRef } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowDown,
  PenTool,
  ShoppingCart,
  Smartphone,
  Database,
  Cloud,
  Globe
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
      <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-acumen-primary selection:text-white">
          <Navbar />

        <ServiceContent service={service} />
      </div>
  );
}

function ServiceContent({ service }: { service: typeof SERVICES_DATA[0] }) {
  const containerRef = useRef(null);
  const Icon = service.icon;

  // --- PARALLAX HERO LOGIC (Scoped only to this component) ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative">

      {/* --- HERO SECTION --- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />

          {/* NAVBAR PROTECTION SCRIM */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

          {/* General Image Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
        </motion.div>

        {/* Floating Hero Text */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-32 px-4 md:px-10 container mx-auto z-20"
        >
          <div className="pt-24">
            <Link
              href="/#services"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors w-fit group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mr-3 backdrop-blur-md group-hover:bg-white/10">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest shadow-black/50 drop-shadow-md">Back to Services</span>
            </Link>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
              {service.title}
            </h1>

            <div className="flex items-center gap-6 text-white/90 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span className="text-sm font-bold uppercase tracking-wider drop-shadow-md">Available Now</span>
              </div>
              <div className="h-4 w-[1px] bg-white/30" />
              <span className="text-sm font-bold uppercase tracking-wider drop-shadow-md">Scroll to Explore</span>
            </div>
          </div>
        </motion.div>
      </div>


      {/* --- CONTENT SHEET --- */}
      <div className="relative z-10 bg-[#FAFAFA] rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 pt-24 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

        <main className="container mx-auto px-4 md:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

            {/* Sidebar */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-32 space-y-10">
                <div className="w-20 h-20 bg-acumen-secondary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-acumen-secondary/30">
                  <Icon className="w-10 h-10" />
                </div>

                <div className="space-y-8 py-8 border-t border-b border-slate-200">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</span>
                    <span className="font-serif text-xl text-acumen-secondary">Digital Product</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Timeline</span>
                    <span className="font-serif text-xl text-acumen-secondary">4-8 Weeks</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Deliverables</span>
                    <span className="font-serif text-xl text-acumen-secondary">Design & Code</span>
                  </div>
                </div>

                <Link href="/contactus">
                  <Button className="w-full bg-acumen-secondary hover:bg-acumen-primary text-white rounded-full py-7 font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                    Start Project
                  </Button>
                </Link>
              </div>
            </aside>


            {/* Feed */}
            <div className="flex-1">
              <div className="mb-20 max-w-3xl">
                <p className="text-2xl md:text-4xl font-serif leading-tight text-acumen-secondary mb-8">
                  {service.description}
                </p>
                <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                  <p>{service.longDescription}</p>
                  <p>
                    We approach {service.title.toLowerCase()} with a mindset of "Step Out"—breaking free from conventional patterns to deliver something truly unique.
                  </p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mb-24">
                <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-6">
                  <h3 className="font-serif text-3xl font-bold text-acumen-secondary">
                    Core Capabilities
                  </h3>
                  <ArrowDown className="w-6 h-6 text-acumen-primary animate-bounce" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {service.features.map((feature, idx) => {
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: idx * 0.1
                        }}
                        className={cn(
                          "group relative overflow-hidden bg-white rounded-2xl border border-slate-100 shadow-[0_5px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-acumen-primary/20 transition-all duration-500 h-[280px]",
                        )}
                      >
                        <div className="absolute inset-0 bg-acumen-primary translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0" />

                        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg bg-acumen-secondary flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-acumen-primary group-hover:scale-110 shadow-md">
                              {idx === 0 ? <PenTool className="w-5 h-5" /> :
                                idx === 1 ? <ShoppingCart className="w-5 h-5" /> :
                                  idx === 2 ? <Smartphone className="w-5 h-5" /> :
                                    idx === 3 ? <Database className="w-5 h-5" /> :
                                      idx === 4 ? <Cloud className="w-5 h-5" /> :
                                        <Globe className="w-5 h-5" />
                              }
                            </div>
                            <span className="font-mono text-xs font-bold text-slate-300 transition-colors duration-300 group-hover:text-white/40">
                              0{idx + 1}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-bold text-lg text-acumen-secondary mb-2 transition-colors duration-300 group-hover:text-white leading-tight">
                              {feature}
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-white/80 line-clamp-3">
                              Comprehensive {feature.toLowerCase()} tailored to your specific business requirements.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}