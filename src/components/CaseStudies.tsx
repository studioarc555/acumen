// "use client";

// import React from 'react';
// import { ArrowRight, Zap, Briefcase } from 'lucide-react';

// // Define the structure for a single Case Study item
// interface CaseStudy {
//     id: number;
//     title: string;
//     description: string;
//     imagePlaceholder: string;
//     isImageLeft: boolean;
//     projectFocus: string;
// }

// // Mock Data for Case Studies
// const CASE_STUDIES: CaseStudy[] = [
//     {
//         id: 1,
//         title: "Gopi Vaid - E-commerce Redesign",
//         description: "Gopi Vaid, founded in 2003 by Gopi Vaid and Arnaz Soonawalla, is a celebrated fashion label known for hand-embroidered kurtas in rich jewel tones. Their brand combines traditional Indian aesthetics with contemporary chic. We transformed their e-commerce platform, leading to a 45% increase in conversion rates.",
//         imagePlaceholder: "E-commerce-Redesign",
//         isImageLeft: true,
//         projectFocus: "Luxury E-commerce & Brand Refresh",
//     },
//     {
//         id: 2,
//         title: "Astha Narang - Global Digital Strategy",
//         description: "Ancient handiwork and techniques with modern treatment along with texture of fabric and silhouettes creates ensembles that are chic and contemporary with the culture being intact. We developed a bespoke digital strategy focusing on high-net-worth individual outreach and improved site performance by 60%, resulting in a strong international client base.",
//         imagePlaceholder: "Digital-Strategy-SEO",
//         isImageLeft: false,
//         projectFocus: "Global Digital Strategy & SEO",
//     },
//     {
//         id: 3,
//         title: "Pomecha - Sustainable Techwear",
//         description: "Pomecha is a leading name in sustainable techwear, blending high-performance materials with eco-conscious manufacturing. Our work involved a complete brand identity overhaul and the launch of a new product line, which broke internal sales records within the first quarter.",
//         imagePlaceholder: "Sustainable-Brand-Launch",
//         isImageLeft: true,
//         projectFocus: "Sustainable Brand Launch",
//     },
// ];

// // Helper function to generate a placeholder image URL
// const getPlaceholderUrl = (text: string) => {
//     const safeText = text.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 20);
//     return `https://placehold.co/800x1200/783f8e/c8c6d7?text=${safeText}`;
// };

// /**
//  * Renders a single case study card with a specific vertical height for scroll snapping.
//  */
// const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
//     return (
//         <article
//             key={study.id}
//             // Height reduced to h-[70vh]
//             className="snap-start h-[70vh] w-full flex items-start justify-center px-4 md:px-8 bg-acumen-light-900 mb-8"
//         >
//             <div className="max-w-6xl w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

//                 {/* IMAGE SECTION */}
//                 <div className="w-full h-full min-h-[40vh] hidden md:flex items-center justify-center overflow-hidden relative group bg-acumen-purple-800/80">
//                     <img
//                         src={getPlaceholderUrl(study.imagePlaceholder)}
//                         alt={`${study.title} Case Study Visual`}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         onError={(e) => {
//                             const target = e.target as HTMLImageElement;
//                             target.onerror = null;
//                             target.src = "https://placehold.co/800x1200/783f8e/c8c6d7?text=Visual+Error";
//                         }}
//                     />
//                     {/* REMOVED: Removed the separate overlay div as the background class now provides the desired tint. */}
//                 </div>


//                 {/* CONTENT SECTION */}
//                 <div className="flex flex-col justify-between h-full p-4 md:p-8">
//                     <div>
//                         <span className="text-sm font-semibold uppercase tracking-wider text-acumen-purple/60 mb-2">
//                             <Briefcase className="w-4 h-4 mr-2 inline-block" /> {study.projectFocus}
//                         </span>

