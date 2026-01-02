"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const CTA = () => (
  <section id="contact" className="relative py-28 bg-[#0B0817] overflow-hidden">

    {/* Ambient glow */}
    <div className="absolute -top-40 right-[-20%] w-[700px] h-[700px] bg-purple-600/25 blur-[160px]" />

    <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">

      <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
        Ready To Scale?
      </h2>

      <p className="text-xl text-white/75 mb-16 leading-relaxed">
        Big goals need bold moves.  
        Let’s build a plan that makes them happen.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link href="/contactus">
          <Button
            size="xl"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white shadow-[0_30px_80px_-30px_rgba(109,40,217,0.8)]
              hover:scale-[1.05] transition-all"
          >
            Schedule a Consultation
          </Button>
        </Link>

        <Button
          variant="outline"
          size="xl"
          className="border-white/30 text-white hover:bg-white/10"
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Services
        </Button>
      </div>

      <div className="mt-20 flex justify-center gap-8 text-sm text-white/60">
        {["Free Strategy Call", "No Contracts", "Guaranteed Results"].map(item => (
          <span key={item}>• {item}</span>
        ))}
      </div>

    </div>
  </section>
);

export default CTA;
