import React from 'react';
import { motion } from 'motion/react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-navy font-heading mb-4">{title}</h2>
    <div className="space-y-4 text-navy/70 leading-relaxed">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-72 h-72 bg-orange rounded-full blur-[120px]" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">Legal</span>
            <h1 className="text-5xl font-bold font-heading mb-4">Privacy Policy</h1>
            <p className="text-white/70">Last updated: 1 April 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <Section title="1. Who We Are">
              <p>StepUp Futures CIC ("we", "our", "us") is a Community Interest Company registered in England and Wales (Company Number: 13987644). Our registered address is in Coventry, West Midlands, United Kingdom.</p>
              <p>We operate the website at <strong>www.stepupfutures.org</strong> and provide careers education, employability training, and related services to schools, colleges, employers, and young people.</p>
              <p>For data protection matters, our contact is: <a href="mailto:info@stepupfutures.org" className="text-orange hover:underline">info@stepupfutures.org</a></p>
            </Section>

            <Section title="2. What Personal Data We Collect">
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> Name, email address, phone number, and organisation name — provided via our contact, booking, and support forms.</li>
                <li><strong>Communications:</strong> Messages and enquiries submitted through our website forms.</li>
                <li><strong>Usage data:</strong> IP address, browser type, pages visited, time on site, and referring URLs — collected automatically via cookies and analytics tools.</li>
                <li><strong>Newsletter subscribers:</strong> Email address and first name for those who subscribe to our mailing list.</li>
              </ul>
              <p>We do not knowingly collect personal data from children under the age of 13. If you believe a child has provided us with personal data, please contact us immediately.</p>
            </Section>

            <Section title="3. How We Use Your Data">
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to enquiries and booking requests</li>
                <li>To process partnership and volunteer applications</li>
                <li>To send our newsletter to subscribers (with your explicit consent)</li>
                <li>To improve our website and understand how visitors use it</li>
                <li>To comply with our legal obligations</li>
                <li>To protect the legitimate interests of StepUp Futures CIC</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing (UK GDPR)">
              <p>Under UK GDPR, we rely on the following lawful bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent</strong> — for newsletter subscriptions and non-essential cookies.</li>
                <li><strong>Legitimate interests</strong> — for responding to general enquiries and improving our services.</li>
                <li><strong>Contract</strong> — for processing bookings and service agreements.</li>
                <li><strong>Legal obligation</strong> — where required by law.</li>
              </ul>
            </Section>

            <Section title="5. Sharing Your Data">
              <p>We do not sell, rent, or trade your personal data to third parties. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Netlify</strong> — our website hosting and form processing provider (forms data is processed and stored securely).</li>
                <li><strong>Analytics providers</strong> — such as Google Analytics, to help us understand website usage (data is anonymised or pseudonymised where possible).</li>
                <li><strong>Email service providers</strong> — for sending newsletter communications to subscribers.</li>
                <li><strong>Legal or regulatory authorities</strong> — where required by law.</li>
              </ul>
            </Section>

            <Section title="6. Data Retention">
              <p>We retain personal data only for as long as necessary for the purposes described in this policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact and booking form data: up to 2 years from the date of submission</li>
                <li>Newsletter subscriber data: until you unsubscribe</li>
                <li>Website analytics data: up to 26 months (in line with Google Analytics defaults)</li>
              </ul>
            </Section>

            <Section title="7. Your Rights">
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access</strong> the personal data we hold about you</li>
                <li><strong>Rectify</strong> inaccurate or incomplete data</li>
                <li><strong>Erasure</strong> ("right to be forgotten") in certain circumstances</li>
                <li><strong>Restrict</strong> or <strong>object</strong> to processing</li>
                <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format</li>
                <li><strong>Withdraw consent</strong> at any time where processing is based on consent</li>
              </ul>
              <p>To exercise any of these rights, please email us at <a href="mailto:info@stepupfutures.org" className="text-orange hover:underline">info@stepupfutures.org</a>. We will respond within 30 days.</p>
              <p>You also have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">www.ico.org.uk</a>.</p>
            </Section>

            <Section title="8. Cookies">
              <p>We use cookies to improve your browsing experience and analyse site traffic. For full details, please read our <strong>Cookie Policy</strong>.</p>
            </Section>

            <Section title="9. Third-Party Links">
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to read their privacy policies.</p>
            </Section>

            <Section title="10. Security">
              <p>We take reasonable technical and organisational measures to protect your personal data from unauthorised access, loss, or disclosure. Our website uses HTTPS encryption and our form data is processed via secure third-party services.</p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.</p>
            </Section>

            <Section title="12. Contact Us">
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
              <address className="not-italic bg-light-grey rounded-2xl p-6 text-navy/80">
                <strong>StepUp Futures CIC</strong><br />
                Coventry, West Midlands, United Kingdom<br />
                Email: <a href="mailto:info@stepupfutures.org" className="text-orange hover:underline">info@stepupfutures.org</a><br />
                Phone: <a href="tel:+447506285601" className="text-orange hover:underline">07506 285601</a><br />
                Company Number: 13987644
              </address>
            </Section>

          </div>
        </div>
      </section>
    </div>
  );
}
