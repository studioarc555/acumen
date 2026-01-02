export const StatsAndPartners = () => {
  const stats = [
    { value: "10+", label: "Partners" },
    { value: "33%", label: "Avg ROI Increase" },
    { value: "3+", label: "Years Experience" },
  ];

  return (
    <section className="relative py-16 bg-[#07060D] overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute -top-1/2 left-1/3 w-[600px] h-[600px] bg-purple-900/30 blur-[160px] rounded-full" />
      <div className="absolute -bottom-1/2 right-1/3 w-[500px] h-[500px] bg-indigo-900/25 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-3xl border border-white/10 overflow-hidden
                        bg-white/[0.03] backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(99,102,241,0.35)]">

          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-10 text-center group transition-all duration-500
                         hover:bg-white/[0.06]
                         border-b md:border-b-0
                         md:border-r last:md:border-r-0
                         border-white/10"
            >
              {/* VALUE */}
              <p className="font-serif text-5xl md:text-6xl font-bold mb-3
                            bg-gradient-to-r from-purple-300 to-indigo-300
                            bg-clip-text text-transparent">
                {stat.value}
              </p>

              {/* LABEL */}
              <p className="text-white/60 tracking-widest uppercase text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
