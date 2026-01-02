"use client";

import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

// Logo data
const logos = [
  { name: "DSE", src: "/assets/DSElog.jpg" },
  { name: "KG", src: "/assets/KGlog.jpg" },
  { name: "ReqX", src: "/assets/REQXlog.webp" },
  { name: "UMPL", src: "/assets/UMPlog.jpg" },
  { name: "SLV", src: "/assets/SLVlog.jpeg" },
  { name: "NFI", src: "/assets/NFIlog.png" },
  { name: "ShapeIQ", src: "/assets/ShapeIQ.jpg" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-[100dvh] flex items-center pt-20 pb-15 overflow-hidden
        bg-gradient-to-b from-[#0F0B1D] via-[#140F2D] to-[#0A0815]
      "
    >
      {/* Abstract Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-purple-700/30 to-blue-600/25 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/30 to-purple-700/25 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-in opacity-0 [animation-delay:200ms]
                          inline-flex items-center gap-2 px-3 py-1 rounded-full
                          bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span className="text-xs font-semibold tracking-wide text-purple-200 uppercase">
              Strategic Digital Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in opacity-0 [animation-delay:400ms]
                         font-serif text-5xl md:text-7xl lg:text-8xl font-bold
                         leading-tight text-white mt-6 mb-4">
            Build Brands That <br className="hidden md:block" />
            <span className="text-purple-300">Inspire &</span>{" "}
            <span className="text-indigo-300">Convert</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in opacity-0 [animation-delay:600ms]
                        text-lg md:text-xl text-white/70 max-w-2xl mb-10">
            We fuse data-driven strategy with world-class design to build
            digital experiences that perform.
          </p>

          {/* CTAs (UNCHANGED LOGIC & SIZE) */}
          <div className="animate-fade-in opacity-0 [animation-delay:800ms]
                          flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start a Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() =>
                document
                  .getElementById("case-studies")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Case Studies
            </Button>
          </div>

          {/* Logos */}
          <div className="animate-fade-in opacity-0 [animation-delay:1000ms]
                          mt-20 pt-8 border-t border-white/20 w-full">
            <p className="text-sm font-medium text-white/60 mb-6 uppercase tracking-wide">
              Trusted by visionary brands
            </p>

            <div className="relative flex w-full max-w-full mx-auto overflow-hidden
                            [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex min-w-full shrink-0 gap-12 md:gap-16 py-4 animate-scroll
                              hover:[animation-play-state:paused]">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="relative h-12 w-32 flex-shrink-0
                               opacity-60 hover:opacity-100 hover:scale-105
                               transition-all duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      fill
                      sizes="130px"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   animate-bounce cursor-pointer text-white/60"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown />
      </div>
    </section>
  );
};
