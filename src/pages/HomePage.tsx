import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ChevronDown, GraduationCap, Briefcase, ShieldCheck,
  Users, BookOpen, Mic, Building2, Star, ChevronUp, CheckCircle2,
  TrendingUp, Award, Lightbulb, Mail,
} from 'lucide-react';
import { Button, SectionHeading } from '../components/shared';

// ── Animated Counter ────────────────────────────────────────────────────────
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -60]);
  const arrowOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src="/hero-bg.jpeg" alt="" aria-hidden="true" className="w-full h-full object-cover object-center scale-110" />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent" />
        {/* Fine grid texture */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.02 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Decorative "SF" watermark */}
      <div
        className="absolute bottom-0 right-0 font-heading font-bold text-white pointer-events-none select-none leading-none"
        style={{ fontSize: '22vw', opacity: 0.03 }}
        aria-hidden="true"
      >SF</div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <p className="font-mono text-orange text-xs font-bold tracking-widest uppercase mb-6">
            Coventry, West Midlands · Est. 2019
          </p>

          {/* H1 */}
          <h1 className="font-heading font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
            Step Up.<br />
            <em className="not-italic text-orange">Step Forward.</em><br />
            Step Into Your Future.
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Free careers education, employability programmes and skills development for young people across the West Midlands.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/programmes" variant="primary" className="text-base px-8 py-3.5">
              Explore Our Programmes <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="#contact" variant="outline" className="text-base px-8 py-3.5">
              Book a Free Session
            </Button>
          </div>

          {/* Stat counters */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
            {[
              { value: 50, suffix: '+', label: 'Schools Partnered' },
              { value: 10000, suffix: '+', label: 'Students Supported' },
              { value: 500, suffix: '+', label: 'Workshops Delivered' },
              { value: 85, suffix: '%', label: 'Positive Career Outcomes' },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="text-3xl font-bold text-orange font-heading">
                  <Counter value={value} suffix={suffix} />
                </div>
                <div className="text-white/60 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ── About Teaser ─────────────────────────────────────────────────────────────
function AboutTeaser() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">About StepUp Futures</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6">
              Born from community.<br />Built for the future.
            </h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              Founded in 2019 in Coventry, StepUp Futures CIC was created to address a simple but urgent problem — too many young people in the West Midlands were leaving school without the tools, confidence, or connections to navigate their futures. We started in classrooms, running careers sessions for free. We still do.
            </p>
            <p className="text-navy/70 leading-relaxed mb-8">
              As a Community Interest Company, every penny of surplus we generate goes back into delivering better programmes, training more volunteers, and reaching more young people who need us most.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Founded 2019 · Coventry', 'CIC · Not for profit', 'Director: Francis Page'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-navy text-white text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
            <Button to="/about" variant="ghost" className="text-base">
              Read our full story <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-l-4 border-orange shadow-xl">
              <img
                src="/service-schools.jpeg"
                alt="StepUp Futures in action — school partnerships"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange text-white font-bold px-5 py-3 rounded-xl shadow-lg text-sm">
              2,400+ lives changed
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────
const services = [
  { icon: <Mic className="w-6 h-6" />, title: 'Careers Workshops & Assemblies', desc: 'Inspiring, curriculum-aligned sessions delivered in schools and colleges across the West Midlands.', img: '/service-workshops.jpeg' },
  { icon: <Briefcase className="w-6 h-6" />, title: 'Employability Skills Training', desc: 'Practical training in CV writing, interview technique, and workplace readiness for young people.', img: '/service-employability.jpeg' },
  { icon: <GraduationCap className="w-6 h-6" />, title: 'Apprenticeship & University Guidance', desc: 'Expert, impartial guidance to help young people navigate post-16 and post-18 options confidently.', img: '/service-workshops.jpeg' },
  { icon: <Building2 className="w-6 h-6" />, title: 'School & College Partnerships', desc: 'Long-term Gatsby Benchmark-aligned partnerships supporting careers programme delivery.', img: '/service-schools.jpeg' },
  { icon: <Star className="w-6 h-6" />, title: 'Personalised Career Coaching', desc: 'One-to-one coaching sessions to help young people identify strengths, set goals, and take action.', img: '/service-coaching.jpeg' },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around young people"
          subtitle="Every service we offer is free at the point of delivery and designed to meet young people where they are."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: '0 16px 40px rgba(14,42,71,0.12)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 cursor-default"
            >
              <div className="h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-3">{s.icon}</div>
                <h3 className="font-heading font-semibold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Programmes Teaser ─────────────────────────────────────────────────────────
const programmes = [
  { num: '01', title: 'STEP-UP TO A LEVELS', desc: 'For Year 11 students considering sixth form.', eligibility: 'Year 11 · Ages 15–16', id: 'alevels' },
  { num: '02', title: 'STEP-UP TO COLLEGE', desc: 'Explore FE college options and get help with your application.', eligibility: 'Year 11–12 · Ages 15–17', id: 'college' },
  { num: '03', title: 'STEP-UP INTO APPRENTICESHIPS', desc: 'Discover apprenticeship routes and land your first role.', eligibility: 'Ages 16–24', id: 'apprenticeships' },
  { num: '04', title: 'STEP-UP TO UNIVERSITY', desc: 'Navigate UCAS with confidence from start to finish.', eligibility: 'Year 12–13 · Ages 16–18', id: 'university' },
  { num: '05', title: 'STEP-UP TO WORK', desc: 'Build the skills and confidence to enter the job market.', eligibility: 'Ages 16–25', id: 'work' },
];

function ProgrammesTeaser() {
  return (
    <section id="programs" className="py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-orange mb-2">All Free · 5 Pathways</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Find your next step.</h2>
          </div>
          <Button to="/programmes" variant="outline" className="self-start md:self-auto text-sm px-5 py-2.5">
            View all programmes <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:pb-0 snap-x snap-mandatory">
          {programmes.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex-shrink-0 w-64 md:w-auto snap-start bg-navy-mid border border-white/10 rounded-2xl p-6 overflow-hidden cursor-default"
            >
              {/* Number watermark */}
              <span className="absolute top-2 right-3 font-heading font-bold text-white/5 text-6xl leading-none select-none" aria-hidden="true">{p.num}</span>
              <div className="relative">
                <p className="text-orange text-xs font-bold mb-3">{p.num}</p>
                <h3 className="font-heading font-semibold text-white text-sm mb-2 leading-snug">{p.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-block px-2.5 py-1 bg-orange/15 text-orange text-xs rounded-full mb-4">{p.eligibility}</span>
                <div>
                  <Link to={`/programmes#${p.id}`} className="text-orange text-xs font-semibold hover:underline flex items-center gap-1">
                    Book a place <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-8 text-center">
          Not sure which pathway is right for you?{' '}
          <Link to="/about" className="text-orange hover:underline">Talk to our team →</Link>
        </p>
      </div>
    </section>
  );
}

// ── AI Feature ───────────────────────────────────────────────────────────────
function AIFeature() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">Free Tool</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-5">Get your CV noticed.</h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Our free AI CV Optimiser analyses your CV in seconds — finding gaps, boosting your language, and helping you beat ATS filters used by UK employers.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Free to use', 'No login required', 'Built for UK jobs'].map(badge => (
                <span key={badge} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-medium rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {badge}
                </span>
              ))}
            </div>
            <Button to="/resume-tool" variant="primary" className="text-base">
              Try the AI CV Tool <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">CV Score</p>
                <p className="text-white/50 text-xs">Instant AI analysis</p>
              </div>
            </div>
            {[['ATS Compatibility', 92], ['Impact & Language', 78], ['Keyword Match', 85], ['Structure', 95]].map(([label, val]) => (
              <div key={label as string}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/70">{label}</span>
                  <span className="text-orange font-medium">{val}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-orange rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Meet the Team Teaser ──────────────────────────────────────────────────────
function TeamTeaser() {
  return (
    <section id="team" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our People" title="Led by people who care" centered />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5"
          >
            <div className="h-64 overflow-hidden">
              <img src="/team-francis.jpeg" alt="Francis Page — Director and Founder" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-navy text-lg">Francis Page</h3>
              <p className="text-orange text-sm font-medium mb-2">Director & Founder</p>
              <p className="text-navy/60 text-sm">Careers professional and social entrepreneur committed to equity in education and opportunity for young people across the West Midlands.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 bg-navy rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-orange mb-4">Join the team</p>
              <h3 className="text-2xl font-bold text-white font-heading mb-4">
                We're always looking for mentors, speakers and career coaches.
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Give back to the next generation. Whether you have an hour a month or a day a week, your experience can change a young person's life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/about#team" variant="primary">Meet the full team</Button>
              <Button href="mailto:info@stepupfutures.org" variant="outline">Volunteer with us</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  { quote: "StepUp Futures completely changed how I saw my future. I went from having no idea what I wanted to do to landing an apprenticeship at a local engineering firm.", name: 'Amara, 18', role: 'Step-Up into Apprenticeships' },
  { quote: "The UCAS workshop was genuinely the most helpful thing I did in Year 13. My personal statement got three offers in one week.", name: 'Jordan, 18', role: 'Step-Up to University' },
  { quote: "Our school has worked with StepUp Futures for two years. They've transformed our careers programme and helped us meet every Gatsby Benchmark.", name: 'Sarah Mitchell', role: 'Head of Year, Partner School' },
  { quote: "I was NEET for eight months. After the Step-Up to Work programme, I had a job within six weeks. I can't thank them enough.", name: 'Callum, 22', role: 'Step-Up to Work' },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Stories" title="What young people say" centered />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-light-grey rounded-2xl p-6 border border-navy/5"
            >
              <p className="text-navy/80 leading-relaxed mb-5 italic">"{t.quote}"</p>
              <footer>
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-orange text-xs">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Partners Marquee ──────────────────────────────────────────────────────────
const partnerLogos = [
  { src: '/partner-eden-girls.png', alt: 'Eden Girls School' },
  { src: '/partner-eden-boys.png', alt: 'Eden Boys School' },
  { src: '/partner-baskerville.png', alt: 'Baskerville School' },
  { src: '/partner-redsnapper.png', alt: 'Red Snapper Group' },
];

function Partners() {
  return (
    <section className="py-16 bg-light-grey border-y border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-navy/40 mb-10">Trusted by schools & employers across the West Midlands</p>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Are your programmes really free?', a: 'Yes, completely. All StepUp Futures programmes are free for young people. We are a Community Interest Company and our funding comes from grants, partnerships, and employer contributions.' },
  { q: 'Who is eligible for your programmes?', a: 'Our programmes are designed for young people aged 14–25 in the West Midlands. Each programme has specific eligibility criteria — check the individual programme pages for details.' },
  { q: 'How do I book a session?', a: 'You can book directly through our website by filling in the contact form below, or by emailing info@stepupfutures.org. A member of our team will be in touch within 48 hours.' },
  { q: 'Do you work with schools and colleges?', a: 'Yes — we partner with schools and colleges to deliver Gatsby Benchmark-aligned careers programmes. If you are an education provider, get in touch to discuss a partnership.' },
  { q: 'What is the Gatsby Benchmark framework?', a: 'The Gatsby Benchmarks are eight guidelines for good careers guidance in schools, set out by the UK government. StepUp Futures helps schools and colleges meet all eight benchmarks through our structured programmes.' },
  { q: 'Can I use the AI CV Tool more than once?', a: 'Yes — our free AI CV Optimiser is available anytime, unlimited. No login required. Visit the tool on our website whenever you need to update or re-analyse your CV.' },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Common questions" centered />
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-navy/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left focus-visible:ring-2 focus-visible:ring-orange outline-none"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy text-sm">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-navy/50 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-navy/70 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="py-16 bg-orange">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-heading mb-3">Stay in the loop</h2>
        <p className="text-white/80 mb-8">Get careers tips, programme updates and free resources delivered to your inbox.</p>
        {submitted ? (
          <p className="text-white font-semibold text-lg">Thanks! You're on the list. 🎉</p>
        ) : (
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={() => setSubmitted(true)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="text" name="bot-field" className="hidden" aria-hidden="true" />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-navy text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-orange mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-5">Partner with us</h2>
            <p className="text-navy/70 leading-relaxed mb-8">
              Whether you're a school, employer, funder or young person looking for support — we'd love to hear from you.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Mail className="w-5 h-5" />, label: 'info@stepupfutures.org', href: 'mailto:info@stepupfutures.org' },
                { icon: <Users className="w-5 h-5" />, label: '07506 285601', href: 'tel:07506285601' },
              ].map(item => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 text-navy/70 hover:text-orange transition-colors text-sm">
                  <span className="text-orange">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy/5">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-navy font-bold text-lg mb-2">Message received!</h3>
                <p className="text-navy/60 text-sm">We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="bot-field" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-xs font-medium text-navy/70 mb-1.5">First name <span className="text-orange">*</span></label>
                    <input id="first_name" name="first_name" required className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-xs font-medium text-navy/70 mb-1.5">Last name <span className="text-orange">*</span></label>
                    <input id="last_name" name="last_name" required className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-navy/70 mb-1.5">Email <span className="text-orange">*</span></label>
                  <input id="email" name="email" type="email" required className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-xs font-medium text-navy/70 mb-1.5">Organisation</label>
                  <input id="organization" name="organization" className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-navy/70 mb-1.5">Message <span className="text-orange">*</span></label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
                </div>
                <button type="submit" className="w-full bg-orange text-white font-semibold py-3 rounded-lg hover:bg-orange/90 transition-colors text-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>StepUp Futures CIC | Free Careers Education for Young People | Coventry, West Midlands</title>
        <meta name="description" content="StepUp Futures CIC delivers free careers education, employability programmes and skills development for young people across Coventry and the West Midlands. Gatsby Benchmark aligned." />
        <meta property="og:title" content="StepUp Futures CIC | Free Careers Education for Young People" />
        <meta property="og:description" content="Free careers education and employability programmes for young people across the West Midlands." />
        <link rel="canonical" href="https://www.stepupfutures.org/" />
      </Helmet>
      <Hero />
      <AboutTeaser />
      <Services />
      <ProgrammesTeaser />
      <AIFeature />
      <TeamTeaser />
      <Testimonials />
      <Partners />
      <FAQ />
      <Newsletter />
      <Contact />
    </>
  );
}
