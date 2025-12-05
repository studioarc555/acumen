export const StatsAndPartners = () => {
  const stats = [
    { value: "210+", label: "Partners" },
    { value: "33%", label: "Avg ROI Increase" },
    { value: "9+", label: "Years Experience" },
  ];

  return (
    // FIX 1: Section background changed to a light, subtle brand tint (bg-acumen-primary/5)
    // FIX 2: Text color changed from white to the darkest brand color (text-acumen-secondary)
    <section className="py-20 bg-acumen text-acumen-secondary relative overflow-hidden">
      {/* Background Overlay is removed as it was intended for a dark background */}
      {/* <div className="absolute inset-0 bg-[hsl(277,72%,26%)]/20 mix-blend-overlay" /> */}

      <div className="container mx-auto px-6 relative z-10">
        {/* FIX 3: Dividers changed to a subtle light purple tint visible on the light background */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-acumen-light/30 border border-acumen-primary/10 rounded-3xl overflow-hidden bg-white shadow-xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              // FIX 4: Card background set to a light color for contrast (bg-acumen-primary/10)
              // Hover effect provides subtle depth (hover:bg-acumen-primary/20)
              className="p-10 text-center group bg-acumen-primary/10 hover:bg-acumen-primary/20 transition-all duration-300"
            >
              <p
                // FIX 5: Stats numbers are now the primary dark color
                className="font-serif text-5xl md:text-6xl font-bold mb-2 text-acumen-secondary"
              >
                {stat.value}
              </p>

              {/* FIX 6: Label text uses the lighter shade of the brand color */}
              <p className="text-acumen-light font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};