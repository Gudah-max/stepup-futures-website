import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  TrendingUp, Target, Heart, Users, Lightbulb,
  ArrowRight, Linkedin, Mail,
} from 'lucide-react';
import { SectionHeading, Button } from '../components/shared';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p {...fadeUp()} className="text-xs font-bold tracking-widest uppercase text-orange mb-4">
          About Us
        </motion.p>
        <motion.h1 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-bold text-white font-heading mb-5">
          About StepUp Futures CIC
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
          A community-rooted, mission-driven organisation helping young people across the West Midlands discover their potential and step confidently into their futures.
        </motion.p>
      </div>
    </section>
  );
}

// ── Our Story ─────────────────────────────────────────────────────────────────
function Story() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6">
              Started in a classroom. Grown into a movement.
            </h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              StepUp Futures CIC was founded in 2019 by Francis Page — a careers professional who saw first-hand how many young people in Coventry and the wider West Midlands were leaving school without a clear sense of direction, skills, or opportunity.
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">
              What began as free careers sessions delivered in local schools has grown into a structured organisation offering five distinct pathways, employer partnerships, and a suite of digital tools — all free at the point of delivery.
            </p>
            <p className="text-navy/70 leading-relaxed">
              As a registered Community Interest Company (No. 13987644), we are governed by a social purpose: every surplus we generate is reinvested into reaching more young people, training more volunteers, and building better programmes.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="rounded-2xl overflow-hidden border-l-4 border-orange shadow-xl">
              <img
                src="/partners-schools.jpg"
                alt="StepUp Futures working in partnership with schools"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { value: '2019', label: 'Founded in Coventry' },
                { value: '5', label: 'Free programmes' },
                { value: '50+', label: 'Partner schools' },
                { value: '10,000+', label: 'Young people reached' },
              ].map(stat => (
                <div key={stat.label} className="bg-light-grey rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-orange font-heading">{stat.value}</p>
                  <p className="text-navy/60 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Mission + Vision ──────────────────────────────────────────────────────────
function MissionVision() {
  return (
    <section className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Purpose" title="Mission & Vision" centered />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div {...fadeUp()} className="bg-navy rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-orange" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading mb-3">Our Mission</h3>
            <p className="text-white/70 leading-relaxed">
              To provide every young person in the West Midlands with access to high-quality, free careers education and employability support — regardless of their background, school, or starting point.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="bg-orange rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading mb-3">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              A West Midlands where every young person, from every background, has the knowledge, confidence and opportunity to step into a fulfilling and purposeful future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Values ────────────────────────────────────────────────────────────────────
const values = [
  { icon: <TrendingUp className="w-6 h-6" />, name: 'Growth', desc: 'We believe every young person has the capacity to learn, develop, and exceed expectations when given the right support.' },
  { icon: <Target className="w-6 h-6" />, name: 'Opportunity', desc: 'We work to level the playing field — making sure no young person misses out on opportunities because of their postcode or background.' },
  { icon: <Heart className="w-6 h-6" />, name: 'Empowerment', desc: 'Our goal is not to direct young people, but to give them the tools and confidence to direct themselves.' },
  { icon: <Users className="w-6 h-6" />, name: 'Community', desc: 'We are rooted in the communities we serve — working alongside families, schools, and employers, not around them.' },
  { icon: <Lightbulb className="w-6 h-6" />, name: 'Progress', desc: 'We measure our success by the outcomes of the young people we support, and we continuously improve our programmes to deliver more impact.' },
];

function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What We Stand For" title="Our values" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="border-t-4 border-orange bg-light-grey rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-4">{v.icon}</div>
              <h3 className="font-heading font-semibold text-navy text-lg mb-2">{v.name}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Meet the Team ─────────────────────────────────────────────────────────────
function Team() {
  return (
    <section id="team" className="py-24 bg-light-grey scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our People" title="Meet the team" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Francis Page — featured */}
          <motion.div {...fadeUp()} className="lg:col-span-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5">
            <div className="h-64 overflow-hidden">
              <img src="/team-francis.jpeg" alt="Francis Page — Director and Founder" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h3 className="font-heading font-semibold text-navy text-lg">Francis Page</h3>
                  <p className="text-orange text-sm font-medium">Director & Founder</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/francispage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Francis Page on LinkedIn"
                  className="w-8 h-8 rounded-lg bg-light-grey flex items-center justify-center text-navy/50 hover:text-orange hover:bg-orange/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-navy/60 text-sm leading-relaxed mt-2">
                Careers professional and social entrepreneur dedicated to reducing inequality in education and opportunity across the West Midlands.
              </p>
            </div>
          </motion.div>

          {/* Placeholder slots */}
          {['Careers Adviser', 'Programme Coordinator'].map((role, i) => (
            <motion.div key={role} {...fadeUp((i + 1) * 0.1)} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 border-dashed opacity-60">
              <div className="h-64 bg-light-grey flex items-center justify-center">
                <Users className="w-12 h-12 text-navy/20" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-navy/40 text-lg">Coming soon</h3>
                <p className="text-navy/30 text-sm">{role}</p>
              </div>
            </motion.div>
          ))}

          {/* Join the team card */}
          <motion.div {...fadeUp(0.3)} className="bg-navy rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center text-orange mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-2">Join Our Team</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We're growing. If you're passionate about careers education and youth development, we want to hear from you.
              </p>
            </div>
            <a
              href="mailto:info@stepupfutures.org"
              className="mt-6 inline-flex items-center gap-2 text-orange text-sm font-semibold hover:underline"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Volunteer callout */}
        <motion.div {...fadeUp(0.2)} className="mt-10 bg-orange/10 border border-orange/20 rounded-2xl p-6 text-center">
          <p className="text-navy font-semibold mb-1">We're always looking for mentors, speakers and career coaches.</p>
          <p className="text-navy/60 text-sm mb-4">Give back to the next generation. Your experience can change a young person's life.</p>
          <Button href="mailto:info@stepupfutures.org" variant="primary" className="text-sm px-5 py-2.5">
            <Mail className="w-4 h-4" /> Volunteer with us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ── Partners ──────────────────────────────────────────────────────────────────
const partnerLogos = [
  { src: '/partner-eden-girls.png', alt: 'Eden Girls School' },
  { src: '/partner-eden-boys.png', alt: 'Eden Boys School' },
  { src: '/partner-baskerville.png', alt: 'Baskerville School' },
  { src: '/partner-redsnapper.png', alt: 'Red Snapper Group' },
];

function Partners() {
  return (
    <section id="partners" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Partners" title="Schools, colleges & employers we work with" centered />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 items-center">
          {partnerLogos.map(logo => (
            <motion.div
              key={logo.alt}
              {...fadeUp()}
              className="flex items-center justify-center p-6 bg-light-grey rounded-xl"
            >
              <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </motion.div>
          ))}
          {/* Placeholder slots */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)} className="flex items-center justify-center p-6 bg-light-grey rounded-xl border-2 border-dashed border-navy/10 h-24">
              <span className="text-navy/30 text-xs font-medium">Partner logo</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-navy/50 text-sm mt-8">
          Interested in partnering with us?{' '}
          <Link to="/#contact" className="text-orange hover:underline font-medium">Get in touch →</Link>
        </p>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | StepUp Futures CIC</title>
        <meta name="description" content="Learn about StepUp Futures CIC — our story, mission, values, team and partners. A community interest company delivering free careers education across the West Midlands since 2019." />
        <meta property="og:title" content="About Us | StepUp Futures CIC" />
        <meta property="og:description" content="Our story, mission, values, team and partners — StepUp Futures CIC, Coventry." />
        <link rel="canonical" href="https://www.stepupfutures.org/about" />
      </Helmet>
      <Hero />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <Partners />
    </>
  );
}
