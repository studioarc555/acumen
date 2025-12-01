"use client";

import React from 'react';
import { Quote } from 'lucide-react';

/**
 * Component displaying a note or short article excerpt from the company's leadership or an author.
 */
const AuthorNote: React.FC = () => {
    // Content data
    const fullArticleLink = "/blog/author-vision-2025";
    const authorName = "Syedah Fatma, Founder";
    const authorTitle = "Visionary & Lead Strategist";
    // Short excerpt for the homepage display
    const excerpt = "In the rapidly evolving digital landscape, true success isn't about chasing the next trend—it's about building a foundational brand narrative that resonates deeply. Our commitment at The Acumen Arc is to be the architects of that foundation, ensuring every digital touchpoint is strategic, sustainable, and undeniably human. We believe in growth fueled by clarity and purpose, not just clicks. This is the Acumen difference.";

    return (
        <section className="w-full py-16 bg-cream">
            <div className="mx-auto max-w-7xl px-6">
                <div className="bg-navy/90 p-8 md:p-12 rounded-2xl shadow-xl border border-blue-200 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Author Image/Quote Icon */}
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy/10 flex items-center justify-center relative">
                        {/* Placeholder for Author Image - Can be replaced with a real image URL */}
                        <img 
                            src="https://placehold.co/160x160/F8F4E3/1A2E44?text=Author" 
                            alt={`Profile of ${authorName}`}
                            className="w-full h-full object-cover rounded-full shadow-lg"
                        />
                        {/* Quote Icon Overlay */}
                        <div className="absolute bottom-0 right-0 p-2 bg-navy rounded-full shadow-lg">
                            <Quote className="w-6 h-6 text-cream" fill="#F8F4E3" />
                        </div>
                    </div>

                    {/* Right Column: Note Content and CTA */}
                    <div className="flex-grow">
                        <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">
                            A Note From Our CEO
                        </h2>
                        
                        <p className="text-lg text-cream/70 font-700 italic mb-6 leading-relaxed">
                            &ldquo;{excerpt}&rdquo;
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            {/* Author Info */}
                            <div className="text-sm font-medium text-navy">
                                <span className="block font-semibold text-cream">{authorName}</span>
                                <span className="block text-cream">{authorTitle}</span>
                            </div>
                            
                            {/* Read More Button */}
                            <a
                                href={fullArticleLink}
                                className="self-start sm:self-auto px-6 py-3 rounded-xl font-medium cursor-pointer
                                bg-navy text-cream shadow-md
                                transition-all duration-300
                                hover:bg-cream hover:text-navy hover:scale-[1.03] flex items-center justify-center"
                            >
                                Read Full Article &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorNote;