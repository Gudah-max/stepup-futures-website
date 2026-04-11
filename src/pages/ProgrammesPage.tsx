import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, X, Clock, Package, PoundSterling } from 'lucide-react';
import { Button, SectionHeading } from '../components/shared';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

interface PricingTier {
  label: string;
  price: string;
}
interface Programme {
  num: string;
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  eligibility: string;
  img?: string;
  whoFor: string;
  purpose: string;
  delivers: string[];
  deliveryOptions: string[];
  pricing: PricingTier[];
  bookingMsg: string;
}

const programmes: Programme[] = [
  {
    num: '01', id: 'alevels',
    title: 'STEP-UP TO A LEVELS',
    desc: 'For Year 11 students considering sixth form.',
    bullets: ['Subject choice guidance', 'Sixth form application support', 'Study skills and transition preparation'],
    eligibility: 'Year 11 · Ages 15–16',
    img: '/programme-alevels.jpeg',
    whoFor: 'Year 10–11 students preparing for post-16 education decisions.',
    purpose: 'To support informed subject choices and a confident transition into sixth form or further education.',
    delivers: [
      'Career-linked A-level subject selection workshops',
      'Post-16 school and college taster sessions',
      'Careers guidance interviews',
      'Personalised information, advice and guidance (IAG)',
      'Confidence and transition readiness workshops',
    ],
    deliveryOptions: ['Half-day or full-day workshops', '6–8 week transition programme', 'School-wide careers events'],
    pricing: [
      { label: 'Half-day workshop (up to 30 students)', price: '£450' },
      { label: 'Full-day workshop (up to 30 students)', price: '£800' },
      { label: '1:1 careers interview', price: '£85 per student' },
    ],
    bookingMsg: "I would like to book a Step-Up to A Levels workshop for my school. Please contact me to discuss availability, dates, and group size.",
  },
  {
    num: '02', id: 'college',
    title: 'STEP-UP TO COLLEGE',
    desc: 'Explore FE college options and get help with your application.',
    bullets: ['College and course exploration', 'Application and funding guidance', 'Interview and enrolment support'],
    eligibility: 'Year 11–12 · Ages 15–17',
    img: '/programme-college.jpeg',
    whoFor: 'Year 10–11 students and 16–18 learners exploring vocational pathways.',
    purpose: 'To increase awareness of vocational routes and support successful college applications.',
    delivers: [
      'Vocational pathway awareness sessions',
      'Personal statement guidance',
      'Mock interviews',
      'Employability skills workshops',
      'Industry insight sessions',
    ],
    deliveryOptions: ['Career Exploration Day', 'Mock interview session'],
    pricing: [
      { label: 'Career Exploration Day', price: '£900' },
      { label: 'Mock Interview Day (with feedback reports)', price: '£950' },
    ],
    bookingMsg: "I would like to book a Step-Up to College session. We are interested in exploring vocational college pathways with our students. Please get in touch to discuss options.",
  },
  {
    num: '03', id: 'apprenticeships',
    title: 'STEP-UP INTO APPRENTICESHIPS',
    desc: 'Discover apprenticeship routes and land your first role.',
    bullets: ['Vacancy research and matching', 'Application writing support', 'Interview coaching and workplace prep'],
    eligibility: 'Ages 16–24',
    img: '/service-employability.jpeg',
    whoFor: 'Young people aged 16–24 seeking apprenticeship opportunities.',
    purpose: 'To improve apprenticeship awareness, application success, and placement outcomes.',
    delivers: [
      'Apprenticeship pathway workshops (Levels 2–6)',
      'Apprenticeship search and application guidance',
      'CV and cover letter workshops',
      'Mock interviews and assessment centre simulations',
      'Workplace readiness and professional behaviour training',
    ],
    deliveryOptions: ['Workshops on Apprenticeships and how to search and apply'],
    pricing: [
      { label: 'Apprenticeship Awareness & Application workshop', price: '£650 per day' },
    ],
    bookingMsg: "I would like to book a Step-Up into Apprenticeships session. Please contact me to discuss the right format and dates for our group.",
  },
  {
    num: '04', id: 'university',
    title: 'STEP-UP TO UNIVERSITY',
    desc: 'Navigate UCAS with confidence from start to finish.',
    bullets: ['Personal statement workshops', 'UCAS and open day preparation', 'Student finance explained simply'],
    eligibility: 'Year 12–13 · Ages 16–18',
    img: '/programme-alevels.jpeg',
    whoFor: 'Year 12–13 students and adult learners considering higher education.',
    purpose: 'To support informed university decisions aligned to long-term career goals.',
    delivers: [
      'Career-to-degree pathway mapping',
      'UCAS personal statement workshops',
      'University interview preparation',
      'Student finance awareness sessions',
      'Confidence and leadership development workshops',
    ],
    deliveryOptions: ['Personal Statement Masterclass (1 day)', '1:1 university application support'],
    pricing: [
      { label: 'Personal Statement Workshop', price: '£750' },
      { label: '1:1 application support', price: '£95 per session' },
    ],
    bookingMsg: "I would like to book a Step-Up to University session. We are looking to support our Year 12/13 students with UCAS applications and university preparation. Please get in touch.",
  },
  {
    num: '05', id: 'work',
    title: 'STEP-UP TO WORK',
    desc: 'Build the skills and confidence to enter the job market.',
    bullets: ['CV building and LinkedIn setup', 'Job search strategies', 'Interview coaching and workplace readiness'],
    eligibility: 'Ages 16–30 · Any stage',
    img: '/programme-work.jpeg',
    whoFor: '16–30 year olds, NEET individuals, unemployed adults, and career changers.',
    purpose: 'To support sustainable employment and long-term career progression.',
    delivers: [
      'CV writing and personal branding workshops',
      'LinkedIn profile creation',
      'Job search strategy training',
      'Mock interviews and feedback',
      'Workplace communication and professional behaviour training',
      '1:1 coaching and in-work mentoring (optional add-on)',
    ],
    deliveryOptions: ['Half-day or full-day employability sessions', 'Group cohort programmes', '1:1 coaching packages'],
    pricing: [
      { label: 'Half-day Get Work Ready session', price: '£450' },
      { label: 'Full-day programme (up to 20 participants)', price: '£800' },
      { label: '1:1 coaching session', price: '£85 per session' },
    ],
    bookingMsg: "I would like to book a Step-Up to Work session for my organisation. Please contact me to discuss the format, group size, and available dates.",
  },
];

