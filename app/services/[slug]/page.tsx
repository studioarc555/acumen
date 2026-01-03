"use client";

import React, { useRef } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  PenTool,
  ShoppingCart,
  Smartphone,
  Database,
  Cloud,
  Globe,
  FolderOpen
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/services-data";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="bg-[#0F0B1D] min-h-screen font-sans selection:bg-acumen-primary selection:text-white">
      <Navbar />
      <ServiceContent service={service} />
      <Footer />
    </div>
  );
}

function ServiceContent({ service }: { service: typeof SERVICES_DATA[0] }) {
  const containerRef = useRef(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  /* ---------------- PARALLAX LOGIC (UNCHANGED) ---------------- */
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(heroProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(heroProgress, [0, 0.8], [1, 0.5]);
  const textY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);

  const { scrollYProgress: folderProgress } = useScroll({
    target: folderRef,
    offset: ["start 100%", "center 50%"],
  });

  const spring = { stiffness: 100, damping: 20 };

  const y1 = useSpring(useTransform(folderProgress, [0, 1], [600, 0]), spring);
  const x1 = useSpring(useTransform(folderProgress, [0, 1], [50, 0]), spring);
  const r1 = useSpring(useTransform(folderProgress, [0, 1], [-5, 0]), spring);

  const y2 = useSpring(useTransform(folderProgress, [0, 1], [700, 0]), spring);
  const x2 = useSpring(useTransform(folderProgress, [0, 1], [-50, 0]), spring);
  const r2 = useSpring(useTransform(folderProgress, [0, 1], [2, 0]), spring);

  const y3 = useSpring(useTransform(folderProgress, [0, 1], [800, 0]), spring);
  const x3 = useSpring(useTransform(folderProgress, [0, 1], [25, 0]), spring);
  const r3 = useSpring(useTransform(folderProgress, [0, 1], [-2, 0]), spring);

  const y4 = useSpring(useTransform(folderProgress, [0, 1], [900, 0]), spring);
  const x4 = useSpring(useTransform(folderProgress, [0, 1], [-25, 0]), spring);
  const r4 = useSpring(useTransform(folderProgress, [0, 1], [5, 0]), spring);

  const scaleCard = useTransform(folderProgress, [0, 0.8], [0.5, 1]);
  const opacityCard = useTransform(folderProgress, [0, 0.2], [0, 1]);

  const displayFeatures = service.features.slice(0, 4);

  const getIcon = (i: number) =>
    [<PenTool />, <ShoppingCart />, <Smartphone />, <Database />, <Cloud />][i] ??
    <Globe />;

  return (
    <div ref={containerRef} className="relative">

      {/* ---------------- HERO ---------------- */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <img src={service.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex items-end pb-32 z-20"
        >
          <div className="container px-6">
            <Link
              href="/#services"
              className="inline-flex items-center text-white/80 hover:text-white mb-10"
            >
              <ArrowLeft className="mr-2" /> Back to Services
            </Link>

            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white drop-shadow-xl">
              {service.title}
            </h1>
          </div>
        </motion.div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative bg-[#120F24] rounded-t-[4rem] -mt-20 pt-24 shadow-[0_-30px_80px_rgba(0,0,0,0.7)]">
        <main className="container mx-auto px-6 pb-24">

          <div className="flex gap-16">

            {/* ---------------- LEFT SIDEBAR ---------------- */}
            <aside className="hidden lg:block w-1/5">
              <div className="sticky top-32 space-y-10">
                <div className="w-20 h-20 bg-acumen-secondary rounded-2xl flex items-center justify-center shadow-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* METADATA (DELIVERABLES RESTORED) */}
                <div className="space-y-8 py-8 border-t border-white/10">
                  <div>
                    <p className="text-xs uppercase text-white/40">Category</p>
                    <p className="text-white font-serif text-xl">
                      Digital Product
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-white/40">Timeline</p>
                    <p className="text-white font-serif text-xl">
                      4–8 Weeks
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-white/40">
                      Deliverables
                    </p>
                    <p className="text-white font-serif text-xl">
                      Design & Code
                    </p>
                  </div>
                </div>

                {/* START PROJECT (UNCHANGED) */}
                <Link href="/contactus">
                  <Button className="w-full bg-acumen-secondary hover:bg-acumen-primary text-white py-7 rounded-full text-lg shadow-[0_0_40px_rgba(99,102,241,0.35)]">
                    Start Project
                  </Button>
                </Link>
              </div>
            </aside>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <div className="flex-1">
              <div className="max-w-3xl mb-24">
                <p className="text-3xl font-serif text-white mb-6">
                  {service.description}
                </p>
                <p className="text-white/70 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* ---------------- FOLDER ---------------- */}
              <div ref={folderRef}>
                <h3 className="font-serif text-3xl text-white mb-10">
                  Capabilities Dossier
                </h3>

                <div className="relative bg-[#1A1633] rounded-t-[3rem] p-12 pb-32 shadow-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    {displayFeatures.map((f, i) => {
                      const style = [
                        { y: y1, x: x1, rotate: r1 },
                        { y: y2, x: x2, rotate: r2 },
                        { y: y3, x: x3, rotate: r3 },
                        { y: y4, x: x4, rotate: r4 },
                      ][i];

                      return (
                        <motion.div
                          key={i}
                          style={{ ...style, scale: scaleCard, opacity: opacityCard }}
                          className="bg-[#16122B] border border-white/10 rounded-2xl p-8 shadow-xl"
                        >
                          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                            {getIcon(i)}
                          </div>
                          <h4 className="text-white text-xl font-serif mb-3">
                            {f}
                          </h4>
                          <p className="text-white/60 text-sm">
                            Professional {f.toLowerCase()} tailored for scale.
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* FOLDER LIP */}
                <div className="h-32 bg-[#140F2E] rounded-b-[3rem] flex items-center justify-center shadow-inner">
                  <FolderOpen className="text-white/20 w-8 h-8" />
                </div>

                <div className="text-center mt-16">
                  <Link href="/contactus">
                    <Button size="lg" className="bg-acumen-primary text-white px-10 h-14 rounded-full shadow-xl">
                      Inquire About Services
                      <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
