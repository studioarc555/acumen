import {
  Globe,
  Palette,
  Megaphone,
  Video,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Scalable, high-performance web platforms and e-commerce solutions.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive interfaces and seamless user experiences that drive engagement.",
    },
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description:
        "Data-backed campaigns and funnel optimization for measurable growth.",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Cinematic storytelling that captures attention and builds trust.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform app development for iOS and Android.",
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description:
        "Technical SEO and deep analytical insights for top organic ranking.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[hsl(277,72%,26%)] uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">
              How We Deliver Growth
            </h2>
          </div>

          <p className="text-slate-500 text-lg max-w-md pb-1">
            Comprehensive services tailored to drive growth and elevate your
            brand presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[hsl(277,72%,26%)] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-slate-900 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-[hsl(277,72%,26%)] group-hover:text-slate-900 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;