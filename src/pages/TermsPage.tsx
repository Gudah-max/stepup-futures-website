import React from 'react';
import { motion } from 'motion/react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-navy font-heading mb-4">{title}</h2>
    <div className="space-y-4 text-navy/70 leading-relaxed">{children}</div>
  </div>
);

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 right-0 w-72 h-72 bg-orange rounded-full blur-[120px]" /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">Legal</span>
            <h1 className="text-5xl font-bold font-heading mb-4">Terms of Service</h1>
            <p className="text-white/70">Last updated: 1 April 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <Section title="1. About Us">
              <p>These Terms of Service govern your use of the website <strong>www.stepupfutures.org</strong> and any services provided by <strong>StepUp Futures CIC</strong>, a Community Interest Company registered in England and Wales (Company Number: 13987644), with its principal place of business in Coventry, West Midlands, United Kingdom.</p>
              <p>By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.</p>
            </Section>

            <Section title="2. Use of Our Website">
              <p>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates applicable local, national, or international laws or regulations</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
                <li>Introduce viruses, trojans, worms, or other malicious or technologically harmful material</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </Section>

            <Section title="3. Our Services">
              <p>StepUp Futures CIC provides careers education, employability training, and related consultancy services. Details of our programmes and services are described on the website for information purposes only. All services are subject to a separate written agreement between StepUp Futures CIC and the client.</p>
              <p>Pricing information on the website is indicative and subject to change. A confirmed quote will be provided upon request.</p>
            </Section>

            <Section title="4. Intellectual Property">
              <p>All content on this website, including but not limited to text, images, logos, graphics, and code, is the property of StepUp Futures CIC or its licensors and is protected by applicable intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission, except for personal, non-commercial use.</p>
            </Section>

            <Section title="5. Third-Party Links">
              <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </Section>

            <Section title="6. Disclaimers">
              <p>Our website and its content are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the accuracy, completeness, or suitability of the information provided.</p>
              <p>We do not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>To the fullest extent permitted by law, StepUp Futures CIC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services.</p>
              <p>Nothing in these Terms limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.</p>
            </Section>

            <Section title="8. Privacy">
              <p>Your use of our website is also governed by our <strong>Privacy Policy</strong> and <strong>Cookie Policy</strong>, which are incorporated into these Terms by reference.</p>
            </Section>

            <Section title="9. Governing Law">
              <p>These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </Section>

            <Section title="10. Changes to These Terms">
              <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website following any changes constitutes your acceptance of the revised Terms.</p>
            </Section>

            <Section title="11. Contact Us">
              <p>If you have any questions about these Terms, please contact us:</p>
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
