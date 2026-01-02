"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const RECIPIENT_NUMBER = "918920525465";

  const services = [
    "Branding & Identity",
    "Web Development",
    "UI/UX Design",
    "Digital Strategy",
    "SEO & Marketing",
    "Other"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;
    const serviceList = selectedServices.join(", ") || "None selected";

    const text = `*New Website Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Interested in:* ${serviceList}%0A*Message:* ${message}`;

    setTimeout(() => {
      window.open(`https://wa.me/${RECIPIENT_NUMBER}?text=${text}`, "_blank");
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-[#0b0618] via-[#120726] to-[#090411] text-white/80">
      <Navbar />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-[-20%] w-[600px] h-[600px] bg-purple-800/30 blur-[140px]" />
        <div className="absolute -bottom-40 left-[-20%] w-[500px] h-[500px] bg-indigo-800/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-[0.08]" />
      </div>

      <div className="relative z-10 flex-grow pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT */}
            <div>
              <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full bg-white/10 border border-white/20">
                Contact Us
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let’s build something{" "}
                <span className="italic bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  visionary.
                </span>
              </h1>

              <p className="text-white/70 mb-12 max-w-lg text-lg leading-relaxed">
                Whether you need a complete brand overhaul or a technical
                transformation, we are ready to help you scale.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-purple-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-white/60">syedah@theacumenarc.com</p>
                    <p className="text-white/60">info@theacumenarc.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-purple-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-white/60 max-w-md">
                      CIE, 4C (Gate 4), Jamia Millia Islamia, New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600/20 blur-[120px]" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">

                {isSuccess ? (
                  <div className="flex flex-col items-center text-center py-20">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/60 mb-8 max-w-xs">
                      Redirecting you to WhatsApp to complete your inquiry.
                    </p>
                    <Button variant="outline" onClick={() => {
                      setIsSuccess(false);
                      setSelectedServices([]);
                    }}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        id="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-1 focus:ring-purple-500 outline-none"
                      />
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="xyz@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-1 focus:ring-purple-500 outline-none"
                      />
                    </div>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="md:hidden w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-left flex justify-between items-center text-white"
                      >
                        <span className="truncate">
                          {selectedServices.length
                            ? selectedServices.join(", ")
                            : "Select Services..."}
                        </span>
                        <ChevronDown className={cn(isDropdownOpen && "rotate-180")} />
                      </button>

                      <div className={cn(
                        "flex flex-wrap gap-2 mt-2",
                        isDropdownOpen ? "block" : "hidden md:flex",
                        "md:static"
                      )}>
                        {services.map(service => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm border transition",
                              selectedServices.includes(service)
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-purple-400"
                            )}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about your goals, timeline, and budget..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:ring-1 focus:ring-purple-500 outline-none resize-none"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-white/40">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="underline hover:text-purple-400">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactUs;
