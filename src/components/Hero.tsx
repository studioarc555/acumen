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
        relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden
        bg-gradient-to-br
        from-[#0b0818]
        via-[#1b0f3f]
        to-[#141027]
      "
    >
      {/* Purple Ambient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.18),transparent_60%)]" />

      {/* Soft Accent Glows */}
      <div className="absolute -top-40 right-[-15%] w-[800px] h-[800px] bg-purple-700/25 blur-[180px]" />
      <div className="absolute bottom-[-25%] left-[-20%] w-[700px] h-[700px] bg-indigo-600/25 blur-[180px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-[0.07]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-in opacity-0 [animation-delay:200ms]
                          inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-purple-500/10 backdrop-blur-md
                          border border-purple-400/30">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span className="text-xs font-semibold tracking-wide text-purple-200 uppercase">
              Strategic Digital Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in opacity-0 [animation-delay:400ms]
                       font-serif text-5xl md:text-7xl lg:text-8xl font-bold
                       leading-tight mt-8 mb-6
                       text-[#f5f3ff]
                       drop-shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            Build Brands That <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
              Inspire & Convert
            </span>{" "}

          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-in opacity-0 [animation-delay:600ms]
                       text-lg md:text-xl text-white/70 max-w-2xl mb-12"
          >
            We fuse data-driven strategy with world-class design to build
            digital experiences that perform.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in opacity-0 [animation-delay:800ms]
                       flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="secondary"
              size="xl"
              className="
                bg-gradient-to-r from-purple-600 to-purple-700
                text-white border-none
                hover:from-purple-500 hover:to-purple-600
              "
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
              className="
                text-white
                border-purple-400/40
                hover:bg-purple-500/10
              "
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
          <div
            className="animate-fade-in opacity-0 [animation-delay:1000ms]
                       mt-20 pt-8 border-t border-white/15 w-full"
          >
            <p className="text-sm font-medium text-white/60 mb-6 uppercase tracking-wide">
              Trusted by visionary brands
            </p>

            <div className="relative flex w-full overflow-hidden
                            [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div
                className="flex min-w-full shrink-0 gap-14 py-4 animate-scroll
                           hover:[animation-play-state:paused]"
              >
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
                   animate-bounce cursor-pointer text-purple-300/70"
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
