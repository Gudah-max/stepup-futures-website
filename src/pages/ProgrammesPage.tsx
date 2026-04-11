import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, X } from 'lucide-react';
import { Button, SectionHeading } from '../components/shared';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

interface Programme {
  num: string;
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  eligibility: string;
  img?: string;
}

const programmes: Programme[] = [
  {
    num: '01', id: 'alevels',
    title: 'STEP-UP TO A LEVELS',
    desc: 'For Year 11 students considering sixth form.',
    bullets: ['Subject choice guidance', 'Sixth form application support', 'Study skills and transition preparation'],
    eligibility: 'Year 11 · Ages 15–16',
    img: '/programme-alevels.jpeg',
  },
  {
    num: '02', id: 'college',
    title: 'STEP-UP TO COLLEGE',
    desc: 'Explore FE college options and get help with your application.',
    bullets: ['College and course exploration', 'Application and funding guidance', 'Interview and enrolment support'],
    eligibility: 'Year 11–12 · Ages 15–17',
  },
  {
    num: '03', id: 'apprenticeships',
    title: 'STEP-UP INTO APPRENTICESHIPS',
    desc: 'Discover apprenticeship routes and land your first role.',
    bullets: ['Vacancy research and matching', 'Application writing support', 'Interview coaching and workplace prep'],
    eligibility: 'Ages 16–24',
    img: '/service-employability.jpeg',
  },
  {
    num: '04', id: 'university',
    title: 'STEP-UP TO UNIVERSITY',
    desc: 'Navigate UCAS with confidence from start to finish.',
    bullets: ['Personal statement workshops', 'UCAS and open day preparation', 'Student finance explained simply'],
    eligibility: 'Year 12–13 · Ages 16–18',
    img: '/programme-alevels.jpeg',
  },
  {
    num: '05', id: 'work',
    title: 'STEP-UP TO WORK',
    desc: 'Build the skills and confidence to enter the job market.',
    bullets: ['CV building and LinkedIn setup', 'Job search strategies', 'Interview coaching and workplace readiness'],
    eligibility: 'Ages 16–25 · Any stage',
    img: '/programme-work.jpeg',
  },
];

// ── Booking Modal ─────────────────────────────────────────────────────────────
function BookingModal({ programme, onClose }: { programme: Programme; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-navy/40 hover:text-navy transition-colors" aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-navy font-bold text-xl mb-2">Booking request sent!</h3>
              <p className="text-navy/60 text-sm">We'll be in touch within 48 hours to confirm your place.</p>
              <button onClick={onClose} className="mt-6 text-orange text-sm font-semibold hover:underline">Close</button>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-bold text-navy text-xl mb-1">Book a Place</h3>
              <p className="text-orange text-sm font-medium mb-6">{programme.title}</p>
              <form
                name="booking"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="booking" />
                <input type="hidden" name="programme" value={programme.title} />
                <input type="text" name="bot-field" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-navy/70 mb-1.5">First name *</label>
                    <input name="first_name" required className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy/70 mb-1.5">Last name *</label>
                    <input name="last_name" required className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">Email *</label>
                  <input name="email" type="email" required className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">School / Organisation</label>
                  <input name="organization" className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy/70 mb-1.5">Message</label>
                  <textarea name="message" rows={3} className="w-full px-3 py-2.5 border border-navy/15 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
                </div>
                <button type="submit" className="w-full bg-orange text-white font-semibold py-3 rounded-lg hover:bg-orange/90 transition-colors text-sm">
                  Submit Booking Request
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Programme Card ─────────────────────────────────────────────────────────────
function ProgrammeCard({ p, index, onBook }: { p: Programme; index: number; onBook: (p: Programme) => void }) {
  return (
    <motion.article
      {...fadeUp(index * 0.08)}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 48px rgba(14,42,71,0.16)' }}
      id={p.id}
      className="relative bg-white rounded-2xl border border-navy/8 overflow-hidden shadow-sm scroll-mt-24 flex flex-col"
    >
      {/* Number watermark */}
      <span
        className="absolute top-2 right-3 font-heading font-bold text-navy/5 select-none pointer-events-none leading-none"
        style={{ fontSize: '5rem' }}
        aria-hidden="true"
      >
        {p.num}
      </span>

      {/* Image if available */}
      {p.img && (
        <div className="h-44 overflow-hidden">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Top border accent */}
        {!p.img && <div className="absolute top-0 left-0 right-0 h-1 bg-orange rounded-t-2xl" />}

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
            <button
              onClick={() => onBook(p)}
              className="flex-1 bg-orange text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-orange/90 transition-colors flex items-center justify-center gap-1.5"
            >
              Book a place <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to={`/about`}
              className="text-navy/50 text-xs hover:text-orange transition-colors underline-offset-2 hover:underline whitespace-nowrap"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-navy pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p {...fadeUp()} className="text-xs font-bold tracking-widest uppercase text-orange mb-4">
          All Free · 5 Pathways
        </motion.p>
        <motion.h1 {...fadeUp(0.08)} className="text-4xl md:text-5xl font-bold text-white font-heading mb-5">
          Find your next step.
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Every programme is free and designed around your situation — whether you're in school, college, or ready to work.
        </motion.p>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProgrammesPage() {
  const [bookingProgramme, setBookingProgramme] = useState<Programme | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Programmes | StepUp Futures CIC</title>
        <meta name="description" content="Five free career pathways for young people aged 14–25 in the West Midlands — A Levels, College, Apprenticeships, University, and Work. Apply today." />
        <meta property="og:title" content="Our Programmes | StepUp Futures CIC" />
        <meta property="og:description" content="Five free career pathways for young people in the West Midlands." />
        <link rel="canonical" href="https://www.stepupfutures.org/programmes" />
      </Helmet>

      <Hero />

      <section className="py-24 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <ProgrammeCard key={p.id} p={p} index={i} onBook={setBookingProgramme} />
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="mt-16 text-center bg-white rounded-2xl p-8 border border-navy/8 shadow-sm">
            <h3 className="font-heading font-semibold text-navy text-xl mb-3">
              Not sure which pathway is right for you?
            </h3>
            <p className="text-navy/60 text-sm mb-6 max-w-md mx-auto">
              Talk to our team and we'll help you find the best programme for your situation.
            </p>
            <Button href="mailto:info@stepupfutures.org" variant="primary">
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {bookingProgramme && (
        <BookingModal programme={bookingProgramme} onClose={() => setBookingProgramme(null)} />
      )}
    </>
  );
}
