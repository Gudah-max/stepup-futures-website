import React from 'react';
import { motion } from 'motion/react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-navy font-heading mb-4">{title}</h2>
    <div className="space-y-4 text-navy/70 leading-relaxed">{children}</div>
  </div>
);

const cookieTable = [
  { name: "_ga", provider: "Google Analytics", purpose: "Distinguishes users for analytics reporting", duration: "2 years", type: "Analytics" },
  { name: "_ga_*", provider: "Google Analytics", purpose: "Persists session state for Google Analytics 4", duration: "2 years", type: "Analytics" },
  { name: "_gid", provider: "Google Analytics", purpose: "Distinguishes users — expires after 24 hours", duration: "24 hours", type: "Analytics" },
  { name: "stepup_cookie_consent", provider: "StepUp Futures CIC", purpose: "Stores your cookie consent preference", duration: "1 year", type: "Functional" },
];

export default function CookiePage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-0 w-72 h-72 bg-orange rounded-full blur-[120px]" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">Legal</span>
            <h1 className="text-5xl font-bold font-heading mb-4">Cookie Policy</h1>
            <p className="text-white/70">Last updated: 1 April 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <Section title="1. What Are Cookies?">
              <p>Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They help websites function properly, remember your preferences, and provide information to website owners about how their site is being used.</p>
            </Section>

            <Section title="2. How We Use Cookies">
              <p>StepUp Futures CIC uses cookies on <strong>www.stepupfutures.org</strong> for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies</strong> — required for basic website functionality (e.g. storing your cookie consent preference).</li>
                <li><strong>Analytics cookies</strong> — help us understand how visitors interact with our website so we can improve it. We use Google Analytics for this purpose.</li>
              </ul>
              <p>We do not use advertising cookies, tracking cookies for retargeting, or cookies that share data with third-party advertisers.</p>
            </Section>

            <Section title="3. Cookies We Use">
              <p>The following table lists the cookies currently active on our website:</p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-light-grey">
                      <th className="text-left px-4 py-3 font-semibold text-navy border border-navy/10">Cookie Name</th>
                      <th className="text-left px-4 py-3 font-semibold text-navy border border-navy/10">Provider</th>
                      <th className="text-left px-4 py-3 font-semibold text-navy border border-navy/10">Purpose</th>
                      <th className="text-left px-4 py-3 font-semibold text-navy border border-navy/10">Duration</th>
                      <th className="text-left px-4 py-3 font-semibold text-navy border border-navy/10">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((row, i) => (
                      <tr key={i} className="border-b border-navy/5 hover:bg-light-grey/50 transition-colors">
                        <td className="px-4 py-3 font-mono text-xs border border-navy/10">{row.name}</td>
                        <td className="px-4 py-3 border border-navy/10">{row.provider}</td>
                        <td className="px-4 py-3 border border-navy/10">{row.purpose}</td>
                        <td className="px-4 py-3 border border-navy/10">{row.duration}</td>
                        <td className="px-4 py-3 border border-navy/10">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${row.type === 'Analytics' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{row.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="4. Your Cookie Choices">
              <p>When you first visit our website, you will be shown a cookie banner allowing you to accept or decline non-essential cookies. You can change your preference at any time by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clearing your browser cookies and revisiting our site to see the consent banner again</li>
                <li>Using your browser's built-in privacy settings to block or delete cookies</li>
                <li>Opting out of Google Analytics tracking via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              </ul>
              <p>Please note that declining cookies may affect some aspects of website functionality.</p>
            </Section>

            <Section title="5. Managing Cookies in Your Browser">
              <p>Most browsers allow you to control cookies through their settings. Here are links to cookie management guidance for the most popular browsers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Microsoft Edge</a></li>
              </ul>
            </Section>

            <Section title="6. Third-Party Cookies">
              <p>Google Analytics sets cookies on our behalf to help us understand how visitors use our site. Google may use the data collected to personalise ads across its own network. You can learn more about Google's privacy practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">policies.google.com/privacy</a>.</p>
            </Section>

            <Section title="7. Changes to This Policy">
              <p>We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our own practices. Any changes will be published on this page with an updated "Last Updated" date.</p>
            </Section>

            <Section title="8. Contact Us">
              <p>If you have questions about our use of cookies, please contact us:</p>
              <address className="not-italic bg-light-grey rounded-2xl p-6 text-navy/80">
                <strong>StepUp Futures CIC</strong><br />
                Email: <a href="mailto:info@stepupfutures.org" className="text-orange hover:underline">info@stepupfutures.org</a><br />
                Phone: <a href="tel:+447506285601" className="text-orange hover:underline">07506 285601</a>
              </address>
            </Section>

          </div>
        </div>
      </section>
    </div>
  );
}
