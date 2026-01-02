import { Heart, Quote } from "lucide-react";

export const About = () => (
  <section id="about" className="relative py-24 bg-[#0F0B1D] overflow-hidden">
    {/* Ambient glows */}
    <div className="absolute -top-40 right-[-20%] w-[700px] h-[700px] bg-purple-600/30 blur-[160px]" />
    <div className="absolute bottom-[-40%] left-[-20%] w-[600px] h-[600px] bg-indigo-600/25 blur-[160px]" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-white/80">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Strategy. Build.
              <br /> Accelerate.
            </h2>

            <p className="text-lg text-white/75 max-w-md mb-10 leading-relaxed">
              Growth isn’t accidental — it’s intentional.  
              We build with clarity, purpose, and measurable impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {["Vision", "Mission"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 bg-white/10 border border-white/15 hover:border-white/30 transition"
                >
                  <h4 className="font-serif text-xl font-bold text-white mb-2">
                    {label}
                  </h4>
                  <p className="text-sm text-white/70">
                    {label === "Vision"
                      ? "Insight. Execution. Impact."
                      : "Elevate. Disrupt. Win."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT QUOTE */}
          <blockquote className="rounded-3xl p-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] flex flex-col justify-between">
            <Quote className="w-12 h-12 text-purple-400 mb-6" />

            <p className="font-serif text-2xl md:text-3xl text-white leading-snug">
              “True success isn’t about chasing trends —  
              it’s about building foundations that last.”
            </p>

            <div className="flex items-center gap-4 mt-10">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="font-semibold text-white">
                  Shahbaz Akhter
                </div>
                <div className="text-sm text-white/60">
                  Founder & CEO
                </div>
              </div>
            </div>
          </blockquote>

        </div>
      </div>
    </div>
  </section>
);

export default About;