//                         <h3 className="text-3xl font-extrabold text-acumen-purple mb-4 pb-2">
//                             {study.title}
//                         </h3>

//                         <p className="text-base text-acumen-purple/70 leading-relaxed">
//                             {study.description}
//                         </p>
//                     </div>

//                     <a
//                         href={study.id === 4 ? "/contact" : `/case-studies/${study.id}`}
//                         className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl font-medium cursor-pointer
//                         border-2 border-acumen-purple-700
//                         bg-acumen-purple-700 text-acumen-purple-50
//                         transition-all duration-300
//                         hover:bg-acumen-purple-50 hover:text-acumen-purple-700
//                         hover:scale-[1.02] shadow-md self-start"
//                     >
//                         {study.id === 4 ? "Start Your Project" : <>Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" /></>}
//                     </a>
//                 </div>
//             </div>
//         </article>
//     );
// };


// /**
//  * Main case study vertical scroll snap container.
//  */
// export default function CaseStudies() {
//     return (
//         <section className="w-full bg-acumen-light-900">
//             <div className="mx-auto max-w-7xl px-0">

//                 {/* HEADER */}
//                 <header className="text-center pt-8 pb-4 sticky top-0 bg-acumen-light-900 z-20">
//                     <span className="text-sm font-semibold uppercase tracking-widest text-acumen-purple/70 flex items-center justify-center">
//                         Our Clients & Successes
//                     </span>
//                     <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-acumen-purple">
//                         Client Stories: Scroll to Explore
//                     </h2>
//                 </header>

//                 {/* SCROLLABLE LIST */}
//                 {/* Container height is h-[70vh] */}
//                 <div className="overflow-y-scroll h-[70vh] snap-y snap-mandatory custom-scrollbar scroll-pt-[140px] md:scroll-pt-[140px]">
//                     {CASE_STUDIES.map(study => (
//                         <CaseStudyCard key={study.id} study={study} />
//                     ))}
//                 </div>

//                 {/* HIDE SCROLLBAR */}
//                 <style dangerouslySetInnerHTML={{
//                     __html: `
//                     .custom-scrollbar { scrollbar-width: none; }
//                     .custom-scrollbar::-webkit-scrollbar { display: none; }
//                 `}} />

//             </div>
//         </section>
//     );
// }

"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const CaseStudies = () => {
    const cases = [
        {
            client: "Gopi Vaid",
            title: "Redefining Luxury E-commerce",
            tags: ["UX/UI", "Development"],
            image: "bg-gradient-to-br from-amber-200 to-orange-100",
            stat: "+45% Conversion",
        },
        {
            client: "Astha Narang",
            title: "Global SEO Dominance",
            tags: ["Strategy", "SEO"],
            image: "bg-gradient-to-bl from-indigo-200 to-blue-100",
            stat: "2x Traffic",
        },
        {
            client: "Pomecha",
            title: "Sustainable Brand Launch",
            tags: ["Branding", "Launch"],
            image: "bg-gradient-to-tr from-emerald-100 to-teal-200",
            stat: "Record Q1 Sales",
        },
    ];

    return (
        <section id="case-studies" className="py-24 md:py-32 bg-[#FDFCFE]">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-sm font-bold text-[hsl(277,72%,26%)] uppercase tracking-widest">
                            Our Work
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">
                            Recent Case Studies
                        </h2>
                    </div>
                    <Button variant="outline" className="hidden md:flex">
                        View All Work
                    </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {cases.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div
                                className={cn(
                                    "rounded-[2rem] aspect-[4/3] mb-6 overflow-hidden relative",
                                    item.image
                                )}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-white/90 backdrop-blur text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                                        {item.stat}
                                    </span>
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ArrowRight className="w-5 h-5 text-slate-900" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-2 mb-3">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold text-slate-500 uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[hsl(277,72%,26%)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500">{item.client}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full">
                        View All Work
                    </Button>
                </div>
            </div>
        </section>
    );
};