// ── Programme Card with inline expand ─────────────────────────────────────────
function ProgrammeCard({ p, index }: { p: Programme; index: number }) {
  const [expanded, setExpanded] = useState(false);

  // Build contact href
  const subject = encodeURIComponent(`Booking Enquiry: ${p.title}`);
  const body = encodeURIComponent(p.bookingMsg);
  const bookingHref = `mailto:info@stepupfutures.org?subject=${subject}&body=${body}`;

  return (
    <motion.article
      {...fadeUp(index * 0.08)}
      id={p.id}
      className="relative bg-white rounded-2xl border border-navy/8 overflow-hidden shadow-sm scroll-mt-24 flex flex-col"
    >
      {/* Image if available */}
      {p.img && (
        <div className="h-44 overflow-hidden">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
        </div>
      )}
      {/* Top border accent when no image */}
      {!p.img && <div className="absolute top-0 left-0 right-0 h-1 bg-orange rounded-t-2xl" />}

      {/* Number watermark */}
      <span
        className="absolute top-2 right-3 font-heading font-bold text-navy/5 select-none pointer-events-none leading-none"
        style={{ fontSize: '5rem' }}
        aria-hidden="true"
      >{p.num}</span>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-orange text-xs font-bold mb-3 relative">{p.num}</p>
        <h2 className="font-heading font-semibold text-navy text-lg mb-2 leading-snug relative">{p.title}</h2>
        <p className="text-navy/60 text-sm mb-4 relative">{p.desc}</p>

        <ul className="space-y-2 mb-5 relative flex-1">
          {p.bullets.map(b => (
            <li key={b} className="flex items-start gap-2 text-navy/70 text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>

        <div className="relative mt-auto">
          <span className="inline-block px-3 py-1 bg-orange/10 text-orange text-xs font-medium rounded-full mb-4">
            {p.eligibility}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={bookingHref}
              className="flex-1 bg-orange text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-orange/90 transition-colors flex items-center justify-center gap-1.5"
            >
              Book a place <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setExpanded(o => !o)}
              className="text-navy/50 text-xs hover:text-orange transition-colors underline-offset-2 hover:underline whitespace-nowrap flex items-center gap-1"
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Learn more'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Inline expand panel ── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-navy/8"
          >
            <div className="p-6 bg-light-grey space-y-6">

              {/* Who it's for + Purpose */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-orange text-xs font-bold uppercase tracking-widest mb-2">Who It's For</p>
                  <p className="text-navy/70 text-sm leading-relaxed">{p.whoFor}</p>
                </div>
                <div>
                  <p className="text-orange text-xs font-bold uppercase tracking-widest mb-2">Purpose</p>
                  <p className="text-navy/70 text-sm leading-relaxed">{p.purpose}</p>
                </div>
              </div>

              {/* What We Deliver */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-orange" />
                  <p className="text-navy text-sm font-bold">What We Deliver</p>
                </div>
                <ul className="space-y-2">
                  {p.delivers.map(d => (
                    <li key={d} className="flex items-start gap-2 text-navy/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Options + Pricing side by side */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-orange" />
                    <p className="text-navy text-sm font-bold">Delivery Options</p>
                  </div>
                  <ul className="space-y-1.5">
                    {p.deliveryOptions.map(d => (
                      <li key={d} className="flex items-start gap-2 text-navy/60 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy/30 flex-shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <PoundSterling className="w-4 h-4 text-orange" />
                    <p className="text-navy text-sm font-bold">Pricing Guide</p>
                  </div>
                  <ul className="space-y-1.5">
                    {p.pricing.map(tier => (
                      <li key={tier.label} className="flex items-start gap-2 text-navy/60 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-1.5" />
                        <span>{tier.label}: <strong className="text-navy">{tier.price}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA inside panel */}
              <a
                href={bookingHref}
                className="w-full bg-orange text-white text-sm font-semibold py-3 rounded-xl hover:bg-orange/90 transition-colors flex items-center justify-center gap-2"
              >
                Book this programme <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p {...fadeUp()} className="text-xs font-bold tracking-widest uppercase text-orange mb-4">
          5 Pathways · Structured Programmes
        </motion.p>
        <motion.h1 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-bold text-white font-heading mb-5">
          Find your next step.
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Structured careers and employability programmes designed around your situation — whether you're in school, college, or ready to work.
        </motion.p>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProgrammesPage() {
  return (
    <>
      <Helmet>
        <title>Our Programmes | StepUp Futures CIC</title>
        <meta name="description" content="Five structured career pathways for young people aged 14–30 in the West Midlands — A Levels, College, Apprenticeships, University, and Work. Book a session today." />
        <meta property="og:title" content="Our Programmes | StepUp Futures CIC" />
        <meta property="og:description" content="Five career pathways for young people in the West Midlands." />
        <link rel="canonical" href="https://www.stepupfutures.org/programmes" />
      </Helmet>

      <Hero />

      <section className="py-24 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <ProgrammeCard key={p.id} p={p} index={i} />
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="mt-16 text-center bg-white rounded-2xl p-8 border border-navy/8 shadow-sm">
            <h3 className="font-heading font-semibold text-navy text-xl mb-3">
              Not sure which programme is right for you?
            </h3>
            <p className="text-navy/60 text-sm mb-6 max-w-md mx-auto">
              Talk to our team and we'll help you find the best programme for your situation — whether you're a school, organisation, or young person.
            </p>
            <Button href="mailto:info@stepupfutures.org" variant="primary">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
