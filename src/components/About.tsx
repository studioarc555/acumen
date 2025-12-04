import { Lightbulb, Target, Zap, Heart, Quote } from "lucide-react";

export const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(277,72%,26%)]/50 mix-blend-lighten rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/50 mix-blend-lighten rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-white">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium tracking-wide">Our Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Strategy. Build.
              <br /> Accelerate.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-md">
              We believe in growth fueled by clarity and purpose, not just clicks. We craft
              intentional strategies.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Vision", text: "Fusing insight with execution." },
                { label: "Mission", text: "Forging the path to dominance." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <h4 className="font-serif text-xl font-bold mb-2">{item.label}</h4>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-10 flex flex-col justify-between">
              <Quote className="w-12 h-12 text-white/20 mb-4" />
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug">
                "True success isn't about chasing the next trend—it's about building a foundation
                that lasts."
              </blockquote>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">Syedah Fatma</div>
                  <div className="text-sm text-slate-400">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
