"use client";

import React, { useEffect, useState, useRef } from 'react';

// Define types for the statistics data
interface Stat {
    id: number;
    target: number;
    suffix: string;
    label: string;
}

// Mock data for the statistics cards
const STATS: Stat[] = [
    { id: 1, target: 210, suffix: '+', label: 'Companies Partnered With' },
    { id: 2, target: 33, suffix: '%', label: 'Average Increase in ROI (MOM)' },
    { id: 3, target: 9, suffix: '+', label: 'Years of Industry Experience' },
];

// Mock data for client logos 
const CLIENT_LOGOS: string[] = [
    'Amanza', 
    'Astha Narang', 
    'Pomecha', 
    'Varun Bahl', 
    'Vasansi Jaipur', 
    // DSEnergize using the new custom logo
    'DSEnergize', 
    'Client Seven', 
    'Client Eight',
    
    // Duplicate the logos to ensure smooth infinite loop
    'Amanza', 
    'Astha Narang', 
    'Pomecha', 
    'Varun Bahl', 
    'Vasansi Jaipur', 
    'DSEnergize', 
    'Client Seven', 
    'Client Eight',
];

// Define props for StatCard to resolve implicit 'any' types (7031)
interface StatCardProps extends Stat {
    hasTriggered: boolean;
}

// --- 0. DSEnergize Logo Component using <img> tag ---
const DSEnergizeLogoImage: React.FC = () => (
    <div className="flex flex-col items-center justify-center"> {/* Container for image and text */}
        <img 
            // Use the filename provided by the user
            src="/assets/DSElog.png" 
            alt="DSEnergize Logo" 
            // Tailwind classes for styling and responsiveness (max-h-12 instead of 16 to fit text below)
            className="max-h-16 w-auto transition duration-300 group-hover:scale-105"
            // Fallback in case the image fails to load
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.style.display = 'none';
                // Simple text fallback if image fails
                console.error("DSElog.png failed to load. Displaying text fallback.");
            }}
        />
        {/* Added the requested text below the logo */}
        <p className="text-navy/70 text-sm font-semibold whitespace-nowrap mt-1">
            DSEnergize
        </p>
    </div>
);


// --- 1. Stat Card Component with Count-Up Effect ---
const StatCard: React.FC<StatCardProps> = ({ target, suffix, label, hasTriggered }) => {
    const [count, setCount] = useState<number>(0);

    // Simple count-up logic
    useEffect(() => {
        if (hasTriggered) {
            let start = 0;
            const end = target;
            const duration = 1500; // 1.5 seconds
            // Calculate increment based on duration and frame rate (~60fps = 16ms)
            const increment = end / (duration / 16); 

            const timer = setInterval(() => {
                start += increment;
                if (start < end) {
                    // Ensure the number is formatted correctly as an integer
                    setCount(Math.ceil(start));
                } else {
                    setCount(end);
                    clearInterval(timer);
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [target, hasTriggered]);

    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-navy/20 flex items-center justify-center mb-4 transition duration-500 ease-out hover:border-navy">
                <p className="text-4xl md:text-5xl font-extrabold text-navy">
                    {/* Using Intl.NumberFormat for cleaner number display */}
                    {new Intl.NumberFormat().format(count)}
                    {suffix}
                </p>
            </div>
            <p className="text-md md:text-lg font-semibold text-navy/80 mt-2">
                {label}
            </p>
        </div>
    );
};

// --- 2. Main Stats and Partners Component ---
const StatsandPart: React.FC = () => {
    // We now just trigger the stats on mount.
    const [statsTriggered, setStatsTriggered] = useState<boolean>(false);

    useEffect(() => {
        // Trigger the stats animation immediately on component mount
        setStatsTriggered(true);
    }, []);
    
    // Function to determine the content of the logo tile
    const renderLogoContent = (logo: string) => {
        if (logo === 'DSEnergize') {
            // Use the DSEnergize Logo Image Component, which now includes the text
            return <DSEnergizeLogoImage />;
        }
        
        // Default: Placeholder text for other logos
        return (
            <span className="text-navy/70 text-lg font-semibold whitespace-nowrap">
                {logo}
            </span>
        );
    };

    return (
        <section className="w-full py-16 bg-cream">
            <div className="mx-auto max-w-7xl px-6">
                
                {/* --- A. Statistics Cards --- */}
                <h2 className="text-3xl font-bold text-center text-navy mb-12">
                    Our Impact in Numbers
                </h2>
                <div className="flex flex-wrap justify-around gap-8 md:gap-4 mb-20">
                    {STATS.map(stat => (
                        <StatCard 
                            key={stat.id} 
                            {...stat} 
                            hasTriggered={statsTriggered} 
                        />
                    ))}
                </div>

                {/* --- B. Client Logo Carousel --- */}
                <h2 className="text-3xl font-bold text-center text-navy mb-12">
                    Trusted by Industry Leaders
                </h2>

                <div className="overflow-hidden w-full py-6">
                    {/* CSS for the infinite scroll animation */}
                    <style jsx>{`
                        @keyframes slide {
                            from {
                                transform: translateX(0);
                            }
                            to {
                                // Slide the width of the duplicated logos (half the total width)
                                transform: translateX(-50%); 
                            }
                        }
                        .client-track {
                            display: flex;
                            width: 200%; /* Double the content width for seamless looping */
                            animation: slide 30s linear infinite; /* 30 seconds loop time */
                        }
                        .client-logo {
                            flex-shrink: 0;
                            width: 12.5%; /* 1/8th of the 100% visible area */
                            opacity: 0.8; /* Slightly higher base opacity for visual logos */
                            transition: opacity 0.3s;
                        }
                        .client-logo:hover {
                            opacity: 1;
                        }
                    `}</style>
                    
                    <div className="client-track">
                        {CLIENT_LOGOS.map((logo, index) => (
                            <div 
                                key={index} 
                                className="client-logo flex items-center justify-center p-4 h-24 group" // Added 'group' for hover effect
                            >
                                {renderLogoContent(logo)}
                            </div>
                        ))}
                    </div>

                    {/* FADE OVERLAYS for better visual effect */}
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream/50 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream/50 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}

export default StatsandPart;