import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown, Menu, X, ArrowRight, MapPin, Phone, Mail,
  Linkedin, Instagram, Facebook, Twitter, BookOpen, Briefcase,
  GraduationCap, TrendingUp, Users, Wrench,
} from 'lucide-react';

// ── Button ─────────────────────────────────────────────────────────────────
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
}

export function Button({
  children, variant = 'primary', className = '',
  href, to, type = 'button', disabled, onClick, 'aria-label': ariaLabel,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg px-6 py-3 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 outline-none cursor-pointer';
  const variants: Record<string, string> = {
    primary: 'bg-orange text-white hover:bg-orange/90 shadow-md hover:shadow-lg hover:scale-[1.02]',
    secondary: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
    ghost: 'bg-transparent text-orange underline-offset-4 hover:underline px-0 py-0',
  };
  const cls = `${base} ${variants[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  if (to) return <Link to={to} className={cls} aria-label={ariaLabel}>{children}</Link>;
  if (href) return <a href={href} className={cls} aria-label={ariaLabel}>{children}</a>;
  return <button type={type} className={cls} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>{children}</button>;
}

// ── SectionHeading ──────────────────────────────────────────────────────────
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  eyebrow?: string;
}
export function SectionHeading({ title, subtitle, centered, light, eyebrow }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-widest uppercase text-orange mb-2">{eyebrow}</p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold mb-4 font-heading ${light ? 'text-white' : 'text-navy'}`}
      >{title}</motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'} ${light ? 'text-white/80' : 'text-navy/70'}`}
        >{subtitle}</motion.p>
      )}
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────
const aboutLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Meet the Team', to: '/about#team' },
  { label: 'Our Partners', to: '/about#partners' },
];
const serviceLinks = [
  { label: 'Careers Workshops & Assemblies', to: '/#services' },
  { label: 'Employability Skills Training', to: '/#services' },
  { label: 'Apprenticeship & University Guidance', to: '/#services' },
  { label: 'School & College Partnerships', to: '/#services' },
  { label: 'Personalised Career Coaching', to: '/#services' },
];
const programmeLinks = [
  { label: 'Step-Up to A Levels', to: '/programmes#alevels' },
  { label: 'Step-Up to College', to: '/programmes#college' },
  { label: 'Step-Up into Apprenticeships', to: '/programmes#apprenticeships' },
  { label: 'Step-Up to University', to: '/programmes#university' },
  { label: 'Step-Up to Work', to: '/programmes#work' },
];
const moreLinks = [
  { label: 'Our Impact', to: '/impact' },
  { label: 'Blog', to: '/blog' },
  { label: 'News', to: '/news' },
  { label: 'AI CV Tool (Coming Soon)', to: '/resume-tool' },
];

