"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Layers,
    Cpu,
    BarChart3,
    ArrowUpRight,
    Calendar,
    User,
    FileText,
    FolderOpen
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";

/* ---------------- DATA (UNCHANGED) ---------------- */
const PROJECTS = [
    {
        id: 1,
        client: "DSenergize",
        title: "Solar IoT Analytics Platform",
        category: "Web&App Development",
        image: "/assets/dse.png",
        stat: "Max Energy Gen",
        desc: "Development of a cloud-based energy management dashboard allowing real-time remote monitoring, predictive maintenance, and data logging for solar assets.",
        website: "https://dsenergize.com/",
        challenge: "Solar plant owners faced inefficiencies due to a lack of real-time visibility into asset performance, leading to prolonged downtimes and unoptimized energy generation.",
        approach: "We engineered a robust IoT-enabled platform that connects directly with solar dataloggers. The system processes gigabytes of telemetry data to provide instant alerts and predictive maintenance schedules.",
        stack: ["React.js", "TypeScript", "Node.js", "MongoDB", "Express.js", "Docker", "Tailwind CSS"],
        result: "Enabled 24/7 remote monitoring for over 50MW of solar assets, reducing maintenance response time by 60%."
    },
    {
        id: 2,
        client: "REQX",
        title: "Global IT Talent Portal",
        category: "Web Development",
        image: "/assets/reqx.png",
        stat: "Top-Tier Vetting",
        desc: "Designing a corporate digital interface to connect businesses with executive IT talent and specialized consulting services for digital transformation.",
        website: "https://reqxtechnology.com",
        challenge: "High-stakes IT recruitment was bogged down by slow manual vetting processes and a lack of transparency between global enterprises and specialized talent.",
        approach: "We built a streamlined, high-performance web portal featuring an intuitive dashboard for employers to filter candidates based on rigorous technical vetting scores and cultural fit.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
        result: "Achieved a 45% increase in candidate conversion rates and established a digital footprint for global talent sourcing."
    },
    {
        id: 3,
        client: "ShapeIQ",
        title: "Sustainable MedTech Launch",
        category: "Strategy",
        image: "/assets/ShapeIQ.jpg",
        stat: "90% Less Waste",
        desc: "Brand positioning and market entry strategy for 'EcoCast,' a revolutionary recycled 3D-printed orthopedic product driving the circular economy.",
        website: "https://www.shapeiq.in",
        challenge: "Introducing a disruptive 3D-printed medical product into a traditional orthopedic market required shifting the narrative from 'novelty' to 'medical necessity' and 'sustainability'.",
        approach: "We crafted a dual-narrative strategy focusing on 'Patient Comfort' (breathable, lightweight) and 'Planetary Health' (recycled materials), positioning ShapeIQ as the leader in circular MedTech.",
        stack: ["Brand Strategy", "Market Research", "Visual Identity", "Digital Marketing", "Go-To-Market Roadmap"],
        result: "Successfully positioned EcoCast as a premium alternative, securing partnerships with 5 major orthopedic clinics pre-launch."
    },
    {
        id: 4,
        client: "KrishiGRO",
        title: "Eco-Agri Brand Identity",
        category: "Branding",
        image: "/assets/KG.png",
        stat: "Zero Emission Tech",
        desc: "Strategic brand positioning for the 'Tesla of Tillers,' launching the Bheem 1.0 electric multi-utility vehicle to revolutionize rural farming.",
        website: "https://www.krishigro.in/",
        challenge: "To position a complex agri-tech product as an accessible, powerful tool for rural farmers while appealing to modern investors.",
        approach: "We focused on the narrative of 'Strength meets Sustainability'. Visuals were designed to look robust and earthy, yet futuristic.",
        stack: ["Wix", "React", "JavaScript", "Wix Velo", "Wix Forms"],
        result: "Successfully launched at the Agri-Expo 2024 with over 500 pre-orders."
    },
    {
        id: 5,
        client: "SLV",
        title: "Global Consultancy Portal",
        category: "Website Development",
        image: "/assets/slv.png",
        stat: "5+ Sector Reach",
        desc: "Development of a corporate web platform showcasing end-to-end international market entry, procurement, and cross-border growth strategies.",
        website: "https://www.spheralink.com/",
        challenge: "Consolidating diverse services (Healthcare, Construction, Energy) into a unified, professional digital experience.",
        approach: "We utilized a clean, corporate aesthetic with a modular CMS, allowing the client to easily update sector-specific case studies.",
        stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
        result: "Reduced client inquiry response time by 40% due to better information architecture."
    },
    {
        id: 6,
        client: "UMPL",
        title: "EV Ecosystem Visibility",
        category: "Search Engine Optimization",
        image: "/assets/umpl.png",
        stat: "Net Zero Aligned",
        desc: "Comprehensive SEO strategy to position 'eMOTION' retrofit kits as a central hub in India's EV ecosystem and self-reliant mobility goals.",
        website: "https://www.uveramobility.com/",
        challenge: "Low organic visibility for niche keywords like 'Retrofitting' and 'EV Conversion' in a crowded automotive market.",
        approach: "We implemented a topic-cluster strategy, creating high-value content around government policies (FAME-II) and technical guides.",
        stack: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Bootstrap", "PHP"],
        result: "Organic traffic doubled in 6 months; ranked #1 for 'EV Kit Delhi'."
    },
    {
        id: 7,
        client: "NFI",
        title: "AI Analytics SaaS Platform",
        category: "Website Development",
        image: "/assets/NFI.png",
        stat: "Real-Time Processing",
        desc: "UI/UX design and development for a drag-and-drop AI platform, enabling real-time visual data analytics and edge computing for drones.",
        website: "https://neuroforgeinnovation.com/",
        challenge: "Simplifying complex AI data processing into a user-friendly 'Drag & Drop' interface for non-technical users.",
        approach: "We adopted a dashboard-first design, focusing on data visualization and minimal latency interactions.",
        stack: ["React", "TypeScript", "D3.js", "WebSockets", "Node.js"],
        result: "User onboarding time decreased by 60% due to intuitive UX patterns."
    }
];

