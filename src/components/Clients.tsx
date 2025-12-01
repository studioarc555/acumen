"use client";

import React from 'react';
import { ArrowRight, Zap, Briefcase } from 'lucide-react';

// Define the structure for a single Case Study item
interface CaseStudy {
    id: number;
    title: string;
    description: string;
    imagePlaceholder: string; // Placeholder text/identifier for the image area
    isImageLeft: boolean; // Determines the layout order (now ignored for grid)
    projectFocus: string; // Key focus of the project
}

// Mock Data for Case Studies
const CASE_STUDIES: CaseStudy[] = [
    {
        id: 1,
        title: "Gopi Vaid - E-commerce Redesign",
        description: "Gopi Vaid, founded in 2003 by Gopi Vaid and Arnaz Soonawalla, is a celebrated fashion label known for hand-embroidered kurtas in rich jewel tones. Their brand combines traditional Indian aesthetics with contemporary chic. We transformed their e-commerce platform, leading to a 45% increase in conversion rates.",
        imagePlaceholder: "E-commerce-Redesign",
        isImageLeft: true,
        projectFocus: "Luxury E-commerce & Brand Refresh",
    },
    {
        id: 2,
        title: "Astha Narang - Global Digital Strategy",
        description: "Ancient handiwork and techniques with modern treatment along with texture of fabric and silhouettes creates ensembles that are chic and contemporary with the culture being intact. We developed a bespoke digital strategy focusing on high-net-worth individual outreach and improved site performance by 60%, resulting in a strong international client base.",
        imagePlaceholder: "Digital-Strategy-SEO",
        isImageLeft: false,
        projectFocus: "Global Digital Strategy & SEO",
    },
    {
        id: 3,
        title: "Pomecha - Sustainable Techwear",
        description: "Pomecha is a leading name in sustainable techwear, blending high-performance materials with eco-conscious manufacturing. Our work involved a complete brand identity overhaul and the launch of a new product line, which broke internal sales records within the first quarter.",
        imagePlaceholder: "Sustainable-Brand-Launch",
        isImageLeft: true,
        projectFocus: "Sustainable Brand Launch",
    },
    // {
    //     id: 4,
    //     title: "Start Your Success Story",
    //     description: "Ready to launch your own impactful project? This final card encourages you to take the next step and contact us directly to begin your collaboration and achieve measurable results.",
    //     imagePlaceholder: "Start-Your-Project",
    //     isImageLeft: false,
    //     projectFocus: "Your Next Big Project",
    // },
];

// Helper function to generate a placeholder image URL
const getPlaceholderUrl = (text: string) => {
    // Using a vertical ratio for the featured layout
    const safeText = text.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 20);
    return `https://placehold.co/800x1200/39476b/f3f2e8?text=${safeText}`;
}

/**
 * Renders a single case study card with a specific vertical height for scroll snapping.
 */
const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
    
    return (
        <article 
            key={study.id} 
            // h-[80vh] is the snap height.
            // FIX: Added mb-8 (margin-bottom: 2rem) to create visual spacing between cards.
            className="snap-start h-[80vh] w-full flex items-start justify-center px-4 md:px-8 bg-cream mb-8"
        >
            {/* Centered Content Container. Uses h-full to match the snap height. */}
            <div className="max-w-6xl w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                
                {/* 1. Image/Visual Section. Uses h-full to match the content column height. */}
                <div className="w-full h-full min-h-[40vh] hidden md:flex items-center justify-center text-white text-lg font-semibold overflow-hidden relative group">
                    <img 
                        src={getPlaceholderUrl(study.imagePlaceholder)} 
                        alt={`${study.title} Case Study Visual`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "https://placehold.co/800x1200/39476b/f3f2e8?text=Visual+Error"; 
                        }}
                    />
                    <div className="absolute inset-0 bg-navy/30 mix-blend-multiply"></div>
                </div>

                {/* 2. Content Section. Uses h-full and flex-col justify-between to push the button down. */}
                <div className="flex flex-col justify-between h-full p-4 md:p-8"> 
                    <div> {/* Wrapper for top content (Focus, Title, Description) */}
                        <span className="text-sm font-semibold uppercase tracking-wider text-navy/60 mb-2">
                            <Briefcase className="w-4 h-4 mr-2 inline-block" /> {study.projectFocus}
                        </span>
                        <h3 className="text-3xl font-extrabold text-navy mb-4 pb-2">
                            {study.title}
                        </h3>
                        
                        <p className="text-base text-navy/70 leading-relaxed mb-0">
                            {study.description}
                        </p>
                    </div>

                    {/* Button - Pushed to the bottom by justify-between. No mt-4. */}
                    <a
                        href={study.id === 4 ? "/contact" : `/case-studies/${study.id}`}
                        className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl font-medium cursor-pointer
                        border-2 border-navy
                        bg-cream text-navy
                        transition-all duration-300
                        hover:bg-navy hover:text-cream
                        hover:scale-[1.02] shadow-md self-start" 
                    >
                        {study.id === 4 ? "Start Your Project" : <>Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" /></>}
                    </a>
                </div>
            </div>
        </article>
    );
};


/**
 * Main component to display all case studies using the vertical scroll-snap layout.
 */
export default function CaseStudies() {
    return (
        <section className="w-full bg-cream">
            <div className="mx-auto max-w-7xl px-0">

                {/* Section Header - Sticky header for persistent context */}
                <header className="text-center pt-8 pb-4 sticky top-0 bg-cream z-20 ">
                    <span className="text-sm font-semibold uppercase tracking-widest text-navy/60 flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2" /> Our Clients & Successes
                    </span>
                    <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-navy">
                        Client Stories: Scroll to Explore
                    </h2>
                </header>

                {/* Case Study List Container with Scroll Snap. 
                    h-[80vh] is the scrollable height.
                */}
                <div className="overflow-y-scroll h-[80vh] snap-y snap-mandatory custom-scrollbar scroll-pt-[140px] md:scroll-pt-[140px]">
                    {CASE_STUDIES.map(study => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>

                {/* Custom Scrollbar Styling (Hidden for a cleaner experience) */}
                <style dangerouslySetInnerHTML={{ __html: `
                    .custom-scrollbar {
                        scrollbar-width: none; /* For Firefox */
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                        display: none; /* For Chrome, Safari, and Opera */
                    }
                `}} />
                
            </div>
        </section>
    );
}