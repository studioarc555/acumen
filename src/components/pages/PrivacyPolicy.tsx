import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const PrivacyPolicy = () => {
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
        {/* Ambient Glows */}
        <div className="absolute -top-40 right-[-20%] w-[600px] h-[600px] bg-purple-800/30 blur-[140px]" />
        <div className="absolute -bottom-40 left-[-20%] w-[500px] h-[500px] bg-indigo-800/25 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-[0.08]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-14 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              🔐 Privacy Policy
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
              <strong className="text-white/80">Operated by:</strong>{" "}
              Fowlat Technologies Pvt. Ltd.
            </p>
            <p className="mt-2">
              <strong className="text-white/80">Trademark:</strong> The Acumen Arc
              <br />
              <strong className="text-white/80">Contact Emails:</strong>{" "}
              sales@theacumenarc.com | bde@theacumenarc.com
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
              <strong className="text-white">1. Overview</strong>
              <br />
              At The Acumen Arc, we are committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your information
              when you visit <strong>theacumenarc.com</strong> or use our
              services related to solar plant monitoring, WhatsApp alerts, and
              automated reports.
            </p>

            <div>
              <strong className="text-white">2. Information We Collect</strong>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Personal Info:</strong> Name, email address, company
                  details submitted via forms or support queries
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  device details, and usage analytics
                </li>
                <li>
                  <strong>Service Data:</strong> Solar plant metrics, alert
                  configurations, and report history (for registered users)
                </li>
              </ul>
            </div>

            <div>
              <strong className="text-white">
                3. How We Use Your Information
              </strong>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Provide dashboard access and deliver real-time alerts</li>
                <li>Send daily, weekly, or monthly Excel reports</li>
                <li>Respond to inquiries and system updates</li>
                <li>Improve performance, security, and reliability</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">4. Data Storage & Security</strong>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Data stored on secure, restricted servers</li>
                <li>Encrypted databases such as MongoDB may be used</li>
                <li>Commercially reasonable security safeguards applied</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">5. Sharing & Disclosure</strong>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>No sale of personal data</li>
                <li>Third-party tools only for service delivery</li>
                <li>Legal or policy enforcement requirements</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">6. Cookies & Tracking</strong>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>System optimization analytics</li>
                <li>User preference storage</li>
              </ul>
            </div>

            <div>
              <strong className="text-white">7. Your Rights</strong>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Request access or correction of data</li>
                <li>Request deletion of personal information</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>

            <p>
              <strong className="text-white">8. Third-Party Links</strong>
              <br />
              External links may be provided. We are not responsible for their
              privacy practices.
            </p>

            <p>
              <strong className="text-white">9. Children's Privacy</strong>
              <br />
              We do not knowingly collect data from individuals under 13 years
              of age.
            </p>

            <p>
              <strong className="text-white">10. Policy Updates</strong>
              <br />
              Updates will be reflected on this page with revised dates.
            </p>

            <p>
              <strong className="text-white">
                11. Corporate Entity Disclosure
              </strong>
              <br />
              The Acumen Arc is owned and operated by{" "}
              <strong>Fowlat Technologies Pvt. Ltd.</strong>, incorporated under
              the Companies Act, 2013 (India).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