const ProjectDetail = () => {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<typeof PROJECTS[0] | null>(null);
    const [mounted, setMounted] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => setIsReady(true), []);

    const { scrollYProgress } = useScroll(
        isReady
            ? { target: containerRef, offset: ["start end", "center center"] }
            : {}
    );

    const spring = { stiffness: 100, damping: 20 };

    const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [600, 0]), spring);
    const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), spring);
    const r1 = useSpring(useTransform(scrollYProgress, [0, 1], [-15, 0]), spring);

    const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [700, 0]), spring);
    const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 0]), spring);
    const r2 = useSpring(useTransform(scrollYProgress, [0, 1], [15, 0]), spring);

    const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [800, 0]), spring);
    const x3 = useSpring(useTransform(scrollYProgress, [0, 1], [50, 0]), spring);
    const r3 = useSpring(useTransform(scrollYProgress, [0, 1], [-5, 0]), spring);

    const y4 = useSpring(useTransform(scrollYProgress, [0, 1], [900, 0]), spring);
    const x4 = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 0]), spring);
    const r4 = useSpring(useTransform(scrollYProgress, [0, 1], [5, 0]), spring);

    const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    useEffect(() => {
        setMounted(true);
        const found = PROJECTS.find((p) => p.id === Number(params.id));
        if (found) setProject(found);
    }, [params.id]);

    if (!mounted) return null;

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F0B1D] text-white">
                <h1 className="font-serif text-3xl mb-4">Project Not Found</h1>
                <Button onClick={() => router.push("/allcasestudies")}>
                    Back to Portfolio
                </Button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0F0B1D] text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* ---------------- HERO ---------------- */}
            <section className="relative w-full h-[85vh] min-h-[600px] flex items-end overflow-hidden pb-12">
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1D] via-black/40 to-transparent" />
                </div>

                <div className="relative z-20 container mx-auto px-6">
                    <Link
                        href="/allcasestudies"
                        className="inline-flex items-center text-white/70 hover:text-white mb-10"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Portfolio
                    </Link>

                    <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest">
                        {project.category}
                    </span>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl mb-10">
                        {project.title}
                    </h1>

                    <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                        <div>
                            <span className="flex items-center text-xs text-white/50 uppercase mb-2">
                                <User className="w-3 h-3 mr-2" /> Client
                            </span>
                            <p className="text-2xl font-serif">{project.client}</p>
                        </div>

                        <div>
                            <span className="flex items-center text-xs text-white/50 uppercase mb-2">
                                <Calendar className="w-3 h-3 mr-2" /> Year
                            </span>
                            <p className="text-2xl font-serif">2025</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                            <span className="flex items-center text-xs uppercase mb-1 font-bold">
                                <BarChart3 className="w-3 h-3 mr-2" /> Key Impact
                            </span>
                            <p className="text-xl font-bold">{project.stat}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- FOLDER SECTION ---------------- */}
            <section ref={containerRef} className="py-24 bg-[#120F24]">
                <div className="container mx-auto max-w-6xl">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm uppercase tracking-widest text-white/50 mb-3">
                            Project Dossier
                        </h2>
                        <p className="text-2xl md:text-3xl font-serif text-white">
                            {project.desc}
                        </p>
                    </div>

                    <div className="relative bg-[#1A1633] rounded-t-[3rem] p-12 pb-32 shadow-[0_-40px_90px_rgba(0,0,0,0.8)]">
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">

                            <motion.div
                                style={{ y: y1, x: x1, rotate: r1, scale, opacity }}
                                className="bg-[#16122B] rounded-2xl p-8 border border-white/10 shadow-xl"
                            >
                                <Layers className="w-6 h-6 mb-4 text-red-400" />
                                <h3 className="font-serif text-xl mb-3">The Challenge</h3>
                                <p className="text-white/65">{project.challenge}</p>
                            </motion.div>

                            <motion.div
                                style={{ y: y2, x: x2, rotate: r2, scale, opacity }}
                                className="bg-[#16122B] rounded-2xl p-8 border border-white/10 shadow-xl"
                            >
                                <Cpu className="w-6 h-6 mb-4 text-purple-400" />
                                <h3 className="font-serif text-xl mb-3">Our Approach</h3>
                                <p className="text-white/65">{project.approach}</p>
                            </motion.div>

                            <motion.div
                                style={{ y: y3, x: x3, rotate: r3, scale, opacity }}
                                className="bg-acumen-secondary rounded-2xl p-8 shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-acumen-primary/30 blur-3xl" />
                                <FileText className="w-6 h-6 mb-4" />
                                <h3 className="font-serif text-xl mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, i: React.Key | null | undefined) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/10 rounded-lg text-sm border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ y: y4, x: x4, rotate: r4, scale, opacity }}
                                className="bg-[#16122B] rounded-2xl p-8 border border-white/10 shadow-xl"
                            >
                                <BarChart3 className="w-6 h-6 mb-4 text-green-400" />
                                <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">
                                    Final Outcome
                                </h3>
                                <p className="text-2xl font-serif">"{project.result}"</p>
                            </motion.div>

                        </div>
                    </div>

                    <div className="h-32 bg-[#140F2E] rounded-b-[3rem] flex items-center justify-center shadow-inner -mt-10">
                        <FolderOpen className="w-8 h-8 text-white/20" />
                    </div>

                    <div className="text-center mt-16">
                        <Link href={project.website} target="_blank">
                            <Button className="rounded-full px-10 h-14 bg-acumen-primary text-white shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:scale-105 transition">
                                Visit Live Site <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
};

export default ProjectDetail;
