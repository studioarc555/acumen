"use client";
import { Send } from "lucide-react";

/**
 * CtaBanner component acts as a strong call-to-action section,
 * encouraging users to get in touch.
 */
export default function CTABut() {
    return (
        // Use a striking background color (navy) and generous padding
        <section className="w-full bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center">

                <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight tracking-tight">
                    Ready to Transform Your Digital Presence?
                </h2>

                <p className="mt-4 mb-8 text-lg text-navy/80 max-w-3xl">
                    Let's discuss your ambitious goals and craft a strategic plan 
                    to achieve measurable results.
                </p>

                {/* Contact Button */}
                <a
                    href="/contact"
                    className="px-8 py-3 rounded-full font-bold uppercase tracking-wider
                    border-2 border-cream
                    bg-cream text-navy
                    transition-all duration-300
                    flex items-center gap-2
                    hover:bg-transparent hover:text-navy hover:border-navy
                    hover:scale-105 shadow-xl hover:shadow-cream/30"
                >
                    <Send className="w-5 h-5" />
                    Get in Touch
                </a>

            </div>
        </section>
    );
}