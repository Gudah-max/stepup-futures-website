import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Briefcase, GraduationCap, ShieldCheck, Users, BookOpen,
  Award, Cpu, CheckCircle2, BarChart3, HeartHandshake, Globe, Building2,
  Gift, UserPlus, PieChart, Mail, Phone, MapPin, X, ChevronRight
} from 'lucide-react';
import { Button, SectionHeading } from '../components/shared';

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy" aria-label="Hero">
    <div className="absolute inset-0">
      {/* Background photo */}
      <img
        src="/hero-bg.jpeg"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-center"
      />
      {/* Navy tint overlay — preserves text legibility */}
      <div className="absolute inset-0 bg-navy/70" />
      {/* Subtle orange gradient bottom-left for brand warmth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-orange/10" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
      <div className="max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-orange font-medium text-sm mb-6 border border-white/20 backdrop-blur-sm">
            Specialist Careers &amp; Employability Organisation
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-heading">
            Empowering Young People from <span className="text-orange">Education to Opportunity</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Guiding students across Coventry and the West Midlands into employment, apprenticeships, and higher education with confidence and clarity — aligned with the Gatsby Benchmarks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="gap-2 text-lg px-8" href="#contact">
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8" href="#programs">
              Explore Our Programmes
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8">
            {[["50+","Schools Supported"],["10,000+","Students Guided"],["500+","Workshops Delivered"],["85%","Career Pathways Secured"]].map(([v,l]) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-bold text-orange font-heading">{v}</div>
                <div className="text-white/70 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ── About ─────────────────────────────────────────────────────────────────────
const About = () => {
  const highlights = [
    { icon: <GraduationCap className="w-6 h-6 text-orange" />, title: "Careers Education & Guidance" },
    { icon: <Briefcase className="w-6 h-6 text-orange" />, title: "Real-World Employability Skills" },
    { icon: <ShieldCheck className="w-6 h-6 text-orange" />, title: "Gatsby Benchmark Compliance Support" },
  ];
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold tracking-widest text-orange uppercase mb-3">Who We Are</h2>
            <h3 className="text-4xl font-bold text-navy mb-6 font-heading">Shaping the Next Generation of Talent</h3>
            <p className="text-lg text-navy/70 leading-relaxed mb-4">
              STEPUP Futures CIC is a specialist careers and employability organisation founded in 2019, partnering with schools and colleges across the Greater Birmingham and Coventry region to deliver impactful, compliant, and inspiring careers education.
            </p>
            <p className="text-lg text-navy/70 leading-relaxed mb-8">
              We are a Community Interest Company driven by social purpose — every programme we deliver is designed to reduce inequality, raise aspiration, and help young people realise their potential.
            </p>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-light-grey border border-navy/5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">{item.icon}</div>
                  <span className="font-semibold text-navy">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-light-grey relative">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczOlYHH3Pz4N6-rthBxl6VrVh-EeFinO1XjUL_AOeQ1_DX6yk6QZzaaxpcpAAN6uaWi95Q8Y6Nj8YQXbgxPh7ppgLxu99z0_mPosz7-3UHOrmb6BXby71P5llhgXGosaLKAB2LoCvRgqYs2RxRO0fKxR=w1284-h790-s-no-gm?authuser=0"
                alt="Students collaborating in a career workshop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-navy/5 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center"><Award className="w-5 h-5 text-orange" /></div>
                <div className="font-bold text-navy text-xl">Since 2019</div>
              </div>
              <p className="text-sm text-navy/60 font-medium">Empowering futures across the Greater Birmingham &amp; Coventry region</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Services ──────────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    { icon: <Users />, title: "Careers Workshops & Assemblies", desc: "Engaging, age-appropriate sessions designed to inspire and inform students about the full range of career options available to them.", image: "https://lh3.googleusercontent.com/pw/AP1GczPXr3T32iVc4PhxnHTP4zygCYtTK1onINgAOJUYiMIGRl1kRl6Z8OvRuMy0FMdk77CxeBBdEa2ZAjysVd_viT-1bqT0dqUvTQiJI1yIHlAXbaMiQSAVeLa4k6NjV_jS91sIp4wezsDL2ngrJDD1URce=w1276-h923-s-no-gm?authuser=0" },
    { icon: <Briefcase />, title: "Employability Skills Training", desc: "Practical training in communication, teamwork, and problem-solving aligned with employer expectations for the modern workplace.", image: "https://lh3.googleusercontent.com/pw/AP1GczP3shMukQTy8RSSBGye__6WwyOL3X61qw3P3gu3IVJ50PyXmGmQJJinjg18wKWhaAebO9PGCF-7s4g9bG4JM0LEThCqg0joG2ShtRL39RlKClxF0BTKb_2MUUBdvdfZwfXPZu5ksAHNvCzTVbfP5yHS=w1228-h923-s-no-gm?authuser=0" },
    { icon: <GraduationCap />, title: "Apprenticeship & University Guidance", desc: "Expert advice on navigating UCAS applications, apprenticeship pathways, personal statements, and alternative progression routes.", image: "https://lh3.googleusercontent.com/pw/AP1GczMza2rZ3dz93tZVY89fC9sOdS2nFYlseAB2ddpVLU1X5RdDb4noEZFWfA2fRZyyD4p_jVkTmmkFAe38azfjE_WI64Ast37395oOWZPCJ6Nx1vFR-InRVmGJ_7o4f53I917JSBHjhTZaS2zP_jCSfR96=w1230-h923-s-no-gm?authuser=0" },
    { icon: <Building2 />, title: "School & College Partnerships", desc: "Strategic support to help institutions meet all 8 Gatsby Benchmarks and fulfil their statutory duty for careers provision.", image: "https://lh3.googleusercontent.com/pw/AP1GczMF8t_3AVm4vuy7N4qT_peiK_tJgp3ZhQfwEt8mAx89tumsW4_ibwK-B6wInUI5fO-xnH9S8YDeoJ7FbPMF_NhjxM5fXWVn1N_uYcgP9JBlG-vWbGBKEM9fdn0i_-pHBQotiZLWVlW5q4K9-GaITWLY=w1280-h720-s-no-gm?authuser=0" },
    { icon: <HeartHandshake />, title: "Personalised Career Coaching", desc: "One-on-one guidance helping students identify their strengths, explore options, and build actionable, personalised career plans.", image: "https://lh3.googleusercontent.com/pw/AP1GczMVSUrfa4xIryhgQrjwdgUySwyvSFg3HPU6CK226j4qOX-ekp3_-itsNTWrIRfSzAaCT4cX4G5W1SFitlik3OuVTe6Mq5JrxEWVxvIqKYvjjo6ejo1Qbo1UzU-99S-FH2xjsCQ3rJlXp5bw4coY5cL3=w1284-h829-s-no-gm?authuser=0" },
  ];
  return (
    <section id="services" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How We Support Young People" subtitle="Comprehensive, evidence-based services designed to bridge the gap between education and the professional world." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-navy/5 group overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden bg-navy/5">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm text-orange flex items-center justify-center shadow-sm">
                  {React.cloneElement(s.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-navy/60 leading-relaxed flex-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Booking Modal ─────────────────────────────────────────────────────────────
const BookingModal = ({ isOpen, onClose, selectedOption }: any) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd as any).toString() })
      .then(() => { setSuccess(true); setTimeout(() => { setSuccess(false); onClose(); }, 3000); })
      .catch(err => alert(err)).finally(() => setSubmitting(false));
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 text-navy/50 hover:text-navy"><X className="w-6 h-6" /></button>
        {success ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-orange/10 text-orange rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-8 h-8" /></div>
            <h2 className="text-3xl font-bold font-heading text-navy mb-4">Request Sent!</h2>
            <p className="text-navy/70 text-lg">Thank you for your booking request. We will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10"><h2 className="text-3xl font-bold font-heading text-navy mb-4">Book a Session</h2><p className="text-navy/70 text-lg">Fill out the form below to request a booking for one of our programmes.</p></div>
            <form name="booking" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="booking" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Programme / Session</label>
                <select name="programme" defaultValue={selectedOption} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" required>
                  <option value="" disabled>Select a session...</option>
                  <optgroup label="STEP-UP TO A LEVELS"><option value="A Levels - Workshop">Book a Workshop</option><option value="A Levels - 1:1 Session">Book a 1:1 career guidance session</option></optgroup>
                  <optgroup label="STEP-UP TO COLLEGE"><option value="College - Mock Interview">Book a mock interview session</option><option value="College - Career Exploration">Book a career exploration session</option></optgroup>
                  <optgroup label="STEP-UP INTO APPRENTICESHIPS"><option value="Apprenticeships - Session">Book your apprenticeship session</option></optgroup>
                  <optgroup label="STEP-UP TO UNIVERSITY"><option value="University - Preparation">Prepare for University with Confidence</option></optgroup>
                  <optgroup label="STEP-UP TO WORK"><option value="Work - Get Work Ready">Book your Get Work Ready session</option></optgroup>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-navy mb-2">First Name</label><input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="John" /></div>
                <div><label className="block text-sm font-medium text-navy mb-2">Last Name</label><input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="Doe" /></div>
              </div>
              <div><label className="block text-sm font-medium text-navy mb-2">Email Address</label><input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="john@example.com" /></div>
              <div><label className="block text-sm font-medium text-navy mb-2">School / Organisation</label><input type="text" name="organization" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="School or Company Name" /></div>
              <div><label className="block text-sm font-medium text-navy mb-2">Additional Details</label><textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 resize-none" placeholder="Any specific requirements or questions?" /></div>
              <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Booking Request'}</Button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

// ── Support Modal ─────────────────────────────────────────────────────────────
const SupportModal = ({ isOpen, onClose, selectedOption }: any) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd as any).toString() })
      .then(() => { setSuccess(true); setTimeout(() => { setSuccess(false); onClose(); }, 3000); })
      .catch(err => alert(err)).finally(() => setSubmitting(false));
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 text-navy/50 hover:text-navy"><X className="w-6 h-6" /></button>
        {success ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-orange/10 text-orange rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-8 h-8" /></div>
            <h2 className="text-3xl font-bold font-heading text-navy mb-4">Request Sent!</h2>
            <p className="text-navy/70 text-lg">Thank you. We will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10"><h2 className="text-3xl font-bold font-heading text-navy mb-4">Support &amp; Partner</h2><p className="text-navy/70 text-lg">Fill out the form below to get in touch.</p></div>
            <form name="support" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="support" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Inquiry Type</label>
                <select name="inquiry_type" defaultValue={selectedOption} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" required>
                  <option value="" disabled>Select an option...</option>
                  <option value="Book a Consultation">Book a Consultation</option>
                  <option value="Donate Now">Donate Now</option>
                  <option value="Partner as a Corporate Sponsor">Partner as a Corporate Sponsor</option>
                  <option value="Support the Mission Today">Support the Mission Today</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm font-medium text-navy mb-2">First Name</label><input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="John" /></div>
                <div><label className="block text-sm font-medium text-navy mb-2">Last Name</label><input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="Doe" /></div>
              </div>
              <div><label className="block text-sm font-medium text-navy mb-2">Email Address</label><input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="john@example.com" /></div>
              <div><label className="block text-sm font-medium text-navy mb-2">Organisation (Optional)</label><input type="text" name="organization" className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50" placeholder="Company or School Name" /></div>
              <div><label className="block text-sm font-medium text-navy mb-2">Message</label><textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 resize-none" placeholder="How would you like to partner or support us?" /></div>
              <div className="bg-light-grey p-6 rounded-2xl border border-navy/5">
                <h4 className="font-bold text-navy mb-2">Bank Details for Donations</h4>
                <p className="text-navy/70 text-sm font-mono">STEPUP FUTURES CIC<br />Sort code: 30-98-97<br />Account Number: 77208763<br />LLOYDS BANK</p>
              </div>
              <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</Button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

// ── Programs ──────────────────────────────────────────────────────────────────
const Programs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState('');
  const sessionMap: Record<string, string> = {
    "Book a Workshop": "A Levels - Workshop",
    "Book a 1:1 career guidance session": "A Levels - 1:1 Session",
    "Book a mock interview session": "College - Mock Interview",
    "Book a career exploration session": "College - Career Exploration",
    "Book your apprenticeship session": "Apprenticeships - Session",
    "Book here to Prepare for University with Confidence": "University - Preparation",
    "Book your Get Work Ready session here": "Work - Get Work Ready",
  };
  const open = (cta: string) => { setSelectedSession(sessionMap[cta] || ""); setModalOpen(true); };

  const programs = [
    { title: "STEP-UP TO A LEVELS", target: "Year 10–11 students preparing for post-16 education decisions.", purpose: "To support informed subject choices and a confident transition into sixth form or further education.", deliverables: ["Career-linked A-Level subject selection workshops","Post-16 options guidance sessions","Labour Market Information presentations","1:1 careers guidance interviews","Individual progression action plans","Parent/carer information sessions","Confidence and transition readiness workshops","Guest speaker and alumni career panels"], options: ["Half-day or full-day workshops","6-week transition programme","School-wide careers events"], pricing: ["Half-day workshop (up to 30 students): £450","Full-day workshop: £800","1:1 careers interview: £85 per student"], ctas: ["Book a Workshop","Book a 1:1 career guidance session"] },
    { title: "STEP-UP TO COLLEGE", target: "Year 10–11 students and 16–18 learners exploring vocational pathways.", purpose: "To increase awareness of vocational routes and support successful college applications.", deliverables: ["Vocational pathway awareness sessions","Personal statement guidance","Mock interviews","Employability skills workshops","Industry insight sessions"], options: ["Career Exploration Day","Mock interview session"], pricing: ["Career Exploration Day: £900","Mock Interview Day (with feedback reports): £950"], ctas: ["Book a mock interview session","Book a career exploration session"] },
    { title: "STEP-UP INTO APPRENTICESHIPS", target: "Young people aged 16–24 seeking apprenticeship opportunities.", purpose: "To improve apprenticeship awareness, application success, and placement outcomes.", deliverables: ["Apprenticeship pathway workshops (Levels 2–6)","Apprenticeship search and application guidance","CV and cover letter workshops","Mock interviews and assessment centre simulations","Workplace readiness and professional behaviour training"], options: [], pricing: ["Workshops on Apprenticeships and how to search and apply: £650 per day"], ctas: ["Book your apprenticeship session"] },
    { title: "STEP-UP TO UNIVERSITY", target: "Year 12–13 students and adult learners considering higher education.", purpose: "To support informed university decisions aligned to long-term career goals.", deliverables: ["Career-to-degree pathway mapping","UCAS personal statement workshops","University interview preparation","Student finance awareness sessions","Confidence and leadership development workshops"], options: ["Personal Statement Masterclass (1 day)","1:1 university application support"], pricing: ["Personal Statement Workshop: £750","1:1 application support: £95 per session"], ctas: ["Book here to Prepare for University with Confidence"] },
    { title: "STEP-UP TO WORK", target: "16–30 year olds, NEET individuals, unemployed adults, and career changers.", purpose: "To support sustainable employment and long-term career progression.", deliverables: ["CV writing and personal branding workshops","LinkedIn profile creation","Job search strategy training","Mock interviews and feedback","Workplace communication and professional behaviour training","1:1 coaching and in-work mentoring (optional add-on)"], options: [], pricing: [], ctas: ["Book your Get Work Ready session here"] },
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedOption={selectedSession} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Programmes" subtitle="Structured careers guidance and employability programmes designed to support young people and adults to progress confidently into further education, apprenticeships, university, and sustainable employment." />
        <div className="space-y-12">
          {programs.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-light-grey rounded-3xl p-8 md:p-12 border border-navy/5 shadow-sm">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4 font-heading">{p.title}</h3>
                  <div className="mb-6"><h4 className="text-sm font-bold tracking-widest text-orange uppercase mb-2">Who It's For</h4><p className="text-navy/80">{p.target}</p></div>
                  <div className="mb-8"><h4 className="text-sm font-bold tracking-widest text-orange uppercase mb-2">Purpose</h4><p className="text-navy/80">{p.purpose}</p></div>
                  <div className="flex flex-col gap-3">
                    {p.ctas.map((cta, ci) => (
                      <Button key={ci} variant={ci === 0 ? 'primary' : 'secondary'} className="w-full text-sm" onClick={() => open(cta)}>{cta}</Button>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-orange" /> What We Deliver</h4>
                    <ul className="space-y-3">{p.deliverables.map((d, di) => <li key={di} className="flex items-start gap-3 text-navy/70 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 shrink-0" /><span>{d}</span></li>)}</ul>
                  </div>
                  <div className="space-y-8">
                    {p.options.length > 0 && <div><h4 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-orange" /> Delivery Options</h4><ul className="space-y-3">{p.options.map((o, oi) => <li key={oi} className="flex items-start gap-3 text-navy/70 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-navy/30 mt-1.5 shrink-0" /><span>{o}</span></li>)}</ul></div>}
                    {p.pricing.length > 0 && <div><h4 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><PieChart className="w-5 h-5 text-orange" /> Pricing Guide</h4><ul className="space-y-3">{p.pricing.map((pr, pi) => <li key={pi} className="flex items-start gap-3 text-navy/70 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" /><span>{pr}</span></li>)}</ul></div>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── AI Feature ────────────────────────────────────────────────────────────────
const AIFeature = () => {
  const features = ["Instant CV Scoring","Keyword Optimisation for ATS","Personalised Improvement Suggestions","Skills Gap Identification","Career Path Recommendations"];
  return (
    <section id="ai-tool" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[150px]" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg"><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#ffffff" /></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" /></svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/20 text-orange border border-orange/30"><Cpu className="w-4 h-4" /><span className="text-sm font-bold uppercase tracking-wider">Key Innovation</span></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20"><span className="text-sm font-bold uppercase tracking-wider">Coming Soon</span></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">AI-Powered CV &amp; Resume Optimisation for Career Starters</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">An intelligent resume analysis system designed to help students and young professionals craft competitive, job-ready CVs that stand out to employers and pass ATS filters.</p>
            <ul className="space-y-4 mb-10">{features.map((f, i) => <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-orange shrink-0" /><span>{f}</span></motion.li>)}</ul>
            <Button variant="primary" className="gap-2 opacity-80 cursor-not-allowed">Coming Soon <ArrowRight className="w-5 h-5" /></Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
              <div className="text-white/50 text-sm font-mono">stepup-cv-analyser.ai</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4 border border-white/5"><div className="text-white/60 text-sm mb-1">Overall Score</div><div className="flex items-end gap-2"><span className="text-4xl font-bold text-white">85</span><span className="text-orange font-medium mb-1">/100</span></div><div className="w-full bg-white/10 h-2 rounded-full mt-3 overflow-hidden"><div className="bg-orange h-full w-[85%]" /></div></div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/5"><div className="text-white/60 text-sm mb-1">ATS Match</div><div className="flex items-end gap-2"><span className="text-4xl font-bold text-white">92</span><span className="text-green-400 font-medium mb-1">%</span></div><div className="w-full bg-white/10 h-2 rounded-full mt-3 overflow-hidden"><div className="bg-green-400 h-full w-[92%]" /></div></div>
            </div>
            <div className="space-y-3"><div className="text-white/80 font-medium mb-2">Improvement Suggestions</div>
              {[{text:"Add more quantifiable metrics to your experience section.",type:"warning"},{text:"Missing key industry skill: 'Data Analysis'.",type:"error"},{text:"Action verbs used effectively in recent roles.",type:"success"}].map((item,i)=>(
                <div key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5"><div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.type==='warning'?'bg-yellow-400':item.type==='error'?'bg-red-400':'bg-green-400'}`} /><span className="text-sm text-white/70">{item.text}</span></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ──────────────────────────────────────────────────────────────
const Testimonials = () => {
  const items = [
    { quote: "StepUp Futures completely transformed how our students think about their futures. The workshops were inspiring, practical, and perfectly pitched for our Year 11 cohort.", name: "Head of Sixth Form", org: "Baskerville School, Birmingham" },
    { quote: "The mock interview day was outstanding. Students came away with genuine confidence and actionable feedback. I'd recommend StepUp Futures to any school serious about careers provision.", name: "Careers Lead", org: "Secondary School Partner, West Midlands" },
    { quote: "As a young person who had no idea what direction to take, the 1:1 coaching gave me a clear plan and the belief that I could actually achieve it. I secured an apprenticeship within 3 months.", name: "Programme Graduate", org: "Step-Up to Work Participant" },
    { quote: "Our school has significantly improved our Gatsby Benchmark ratings since partnering with StepUp Futures. Their strategic approach to careers education is second to none.", name: "Assistant Principal", org: "College Partner, Coventry" },
  ];
  return (
    <section id="testimonials" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"><div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-[150px]" /></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="What People Say" subtitle="Real feedback from the schools, colleges, and young people we work with." light />
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-orange text-4xl font-serif mb-4">"</div>
              <p className="text-white/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div><p className="text-white font-semibold">{t.name}</p><p className="text-white/50 text-sm">{t.org}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Meet Team ─────────────────────────────────────────────────────────────────
const MeetOurTeam = () => (
  <section id="team" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Meet Our Team" subtitle="At StepUp Futures CIC, our work is led by a strong commitment to creating real opportunities for young people. Guided by passion, experience, and purpose, we focus on turning potential into progress." />
      <div className="grid md:grid-cols-1 gap-8 justify-center max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[2rem] overflow-hidden shadow-md group aspect-[4/5] bg-light-grey">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczOEFQ2SMk44Al8NnxC311xN-AvcAZ2VynQiKndoE7-BeXDRh087nB1X3-oGAt6RDmrQ_iIKd2BIAejHFj_UN5s1A44yejIT51W55gMZld6q2k5cBkbRKDb7Ktl5EpUBiiUKI_D1-WQk9UgK_aJdeCVr=w935-h923-s-no-gm?authuser=0"
            alt="Francis Page, Director of StepUp Futures CIC" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-lg">
              <div><h3 className="text-lg font-bold text-navy font-heading">Francis Page</h3><p className="text-navy/60 text-sm">Director & Founder</p></div>
              <a href="https://www.linkedin.com/in/francispage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors shrink-0" aria-label="Francis Page on LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ── Partners ──────────────────────────────────────────────────────────────────
const OurValuedPartners = () => {
  const partners = [
    { name: "Partner 1", logo: "https://lh3.googleusercontent.com/pw/AP1GczM8JxDQa1jJtJXsoocgf7YGMG_t0TMTMkMe3H6jrLif7wIyL_6yQSc3oha37wkUvN8IijYX46nErkev0DL_7yvvcG59YYBz0TbXcSFNyvWCeYydOfLELQ_cJYQYVDkLe2vXzJgZfmJOk_KqtqY4CMbt=w503-h182-s-no-gm?authuser=0" },
    { name: "Partner 2", logo: "https://lh3.googleusercontent.com/pw/AP1GczNIKx3LW-Qpo43uYW1UPgGIoS-8-7eb5DLSLYdA_sTmSpKesh2AEAtM_3URWTs_MgBPn7FPyO14j1SWHzmuN5q6azPBtTLLvPIa9uptgvnh3Q2DVkab_hdLJz1sUAAE2BvvjgM0rQQeX0DemKbdFU_R=w511-h182-s-no-gm?authuser=0" },
    { name: "Baskerville School", logo: "https://lh3.googleusercontent.com/pw/AP1GczOU9yXF3U3Qn9dqjOGFRS65RzqDDQc5eKLC22SETlTEoTusDjiPy4c7MoKGCabByzUUN9XhhhJ55oBoJHPoZuLEYq5azi8C7LZ_TDd-f5heAl9uC9vZmDEN22-aI_ZTtCCW74PTvfps2f4GuPoTjH-_=w773-h749-s-no-gm?authuser=0" },
    { name: "New Partner 1", logo: "https://lh3.googleusercontent.com/pw/AP1GczOgREksU6LRAptIEwyhMlhwxVRSWr0ILO9cm6_mWlv6Z5eoGWSLXsYJIuWYNb3u8JcsBfPiEZ0oOnuI32Nf_OvE3-ku-As-Qrzg5BXVKA6rQl5lDh_J3h8cBZHqB742HQiD1lTD6KNyypU9h4LC8dqo=w1181-h800-s-no-gm?authuser=0" },
    { name: "New Partner 2", logo: "https://lh3.googleusercontent.com/pw/AP1GczOQLkIgkjMfttVIkMHA1B8jRWKL6KufTgkNa5n7FthKYhp8gxgnePJvbtZEES2UkAFEoI8UKn-u4KR_gpQ60x4jWu9r2101QhM2eh-rUCFlik5jV81aBdEnpS9xz_Dm6hlk7lth8tDrBaIBOyok=w300-h138-s-no-gm?authuser=0" },
  ];
  const dup = [...partners, ...partners, ...partners, ...partners];
  return (
    <section aria-label="Our valued partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">Our Valued Partners</h2>
        <p className="text-navy/70 max-w-2xl mx-auto text-lg">Collaborating with leading institutions to create meaningful opportunities for young people.</p>
      </div>
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 md:gap-20 px-6">
          {dup.map((p, i) => (
            <div key={i} className="flex items-center justify-center min-w-[150px]">
              <img src={p.logo} alt={p.name} className="h-16 md:h-20 object-contain transition-all duration-300 opacity-80 hover:opacity-100" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Impact Stats ──────────────────────────────────────────────────────────────
const ImpactStats = () => {
  const stats = [
    { value: "50+", label: "Schools Supported" },
    { value: "10,000+", label: "Students Guided" },
    { value: "500+", label: "Workshops Delivered" },
    { value: "85%", label: "Career Pathways Secured" },
  ];
  return (
    <section id="impact" className="py-20 bg-orange text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Impact</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Measuring success through the real-world achievements of the young people we support.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">{s.value}</div>
              <div className="text-white/90 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Schools ───────────────────────────────────────────────────────────────────
const SchoolsColleges = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-light-grey rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">Partnering with Education Providers</h2>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">We help institutions deliver impactful careers provision aligned with the Gatsby Benchmarks while ensuring compliance with statutory requirements. Our tailored approach integrates seamlessly with your existing curriculum and CEIAG framework.</p>
            <div className="space-y-4 mb-8">
              {[{icon:<ShieldCheck className="w-5 h-5"/>,text:"Compliant &amp; Evidence-Based"},{icon:<BarChart3 className="w-5 h-5"/>,text:"Practical &amp; Measurable Outcomes"},{icon:<UserPlus className="w-5 h-5"/>,text:"Student Confidence Growth"}].map((item,i)=>(
                <div key={i} className="flex items-center gap-3 text-navy font-medium"><div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange shadow-sm">{item.icon}</div><span dangerouslySetInnerHTML={{__html:item.text}} /></div>
              ))}
            </div>
            <Button variant="primary" onClick={() => window.dispatchEvent(new CustomEvent('openSupportModal', { detail: 'Book a Consultation' }))}>Book a Consultation</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMxcNVdASuVuZ2cG29YjKPqYi-qK49xLxOx9ii2RHC0e5hZWncZTboWmGHmRi3VmIvsWtqFGPAUl6bfEKUCfMUq86q7sJ2d2ecpldn_LQDKcu24yVBK3AHEomyXF670bKoV7RAVDpKsSW_oL-4-ztcu=w1269-h923-s-no-gm?authuser=0" alt="Students in a careers workshop classroom" className="rounded-2xl h-48 w-full object-cover" referrerPolicy="no-referrer" />
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOK12uWMQY23r19sPc6wQiLrOQ1lYQVtXfnvnihaF5alTkpGYS-rNuHkAbQqpvcZFn8A7slUD5BEs5648KG7wW4WAK9dQi064dJCShzwsU4cSUJ-STwUtPsHiBFYE5aQcsQwjGGiVDFlCGjGFGqVl1l=w1256-h923-s-no-gm?authuser=0" alt="Teacher and student career guidance session" className="rounded-2xl h-48 w-full object-cover mt-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    { q: "Who do StepUp Futures CIC work with?", a: "We work with secondary schools, sixth forms, colleges, and community organisations across Coventry, Birmingham, and the wider West Midlands. We also work directly with young people aged 16–30 through our Step-Up to Work programme." },
    { q: "How do your programmes align with the Gatsby Benchmarks?", a: "All our programmes are designed with the 8 Gatsby Benchmarks in mind. From Labour Market Information sessions (Benchmark 2) to employer encounters (Benchmark 5) and personal guidance (Benchmark 8), we help schools evidence progress against every benchmark." },
    { q: "Can you deliver sessions in our school or college?", a: "Yes, we deliver sessions on-site at your school or college. We also offer virtual delivery options for certain programmes. Contact us to discuss how we can tailor our provision to your setting." },
    { q: "How much do your programmes cost?", a: "Pricing varies by programme and delivery format. Please refer to the Pricing Guide within each programme listing above, or contact us directly for a bespoke quote for your institution." },
    { q: "Do you support NEET young people?", a: "Yes. Our Step-Up to Work programme specifically targets 16–30 year olds who are NEET, unemployed, or seeking a career change. We provide CV support, interview coaching, and personalised career planning." },
    { q: "How can I donate or support StepUp Futures CIC?", a: "You can make a donation directly to our Lloyds Bank account (Sort: 30-98-97, Acc: 77208763) or get in touch via our contact form to discuss corporate sponsorship and partnership opportunities." },
  ];
  return (
    <section id="faq" className="py-24 bg-light-grey">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" subtitle="Answers to common questions from schools, partners, and young people." />
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-navy/5 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left font-semibold text-navy hover:text-orange transition-colors">
                <span>{item.q}</span><ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${open === i ? 'rotate-90' : ''}`} />
              </button>
              {open === i && <div className="px-6 pb-6 text-navy/70 leading-relaxed border-t border-navy/5 pt-4">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Make An Impact ────────────────────────────────────────────────────────────
const MakeAnImpact = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Help Us Shape the Next Generation of Opportunity" subtitle="Your support enables young people to gain confidence, clarity, and real pathways into employment, apprenticeships, and higher education." />
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center font-heading">Why Support STEPUP FUTURES CIC?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{icon:<UserPlus/>,title:"Empower Young People",desc:"Support students in building job-ready skills and confidence."},{icon:<Globe/>,title:"Bridge the Opportunity Gap",desc:"Help reduce barriers between education and employment."},{icon:<Building2/>,title:"Strengthen Local Communities",desc:"Invest in future talent across Coventry and the West Midlands."},{icon:<BarChart3/>,title:"Scalable, Measurable Impact",desc:"Your contribution supports structured, evidence-based career programmes."}].map((item,i)=>(
            <div key={i} className="bg-light-grey p-6 rounded-2xl shadow-sm border border-navy/5 text-center">
              <div className="w-12 h-12 mx-auto bg-orange/10 text-orange rounded-full flex items-center justify-center mb-4">{item.icon}</div>
              <h4 className="font-bold text-navy mb-2">{item.title}</h4>
              <p className="text-sm text-navy/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center font-heading">Ways to Get Involved</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-light-grey rounded-3xl p-8 shadow-sm border border-navy/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-bl-full" />
            <div className="flex items-center gap-4 mb-6 relative z-10"><div className="w-14 h-14 bg-orange text-white rounded-2xl flex items-center justify-center shadow-md"><Gift className="w-7 h-7" /></div><h4 className="text-2xl font-bold text-navy font-heading">Become a Donor</h4></div>
            <p className="text-navy/70 mb-6 relative z-10">Support our workshops, AI-powered CV tools, and personalised guidance programmes.</p>
            <ul className="space-y-3 mb-8 relative z-10">{["One-time donation option","Monthly supporter option","Corporate sponsorship opportunities"].map((item,i)=><li key={i} className="flex items-center gap-3 text-navy/80"><CheckCircle2 className="w-5 h-5 text-orange shrink-0" /><span>{item}</span></li>)}</ul>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button variant="primary" className="flex-1" onClick={() => window.dispatchEvent(new CustomEvent('openSupportModal', { detail: 'Donate Now' }))}>Donate Now</Button>
              <Button variant="secondary" className="flex-1" onClick={() => window.dispatchEvent(new CustomEvent('openSupportModal', { detail: 'Partner as a Corporate Sponsor' }))}>Corporate Sponsor</Button>
            </div>
          </div>
          <div className="bg-navy rounded-3xl p-8 shadow-sm relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="flex items-center gap-4 mb-6 relative z-10"><div className="w-14 h-14 bg-white/10 text-white border border-white/20 rounded-2xl flex items-center justify-center"><HeartHandshake className="w-7 h-7" /></div><h4 className="text-2xl font-bold font-heading">Become a Volunteer</h4></div>
            <p className="text-white/70 mb-6 relative z-10">Share your professional experience and help inspire the next generation.</p>
            <ul className="space-y-3 mb-8 relative z-10">{["Career Talks & School Workshops","CV & Interview Mentoring","Apprenticeship & Industry Insight Sessions","Corporate Mentorship Programmes"].map((item,i)=><li key={i} className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-5 h-5 text-orange shrink-0" /><span>{item}</span></li>)}</ul>
            <Button variant="primary" className="w-full relative z-10" href="#contact">Apply to Volunteer</Button>
          </div>
        </div>
      </div>
      <div className="bg-light-grey rounded-3xl p-8 md:p-12 shadow-sm border border-navy/5 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-navy mb-8 font-heading">Where Your Support Goes</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {[{label:"Career Workshops & Materials",icon:<BookOpen className="w-5 h-5"/>},{label:"AI CV Technology",icon:<Cpu className="w-5 h-5"/>},{label:"Student Mentorship",icon:<Users className="w-5 h-5"/>},{label:"School Partnerships",icon:<Building2 className="w-5 h-5"/>}].map((item,i)=>(
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-navy/80 font-medium text-sm"><span className="text-orange">{item.icon}</span>{item.label}</div>
          ))}
        </div>
        <p className="text-navy/60 italic">"We are committed to accountability, measurable outcomes, and sustainable impact."</p>
      </div>
    </div>
  </section>
);

// ── CTA Banner ────────────────────────────────────────────────────────────────
const CTABanner = () => (
  <section className="py-20 bg-gradient-to-t from-navy to-[#1a3f63] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay" />
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-navy to-transparent" />
    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">Together, We Can <span className="text-orange">Step Up Futures.</span></h2>
      <Button variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-orange/20" onClick={() => window.dispatchEvent(new CustomEvent('openSupportModal', { detail: 'Support the Mission Today' }))}>Support the Mission Today</Button>
    </div>
  </section>
);

// ── Newsletter ────────────────────────────────────────────────────────────────
const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd as any).toString() })
      .then(() => setSubmitted(true)).catch(err => alert(err)).finally(() => setSubmitting(false));
  };
  return (
    <section className="py-16 bg-light-grey border-t border-navy/5">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-navy font-heading mb-2">Stay in the Loop</h2>
        <p className="text-navy/60 mb-8">Get careers education updates, programme news, and impact stories delivered to your inbox.</p>
        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-orange font-semibold"><CheckCircle2 className="w-6 h-6" /> Thanks for subscribing!</div>
        ) : (
          <form name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
            <input type="text" name="first_name" placeholder="First name" className="flex-1 px-4 py-3 rounded-full border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" />
            <input type="email" name="email" required placeholder="Your email address" className="flex-1 px-4 py-3 rounded-full border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" />
            <Button type="submit" variant="primary" className="shrink-0" disabled={submitting}>{submitting ? 'Subscribing...' : 'Subscribe'}</Button>
          </form>
        )}
      </div>
    </section>
  );
};

// ── Contact ───────────────────────────────────────────────────────────────────
const Contact = () => {
  const [inquiryType, setInquiryType] = useState('partner');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handler = (e: any) => setInquiryType(e.detail);
    window.addEventListener('openContact', handler);
    return () => window.removeEventListener('openContact', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd as any).toString() })
      .then(() => { setSuccess(true); (e.target as HTMLFormElement).reset(); setTimeout(() => setSuccess(false), 5000); })
      .catch(err => alert(err)).finally(() => setSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-navy mb-6 font-heading">Let's Build Futures Together</h2>
            <p className="text-lg text-navy/70 mb-10">Whether you're a school looking to partner, a business wanting to sponsor, or a professional ready to volunteer, we'd love to hear from you.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-orange shrink-0"><Phone className="w-6 h-6" /></div><div><h4 className="font-bold text-navy mb-1">Phone</h4><a href="tel:+447506285601" className="text-navy/70 hover:text-orange transition-colors">07506 285601</a></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-orange shrink-0"><MapPin className="w-6 h-6" /></div><div><h4 className="font-bold text-navy mb-1">Headquarters</h4><p className="text-navy/70">Coventry, West Midlands<br />United Kingdom</p></div></div>
              <div className="flex items-start gap-4"><div className="w-12 h-12 bg-light-grey rounded-full flex items-center justify-center text-orange shrink-0"><Mail className="w-6 h-6" /></div><div><h4 className="font-bold text-navy mb-1">Email</h4><a href="mailto:hello@stepupfutures.org" className="text-navy/70 hover:text-orange transition-colors">hello@stepupfutures.org</a></div></div>
            </div>
          </div>
          <div className="bg-light-grey p-8 rounded-3xl">
            {success ? (
              <div className="text-center py-12 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-orange/10 text-orange rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 className="text-2xl font-bold font-heading text-navy mb-4">Message Sent!</h3>
                <p className="text-navy/70">Thank you for reaching out. We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
                <div><label className="block text-sm font-medium text-navy mb-1">Inquiry Type</label><select name="inquiry_type" value={inquiryType} onChange={e => setInquiryType(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" required><option value="partner">Partner With Us</option><option value="volunteer">Apply to Volunteer</option><option value="general">General Inquiry</option></select></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-navy mb-1">First Name</label><input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" placeholder="John" /></div>
                  <div><label className="block text-sm font-medium text-navy mb-1">Last Name</label><input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" placeholder="Doe" /></div>
                </div>
                <div><label className="block text-sm font-medium text-navy mb-1">Email Address</label><input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" placeholder="john@example.com" /></div>
                <div><label className="block text-sm font-medium text-navy mb-1">Organisation (Optional)</label><input type="text" name="organization" className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white" placeholder="School or Company Name" /></div>
                <div><label className="block text-sm font-medium text-navy mb-1">Message</label><textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white resize-none" placeholder="How can we help you?" /></div>
                <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-2" disabled={submitting}>{submitting ? 'Sending...' : 'Get in Touch Today'}</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── HomePage ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [supportOption, setSupportOption] = useState('');

  useEffect(() => {
    const handler = (e: any) => { setSupportOption(e.detail); setSupportModalOpen(true); };
    window.addEventListener('openSupportModal', handler);
    return () => window.removeEventListener('openSupportModal', handler);
  }, []);

  return (
    <>
      <SupportModal isOpen={supportModalOpen} onClose={() => setSupportModalOpen(false)} selectedOption={supportOption} />
      <Hero />
      <About />
      <Services />
      <Programs />
      <AIFeature />
      <MeetOurTeam />
      <Testimonials />
      <SchoolsColleges />
      <OurValuedPartners />
      <ImpactStats />
      <MakeAnImpact />
      <FAQ />
      <CTABanner />
      <Newsletter />
      <Contact />
    </>
  );
}
