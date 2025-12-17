"use client";

import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

// Logo data - same as in ClientLogos component
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
      className="relative min-h-[100dvh] flex items-center pt-20 pb-15 overflow-hidden"
    >
      {/* Abstract Background - Using primary brand colors for subtle gradient blur */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[hsl(277,72%,26%)]/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-[hsl(277,72%,26%)]/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-in opacity-0 [animation-delay:200ms] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-acumen-primary/30">
            <Sparkles className="w-3.5 h-3.5 text-acumen-primary" />
            <span className="text-xs font-semibold tracking-wide text-acumen-secondary uppercase">
              Strategic Digital Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in opacity-0 [animation-delay:400ms] font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-acumen-secondary mt-6 mb-4">
            <span className="text-acumen-secondary">Build Brands That</span> <br className="hidden md:block" />
            
            <span className="text-acumen-primary">Inspire &</span> 
            <span className="text-palette-Pastel-Lavender"> Convert</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in opacity-0 [animation-delay:600ms] text-lg md:text-xl text-acumen-light max-w-2xl mb-10">
            We fuse data-driven strategy with world-class design to build
            digital experiences that perform.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row items-center justify-center gap-4">
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

          {/* Social Proof with Logo Images */}
          <div className="animate-fade-in opacity-0 [animation-delay:1000ms] mt-20 pt-8 border-t border-acumen-primary/20 w-full">
            <p className="text-sm font-medium text-acumen-light mb-6 uppercase tracking-wide">
              Trusted by visionary brands
            </p>
            
            {/* Scrolling Logo Container */}
            <div 
              className="relative flex w-full max-w-full mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
            >
              <div className="flex min-w-full shrink-0 gap-12 md:gap-16 py-4 animate-scroll hover:[animation-play-state:paused]">
                
                {/* First set of logos */}
                {logos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="relative h-12 w-32 flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
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
                
                {/* Second set (Duplicate for infinite loop) */}
                {logos.map((logo, index) => (
                  <div 
                    key={`duplicate-${index}`}
                    className="relative h-12 w-32 flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
                    aria-hidden="true"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
      </div>
    </section>
  );
};