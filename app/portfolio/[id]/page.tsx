"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    CheckCircle2,
    Layers,
    Cpu,
    BarChart3,
    ArrowUpRight
} from "lucide-react";
import Navbar from "@/components/Navbar"; 
import { CTA } from "@/components/CTA";   
import Footer from "@/components/Footer"; 
import { Button } from "@/components/ui/Button"; 
import { cn } from "@/lib/utils";


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

    useEffect(() => {
        setMounted(true);
        // Find project by ID
        const found = PROJECTS.find((p) => p.id === Number(params.id));
        if (found) {
            setProject(found);
        }
    }, [params.id]);

    if (!mounted) return null;

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFE]">
                <h1 className="font-serif text-3xl text-acumen-secondary mb-4">Project Not Found</h1>
                <Button onClick={() => router.push('/allcasestudies')}>Back to Portfolio</Button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#FDFCFE] font-sans selection:bg-acumen-primary selection:text-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="pt-20 pb-8 px-6 container mx-auto">
                <Link
                    href="/allcasestudies"
                    className="inline-flex items-center text-acumen-light hover:text-acumen-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <div className="animate-fade-in opacity-0 fill-mode-forwards">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <span className="text-sm font-bold text-acumen-primary uppercase tracking-[0.2em] px-3 py-1 bg-acumen-primary/5 rounded-md mb-4 inline-block">
                                {project.category}
                            </span>
                            <h1 className="font-serif text-4xl md:text-6xl font-bold text-acumen-secondary leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-acumen-light mt-4 max-w-2xl">
                                {project.desc}
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end">
                            <span className="text-sm text-acumen-light mb-1">Client</span>
                            <span className="text-xl font-bold text-acumen-secondary">{project.client}</span>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-acumen-primary/10">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Stat Badge Overlay */}
                        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-3 rounded-xl border border-white/50 shadow-lg">
                            <p className="text-xs text-acumen-light uppercase tracking-wider font-bold">Key Result</p>
                            <p className="text-xl md:text-2xl font-serif font-bold text-acumen-primary">
                                {project.stat}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DETAILS GRID --- */}
            <section className="py-12 px-6 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COL: Context & Approach (8 cols) */}
                    <div className="lg:col-span-8 space-y-16 animate-fade-in opacity-0 fill-mode-forwards" style={{ animationDelay: "200ms" }}>

                        {/* The Challenge */}
                        <div>
                            <h2 className="flex items-center font-serif text-3xl text-acumen-secondary mb-6">
                                <Layers className="w-6 h-6 mr-3 text-acumen-primary" />
                                The Challenge
                            </h2>
                            <p className="text-lg text-acumen-light leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>

                        {/* The Approach */}
                        <div>
                            <h2 className="flex items-center font-serif text-3xl text-acumen-secondary mb-6">
                                <Cpu className="w-6 h-6 mr-3 text-acumen-primary" />
                                Our Approach
                            </h2>
                            <div className="prose prose-lg text-acumen-light leading-relaxed border-l-4 border-acumen-primary/20 pl-6">
                                <p>{project.approach}</p>
                                <p className="mt-4">
                                    We collaborated closely with the {project.client} team to ensure every pixel
                                    and line of code aligned with their business objectives. Through iterative
                                    testing and agile development, we refined the solution to meet market demands.
                                </p>
                            </div>
                        </div>

                        {/* Result */}
                        <div className="bg-acumen-primary/5 rounded-2xl p-8 border border-acumen-primary/10">
                            <h2 className="flex items-center font-serif text-2xl text-acumen-secondary mb-4">
                                <BarChart3 className="w-6 h-6 mr-3 text-acumen-primary" />
                                Impact & Results
                            </h2>
                            <p className="text-acumen-light text-lg">
                                {project.result}
                            </p>
                        </div>

                    </div>

                    {/* RIGHT COL: Sidebar (4 cols) */}
                    <div className="lg:col-span-4 space-y-8 animate-fade-in opacity-0 fill-mode-forwards" style={{ animationDelay: "400ms" }}>

                        {/* Tech Stack / Services */}
                        <div className="bg-white p-6 rounded-2xl border border-acumen-primary/10 shadow-sm sticky top-32">
                            <h3 className="font-serif text-xl text-acumen-secondary mb-6 pb-4 border-b border-acumen-primary/10">
                                Technologies & Services
                            </h3>
                            <ul className="space-y-3">
                                {project.stack.map((tech, i) => (
                                    <li key={i} className="flex items-center text-acumen-light">
                                        <CheckCircle2 className="w-5 h-5 mr-3 text-acumen-primary flex-shrink-0" />
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-acumen-primary/10">
                                <h4 className="text-sm font-bold text-acumen-secondary mb-2">Project Year</h4>
                                <p className="text-acumen-light">2025</p>
                            </div>

                            <div className="mt-8">
                                <Link href={project.website} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full flex items-center justify-center gap-2">
                                        Visit Live Site <ArrowUpRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- NEXT PROJECT NAVIGATION --- */}
            <section className="bg-white py-10 text-acumen-secondary">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to start your transformation?</h2>
                    <p className="text-acumen-light/75 mb-8 max-w-xl mx-auto text-lg font-bold">
                        We help ambitious brands like {project.client} scale through design and technology.
                    </p>
                    <Link href="/contactus">
                        <Button variant="secondary" className="bg-acumen-primary text-white hover:bg-acumen-secondary shadow-lg">
                            Start a Project
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ProjectDetail;