"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      client: "DSenergize",
      title: "Solar IoT Analytics Platform",
      tags: ["App Development"],
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
      stat: "Max Energy Gen",
    },
    {
      id: 2,
      client: "ReqX",
      title: "Global IT Talent Portal",
      tags: ["Web Development"],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      stat: "Top-Tier Vetting",
    },
    {
      id: 3,
      client: "ShapeIQ",
      title: "Sustainable MedTech Launch",
      tags: ["Strategy"],
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      stat: "90% Less Waste",
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 bg-[#0F0B1D] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-40 right-[-20%] w-[600px] h-[600px] bg-purple-600/20 blur-[160px]" />
      <div className="absolute bottom-[-30%] left-[-20%] w-[600px] h-[600px] bg-indigo-600/20 blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-sm md:text-lg font-bold text-purple-400 uppercase tracking-widest">
              Our Work <span className="font-serif">&</span>
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
              Hall of Impact
            </h2>
          </div>

          {/* Desktop CTA */}
          <Button

            variant="secondary"
            className="hidden md:inline-flex bg-white text-[#0F0B1D] hover:bg-white/90"
          >
            <Link href="/allcasestudies">
              View All Work
            </Link>
          </Button>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">
          {cases.map((item) => (
            <Link
              href={`/portfolio/${item.id}`}
              key={item.id}
              className="group block"
            >
              <div className="transition-all">

                {/* IMAGE CARD */}
                <div
                  className={cn(
                    "rounded-[1.6rem] aspect-[4/3] mb-6 overflow-hidden relative",
                    "bg-white/5 border border-white/10 backdrop-blur-xl",
                    "hover:border-white/30 hover:scale-[1.02] transition-all duration-500"
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* HOVER CTA */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-white/10 backdrop-blur border border-white/20">
                      {item.stat}
                    </span>
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <div className="flex gap-3 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-widest text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/60">
                    {item.client}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* MOBILE CTA */}
        <div className="mt-20 md:hidden">
          <Button

            className="w-full bg-white text-[#0F0B1D] hover:bg-white/90"
          >
            <Link href="/allcasestudies">
              View All Work
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