function DesktopDropdown({ label, links }: { label: string; links: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1 font-medium text-sm transition-colors hover:text-orange focus-visible:ring-2 focus-visible:ring-orange rounded outline-none"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-navy/8 overflow-hidden z-50"
          >
            {links.map(link => (
              <button
                key={link.to}
                onClick={() => { navigate(link.to); setOpen(false); }}
                className="w-full text-left block px-4 py-2.5 text-sm text-navy/80 hover:bg-light-grey hover:text-orange transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange outline-none"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navTextColor = transparent ? 'text-white/90' : 'text-navy';

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 focus-visible:ring-2 focus-visible:ring-orange rounded outline-none">
              <img
                src="/logo.png"
                alt="StepUp Futures CIC"
                className="h-12 w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>

            {/* Desktop nav */}
            <div className={`hidden md:flex items-center gap-6 ${navTextColor}`}>
              <Link
                to="/"
                className={`text-sm font-medium hover:text-orange transition-colors focus-visible:ring-2 focus-visible:ring-orange rounded outline-none ${pathname === '/' ? 'text-orange' : ''}`}
              >
                Home
              </Link>
              <DesktopDropdown label="About Us" links={aboutLinks} />
              <DesktopDropdown label="Services" links={serviceLinks} />
              <DesktopDropdown label="Our Programmes" links={programmeLinks} />
              <DesktopDropdown label="More" links={moreLinks} />
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Button to="/programmes" variant="primary" className="hidden md:inline-flex text-sm px-5 py-2.5">
                Book a Session
              </Button>
              <button
                className={`md:hidden p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-orange outline-none ${navTextColor}`}
                onClick={() => setMobileOpen(o => !o)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="fixed top-0 right-0 h-full w-80 bg-navy z-50 md:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <img src="/logo.png" alt="StepUp Futures CIC" className="h-10 w-auto brightness-0 invert" />
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-1" aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-5 space-y-1">
                <MobileNavLink to="/" label="Home" />
                <MobileSection label="About Us" links={aboutLinks} />
                <MobileSection label="Services" links={serviceLinks} />
                <MobileSection label="Our Programmes" links={programmeLinks} />
                <MobileSection label="More" links={moreLinks} />
              </nav>
              <div className="p-5 border-t border-white/10">
                <Link
                  to="/programmes"
                  className="block w-full text-center bg-orange text-white font-semibold py-3 rounded-lg hover:bg-orange/90 transition-colors"
                >
                  Book a Session
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <Link
          to="/#contact"
          className="flex items-center justify-center w-full bg-orange text-white font-semibold text-sm"
          style={{ height: '44px' }}
        >
          Book a Free Session
        </Link>
      </div>
    </>
  );
}

function MobileNavLink({ to, label }: { to: string; label: string }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        pathname === to ? 'bg-white/10 text-orange' : 'text-white/80 hover:bg-white/10 hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
}

function MobileSection({ label, links }: { label: string; links: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-3"
          >
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-sm text-white/60 hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Row 1: Logo + tagline + socials */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-xs">
            <img src="/logo.png" alt="StepUp Futures CIC" className="h-11 w-auto brightness-0 invert mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering young people across the West Midlands through free careers education, employability programmes, and skills development.
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { href: 'https://www.linkedin.com/company/francis-page-education-and-careers/', label: 'LinkedIn', Icon: Linkedin },
              { href: '#', label: 'Instagram', Icon: Instagram },
              { href: '#', label: 'Facebook', Icon: Facebook },
              { href: '#', label: 'Twitter/X', Icon: Twitter },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition-colors focus-visible:ring-2 focus-visible:ring-orange outline-none"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: 4-column link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-white/10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">About</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Our Story', to: '/about' },
                { label: 'Meet the Team', to: '/about#team' },
                { label: 'Our Partners', to: '/about#partners' },
                { label: 'Our Impact', to: '/impact' },
              ].map(l => (
                <li key={l.label}><Link to={l.to} className="text-white/60 text-sm hover:text-orange transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Programmes</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'A Levels', to: '/programmes#alevels' },
                { label: 'College', to: '/programmes#college' },
                { label: 'Apprenticeships', to: '/programmes#apprenticeships' },
                { label: 'University', to: '/programmes#university' },
                { label: 'Work', to: '/programmes#work' },
              ].map(l => (
                <li key={l.label}><Link to={l.to} className="text-white/60 text-sm hover:text-orange transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Blog', to: '/blog' },
                { label: 'News', to: '/news' },
                { label: 'AI CV Tool', to: '/resume-tool' },
                { label: 'Downloads', to: '/impact' },
              ].map(l => (
                <li key={l.label}><Link to={l.to} className="text-white/60 text-sm hover:text-orange transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-orange flex-shrink-0" />
                Coventry, West Midlands
              </li>
              <li>
                <a href="tel:07506285601" className="flex items-center gap-2 text-white/60 text-sm hover:text-orange transition-colors">
                  <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                  07506 285601
                </a>
              </li>
              <li>
                <a href="mailto:info@stepupfutures.org" className="flex items-center gap-2 text-white/60 text-sm hover:text-orange transition-colors">
                  <Mail className="w-4 h-4 text-orange flex-shrink-0" />
                  info@stepupfutures.org
                </a>
              </li>
              <li className="pt-1">
                <Link to="/programmes" className="inline-flex items-center gap-1.5 bg-orange text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange/90 transition-colors">
                  Book a Session <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3: Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-white/40 text-xs">
          <p>© {year} StepUp Futures CIC · Registered in England & Wales · No. 13987644</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-orange transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-orange transition-colors">Cookie Policy</Link>
            <Link to="/terms" className="hover:text-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── CookieBanner ───────────────────────────────────────────────────────────
interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}
export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-16 md:bottom-0 left-0 right-0 z-50 bg-navy border-t border-white/10 px-4 py-4"
      role="banner"
      aria-label="Cookie consent"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm">
          We use cookies to improve your experience.{' '}
          <Link to="/cookie-policy" className="text-orange hover:underline">Learn more</Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={onDecline}
            className="px-4 py-2 text-sm text-white/60 border border-white/20 rounded-lg hover:border-white/40 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 text-sm bg-orange text-white font-semibold rounded-lg hover:bg-orange/90 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </motion.div>
  );
}
