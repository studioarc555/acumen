import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const TermsOfService = () => {
  return (
    <>
      <Navbar />

      <section
        className="
          min-h-screen
          bg-gradient-to-br from-[#0b0618] via-[#120726] to-[#090411]
          text-white/80
          px-6 py-28
          relative overflow-hidden
        "
      >
        {/* Ambient glows */}
        <div className="absolute -top-40 right-[-20%] w-[600px] h-[600px] bg-purple-800/30 blur-[140px]" />
        <div className="absolute -bottom-40 left-[-20%] w-[500px] h-[500px] bg-indigo-800/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-[0.08]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-14 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              ⚖️ Terms of Use
            </h1>
            <p className="text-white/60 text-sm tracking-widest uppercase">
              The Acumen Arc
            </p>
          </div>

          {/* Meta */}
          <div className="mb-10 text-sm text-white/60">
            <p>
              <strong className="text-white/80">Update Date:</strong> 17-07-2025
            </p>
            <p>
              <strong className="text-white/80">Operated By:</strong>{" "}
              Fowlat Technologies Pvt. Ltd.
            </p>
            <p className="mt-2">
              <strong className="text-white/80">Trademark Notice:</strong> The Acumen Arc is a registered
              trademark and digital product developed by{" "}
              <strong>Fowlat Technologies Pvt. Ltd.</strong>, incorporated in Delhi
              under the Companies Act, 2013.
            </p>
          </div>

          {/* Content */}
          <div
            className="
              space-y-8
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8 md:p-12
              shadow-2xl
            "
          >
            <p>
              <strong className="text-white">1. Acceptance of Terms</strong>
              <br />
              By accessing or using <strong>theacumenarc.com</strong>, you agree
              to be bound by these Terms of Use, applicable laws, and regulations.
              If you do not agree with any part of these terms, you are prohibited
              from using this website or its services.
            </p>

            <div>
              <strong className="text-white">
                2. Corporate Identity and Purpose
              </strong>
              <br />
              This website, <strong>The Acumen Arc</strong>, is owned and operated
              by <strong>Fowlat Technologies Pvt. Ltd.</strong>, whose primary
              business activities include:
              <ul className="list-disc ml-6 mt-3 space-y-2 text-white/70">
                <li>
                  Construction and maintenance of power, telecommunication, and
                  transmission lines
                </li>
                <li>
                  Sourcing, developing, and deploying monitoring systems and
                  infrastructure services
                </li>
                <li>
                  Research-driven technology integration for energy and solar
                  analytics
                </li>
              </ul>
              These services fall under the scope described in Clause 3 of Fowlat
              Technologies' MOA.
            </div>

            <div>
              <strong className="text-white">3. Use License</strong>
              <br />
              You are granted a limited, non-exclusive, and non-transferable
              license to access and view content for personal, non-commercial use.
              You may not:
              <ul className="list-disc ml-6 mt-3 space-y-2 text-white/70">
                <li>Modify or copy any materials</li>
                <li>
                  Use content for commercial redistribution or public display
                </li>
                <li>
                  Reverse-engineer or replicate platform functions or dashboards
                </li>
                <li>Remove trademarks or copyright notices</li>
                <li>
                  Mirror content from theacumenarc.com elsewhere without
                  permission
                </li>
              </ul>
              This license is revoked upon breach and may be terminated at the
              company's discretion.
            </div>

            <div>
              <strong className="text-white">
                4. Account Security and Passwords
              </strong>
              <br />
              You agree to maintain the confidentiality of your login
              credentials. Sharing credentials or unauthorized access to RMS
              services is strictly prohibited.
              <ul className="list-disc ml-6 mt-3 space-y-2 text-white/70">
                <li>
                  Fowlat Technologies is not liable for data loss or misuse from
                  compromised passwords
                </li>
                <li>
                  Password requirements may be updated without prior notice
                </li>
              </ul>
            </div>

            <p>
              <strong className="text-white">5. Feature Availability</strong>
              <br />
              The Acumen Arc may introduce, modify, or remove features such as
              real-time alerts, Excel report exports, or WhatsApp integrations.
            </p>

            <p>
              <strong className="text-white">6. Intellectual Property</strong>
              <br />
              All dashboards, reports, software scripts, templates, data
              visualizations, and backend services are proprietary to{" "}
              <strong>Fowlat Technologies Pvt. Ltd.</strong>.
            </p>

            <div>
              <strong className="text-white">7. Service Disclaimer</strong>
              <br />
              The services are provided “as is.” We do not warrant:
              <ul className="list-disc ml-6 mt-3 space-y-2 text-white/70">
                <li>Accuracy or timeliness of performance data</li>
                <li>Error-free transmission of alerts or reports</li>
                <li>Compatibility with all device configurations</li>
                <li>Specific operational outcomes</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">
                8. Limitation of Liability
              </strong>
              <ul className="list-disc ml-6 mt-3 space-y-2 text-white/70">
                <li>System downtime or delayed notifications</li>
                <li>Loss of data, profits, or business opportunity</li>
                <li>Errors in third-party integrations</li>
              </ul>
            </div>

            <p>
              <strong className="text-white">9. Third-Party Links</strong>
              <br />
              We are not responsible for the content or policies of external
              services.
            </p>

            <p>
              <strong className="text-white">10. Governing Law</strong>
              <br />
              This agreement is governed by the laws of{" "}
              <strong>Delhi, India</strong>.
            </p>

            <p>
              <strong className="text-white">
                11. Corporate Disclosure
              </strong>
              <br />
              The Acumen Arc is operated in accordance with the Memorandum of
              Association of{" "}
              <strong>Fowlat Technologies Pvt. Ltd.</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfService;
