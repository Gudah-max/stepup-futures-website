import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, BookOpen, Building2, Award, ArrowRight } from 'lucide-react';
import { SectionHeading, Button } from '../components/shared';

const stats = [
  { value: "50+", label: "Schools & Colleges Supported", icon: <Building2 className="w-7 h-7" /> },
  { value: "10,000+", label: "Young People Guided", icon: <Users className="w-7 h-7" /> },
  { value: "500+", label: "Workshops Delivered", icon: <BookOpen className="w-7 h-7" /> },
  { value: "85%", label: "Career Pathways Secured", icon: <TrendingUp className="w-7 h-7" /> },
  { value: "7+", label: "Years of Operation", icon: <Award className="w-7 h-7" /> },
  { value: "5", label: "Core Programmes", icon: <CheckCircle2 className="w-7 h-7" /> },
];

const outcomes = [
  {
    year: "2024–25",
    highlights: [
      "Delivered over 120 in-school workshops across the West Midlands",
      "Supported 8 new school partnerships meeting Gatsby Benchmark requirements",
      "Launched the Step-Up to Work community programme for NEET young people",
      "Began development of AI-powered CV Optimisation Tool",
    ],
  },
  {
    year: "2023–24",
    highlights: [
      "Reached over 3,200 students through careers assemblies and workshops",
      "Delivered Mock Interview Days with a 94% student satisfaction rate",
      "Expanded apprenticeship guidance provision to include Levels 2–6",
      "Supported 15 students into apprenticeship placements via bespoke coaching",
    ],
  },
  {
    year: "2022–23",
    highlights: [
      "Partnered with Baskerville School and 5 other institutions",
      "Facilitated 40+ employer encounters across partner schools",
      "Delivered first UCAS Personal Statement Masterclass series",
      "Achieved 100% positive feedback from school leads on programme quality",
    ],
  },
];

const caseStudies = [
  {
    title: "From NEET to Employed in 12 Weeks",
    desc: "A 19-year-old from Coventry who had been out of education and work for 8 months enrolled in our Step-Up to Work programme. Through personalised CV coaching, mock interviews, and job search strategy sessions, she secured a full-time customer service role within 12 weeks.",
    tag: "Step-Up to Work",
  },
  {
    title: "Apprenticeship Secured at a Major Engineering Firm",
    desc: "A Year 11 student who attended our Step-Up into Apprenticeships workshop learned how to identify Level 3 opportunities aligned to his interests. With support on his application and interview preparation, he secured a prestigious engineering apprenticeship.",
    tag: "Step-Up into Apprenticeships",
  },
  {
    title: "School Meets All 8 Gatsby Benchmarks",
    desc: "A secondary school in Birmingham partnered with us to improve their careers provision. Over two terms, we delivered employer encounters, LMI sessions, and 1:1 guidance, helping the school achieve full Gatsby Benchmark compliance for the first time.",
    tag: "School Partnership",
  },
];

export default function ImpactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">Our Impact</span>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Real Change for <span className="text-orange">Real Young People</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Since 2019, StepUp Futures CIC has been driving measurable change in careers education and youth employability across Coventry, Birmingham, and the wider West Midlands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Impact at a Glance" subtitle="Numbers that represent real young people whose futures we've helped shape." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-light-grey rounded-3xl p-8 text-center border border-navy/5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-orange/10 text-orange rounded-full flex items-center justify-center mb-4">{s.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-navy font-heading mb-2">{s.value}</div>
                <div className="text-navy/60 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Outcomes */}
      <section className="py-24 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Annual Outcomes" subtitle="A year-by-year look at the milestones we've achieved for young people and partner institutions." />
          <div className="space-y-8">
            {outcomes.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange text-white rounded-xl flex items-center justify-center font-bold text-sm font-heading">{o.year.slice(0, 4)}</div>
                  <h3 className="text-2xl font-bold text-navy font-heading">{o.year}</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {o.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-3 text-navy/70">
                      <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Stories of Change" subtitle="Behind every statistic is a person whose life we helped transform. Here are just a few of their stories." />
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-light-grey rounded-3xl p-8 border border-navy/5 flex flex-col">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full mb-6 self-start">{c.tag}</span>
                <h3 className="text-xl font-bold text-navy font-heading mb-4">{c.title}</h3>
                <p className="text-navy/70 leading-relaxed flex-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gatsby Benchmarks */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Aligned to the Gatsby Benchmarks" subtitle="All our programmes are designed to help schools evidence progress against every one of the 8 Gatsby Benchmarks." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["1", "A stable careers programme"],
              ["2", "Learning from career & labour market information"],
              ["3", "Addressing the needs of each pupil"],
              ["4", "Linking curriculum learning to careers"],
              ["5", "Encounters with employers & employees"],
              ["6", "Experiences of workplaces"],
              ["7", "Encounters with further & higher education"],
              ["8", "Personal guidance"],
            ].map(([num, label]) => (
              <motion.div key={num} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange font-heading mb-3">{num}</div>
                <p className="text-white/70 text-sm leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-heading mb-6">Want to Be Part of the Impact?</h2>
          <p className="text-white/80 text-lg mb-8">Partner with us, make a donation, or volunteer your expertise to help more young people step up to their futures.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" href="/#contact">Partner With Us</Button>
            <Button variant="outline" onClick={() => window.dispatchEvent(new CustomEvent('openSupportModal', { detail: 'Donate Now' }))}>Donate Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
