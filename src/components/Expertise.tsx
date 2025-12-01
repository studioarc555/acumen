"use client";

import React from 'react';

// Define the structure for an expertise card
interface ExpertiseCardProps {
    title: string;
    description: string;
    imageUrl: string; // Background image for the card
    link: string;
}

// Mock data for the expertise cards
// NOTE: Using the uploaded file "image_4a9677.jpg" as a placeholder background for all cards.
const EXPERTISE_CARDS: ExpertiseCardProps[] = [
    {
        title: "WEB DEVELOPMENT",
        description: "Building scalable, high-performance websites and custom digital platforms using modern frameworks.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/web-development",
    },
    {
        title: "UI/UX DESIGN",
        description: "Designing intuitive user interfaces and optimizing user experience flows for maximum engagement and conversion.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/ui-ux-design",
    },
    {
        title: "MARKETING PR",
        description: "Crafting and executing integrated marketing and public relations strategies to build brand authority and reach.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/marketing-pr",
    },
    {
        title: "APP DEVELOPMENT",
        description: "Creating native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/app-development",
    },
    {
        title: "VIDEO PRODUCTION",
        description: "Producing high-quality video content, from brand storytelling to product demos, that captures audience attention.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/video-production",
    },
    {
        title: "SOCIAL MEDIA",
        description: "Managing social media presence and campaigns across all major platforms to grow community and engagement.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/social-media",
    },
    {
        title: "24/7 SALES & SUPPORT",
        description: "Providing continuous, high-quality sales and customer support to ensure client satisfaction and operational efficiency.",
        imageUrl: "image_4a9677.jpg",
        link: "/services/sales-support",
    },
];

// Individual Card Component
const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <div 
            // ADDED: shadow on hover, and the transition-transform was already present
            className="group relative h-96 rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-navy/50 cursor-pointer"
            // Use inline style for the background image
            style={{ 
                // This uses the uploaded image file as the background
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay for text readability (starts dark, lightens on hover) */}
            <div className="absolute inset-0 bg-navy group-hover:bg-navy/85 transition-colors duration-300"></div>

            {/* Content Container (Top-Left positioning, similar to the image) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                
                {/* Title */}
                <h3 className="text-xl font-bold text-cream mb-2 uppercase tracking-wide">
                    {title}
                </h3>

                {/* Description (Hidden by default, shown on hover) */}
                <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>

                {/* Learn More Button/Link */}
                <a
                    href={link}
                    className="self-start px-6 py-2 border border-white text-white font-medium text-sm uppercase rounded-lg transition-all duration-300 hover:bg-white hover:text-navy hover:shadow-lg"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};


// Main Expertise Section Component
const Expertise: React.FC = () => {
    return (
        <section className="w-full py-20 bg-cream">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-4xl font-extrabold text-navy mb-4">
                    OUR EXPERTISE
                </h2>
                <p className="text-lg text-navy/70 mb-12">
                    Delivering strategic digital solutions that drive measurable results.
                </p>

                {/* Grid Container for the Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {EXPERTISE_CARDS.map((card, index) => (
                        <div 
                            key={index}
                            // FIXED LAYOUT ISSUE: 
                            // This ensures the last card spans 2 columns (full width) 
                            // only when sm:grid-cols-2 is active (sm screens and up).
                            // On the default grid-cols-1 (xs screens), it will naturally be full width.
                            className={index === EXPERTISE_CARDS.length - 1 ? 'sm:col-span-2' : ''}
                        >
                            <ExpertiseCard 
                                {...card}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Expertise;