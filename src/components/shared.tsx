import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Menu, X, ChevronDown, MapPin, Phone, Mail,
  Linkedin
} from 'lucide-react';

export const Button = ({ children, variant = 'primary', className = '', href, type, disabled, onClick }: any) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ease-in-out";
  const variants: Record<string, string> = {
    primary: "bg-orange text-white hover:bg-orange/90 shadow-md hover:shadow-lg",
    secondary: "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy",
    ghost: "bg-transparent text-navy hover:bg-light-grey",
  };
  const cls = `${base} ${variants[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  if (href) return <a href={href} className={cls} onClick={onClick}>{children}</a>;
  return <button type={type || 'button'} className={cls} onClick={onClick} disabled={disabled}>{children}</button>;
};

export const SectionHeading = ({ title, subtitle, centered = true, light = false }: any) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}
    >{title}</motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-navy/70'}`}
      >{subtitle}</motion.p>
    )}
  </div>
);

const NavDropdown = ({ title, links, scrolled, activeDropdown, setActiveDropdown, navigate }: any) => {
  const isOpen = activeDropdown === title;
  return (
    <div className="relative group" onMouseEnter={() => setActiveDropdown(title)} onMouseLeave={() => setActiveDropdown(null)}>
      <button className={`flex items-center gap-1 font-medium hover:text-orange transition-colors ${scrolled ? 'text-navy' : 'text-white/90'}`} onClick={() => setActiveDropdown(isOpen ? null : title)}>
        {title}<ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-navy/5 overflow-hidden transition-all duration-200 origin-top-left ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
        <div className="py-2">
          {links.map((link: any, i: number) => (
            <a key={i} href={link.href} onClick={(e) => { if (link.page) { e.preventDefault(); navigate(link.page); } setActiveDropdown(null); }}
              className="block px-4 py-2.5 text-sm text-navy/80 hover:bg-light-grey hover:text-orange transition-colors">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileDropdown = ({ title, links, setIsOpen, navigate }: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col">
      <button className="flex items-center justify-between text-navy font-medium p-2 hover:bg-light-grey rounded-lg w-full text-left" onClick={() => setExpanded(!expanded)}>
        {title}<ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="flex flex-col gap-1 pl-4 mt-1 border-l-2 border-orange/20 ml-2">
          {links.map((link: any, i: number) => (
            <a key={i} href={link.href} className="text-navy/70 text-sm p-2 hover:text-orange transition-colors"
              onClick={(e) => { if (link.page) { e.preventDefault(); navigate(link.page); } setIsOpen(false); }}>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export const Navbar = ({ navigate, currentPage }: { navigate: (p: string) => void; currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = currentPage === 'home';
  const transparent = isHome && !scrolled;

  const servicesLinks = [
    { title: "Careers Workshops & Assemblies", href: "/#services" },
    { title: "Employability Skills Training", href: "/#services" },
    { title: "Apprenticeship & University Guidance", href: "/#services" },
    { title: "School & College Partnerships", href: "/#services" },
    { title: "Personalised Career Coaching", href: "/#services" },
  ];

  const programsLinks = [
    { title: "STEP-UP TO A LEVELS", href: "/#programs" },
    { title: "STEP-UP TO COLLEGE", href: "/#programs" },
    { title: "STEP-UP INTO APPRENTICESHIPS", href: "/#programs" },
    { title: "STEP-UP TO UNIVERSITY", href: "/#programs" },
    { title: "STEP-UP TO WORK", href: "/#programs" },
  ];

  const moreLinks = [
    { title: "Our Impact", href: "/#impact", page: "impact" },
    { title: "Blog", href: "/blog", page: "blog" },
    { title: "News", href: "/news", page: "news" },
    { title: "Meet the Team", href: "/#team" },
    { title: "Free AI CV Optimiser", href: "/resume-tool", page: "resume-tool" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate('home')} className="flex items-center gap-2 focus:outline-none">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <ArrowRight className="text-orange w-6 h-6 -rotate-45" />
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${transparent ? 'text-white' : 'text-navy'}`}>
              STEPUP <span className="text-orange">FUTURES</span> CIC
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-7">
            <a href="/#about" className={`font-medium hover:text-orange transition-colors ${transparent ? 'text-white/90' : 'text-navy'}`}>About</a>
            <NavDropdown title="Services" links={servicesLinks} scrolled={!transparent} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} navigate={navigate} />
            <NavDropdown title="Programmes" links={programsLinks} scrolled={!transparent} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} navigate={navigate} />
            <NavDropdown title="More" links={moreLinks} scrolled={!transparent} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} navigate={navigate} />
            <Button variant="primary" className="px-5 py-2 text-sm" href="/#contact">Partner With Us</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={transparent ? 'text-white' : 'text-navy'} /> : <Menu className={transparent ? 'text-white' : 'text-navy'} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <a href="/#about" className="text-navy font-medium p-2 hover:bg-light-grey rounded-lg" onClick={() => setIsOpen(false)}>About</a>
          <MobileDropdown title="Services" links={servicesLinks} setIsOpen={setIsOpen} navigate={navigate} />
          <MobileDropdown title="Programmes" links={programsLinks} setIsOpen={setIsOpen} navigate={navigate} />
          <MobileDropdown title="More" links={moreLinks} setIsOpen={setIsOpen} navigate={navigate} />
          <Button variant="primary" className="w-full mt-4" href="/#contact" onClick={() => setIsOpen(false)}>Partner With Us</Button>
        </div>
      )}
    </nav>
  );
};

export const Footer = ({ navigate }: { navigate: (p: string) => void }) => (
  <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-1">
          <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-6 focus:outline-none">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <ArrowRight className="text-orange w-5 h-5 -rotate-45" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">STEPUP <span className="text-orange">FUTURES</span> CIC</span>
          </button>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A specialist careers and employability organisation supporting young people in transitioning successfully into employment, apprenticeships, and further education.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors cursor-pointer">
              <span className="sr-only">Twitter / X</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </div>
            <a href="https://www.linkedin.com/company/francis-page-education-and-careers/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-heading">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/#about" className="text-white/60 hover:text-orange transition-colors">About Us</a></li>
            <li><a href="/#services" className="text-white/60 hover:text-orange transition-colors">Our Services</a></li>
            <li><a href="/#programs" className="text-white/60 hover:text-orange transition-colors">Programmes</a></li>
            <li><button onClick={() => navigate('impact')} className="text-white/60 hover:text-orange transition-colors">Our Impact</button></li>
            <li><button onClick={() => navigate('blog')} className="text-white/60 hover:text-orange transition-colors">Blog</button></li>
            <li><button onClick={() => navigate('news')} className="text-white/60 hover:text-orange transition-colors">News</button></li>
            <li><button onClick={() => navigate('resume-tool')} className="text-white/60 hover:text-orange transition-colors">AI CV Optimiser</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-heading">Legal</h4>
          <ul className="space-y-3">
            <li><button onClick={() => navigate('privacy')} className="text-white/60 hover:text-orange transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => navigate('cookie')} className="text-white/60 hover:text-orange transition-colors">Cookie Policy</button></li>
            <li><button onClick={() => navigate('terms')} className="text-white/60 hover:text-orange transition-colors">Terms of Service</button></li>
            <li><a href="/#contact" className="text-white/60 hover:text-orange transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-heading">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60"><MapPin className="w-5 h-5 text-orange shrink-0 mt-0.5" /><span>Coventry, West Midlands<br />United Kingdom</span></li>
            <li className="flex items-center gap-3 text-white/60"><Phone className="w-5 h-5 text-orange shrink-0" /><a href="tel:+447506285601" className="hover:text-orange transition-colors">07506 285601</a></li>
            <li className="flex items-center gap-3 text-white/60"><Mail className="w-5 h-5 text-orange shrink-0" /><a href="mailto:hello@stepupfutures.org" className="hover:text-orange transition-colors">hello@stepupfutures.org</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>Copyright &copy; STEPUP FUTURES CIC {new Date().getFullYear()}. All rights reserved.</p>
        <p>Registered Company No: 13987644 | Lloyds Bank</p>
        <div className="flex gap-6">
          <button onClick={() => navigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => navigate('cookie')} className="hover:text-white transition-colors">Cookie Policy</button>
          <button onClick={() => navigate('terms')} className="hover:text-white transition-colors">Terms</button>
        </div>
      </div>
    </div>
  </footer>
);

export const CookieBanner = ({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-white p-4 md:p-6 shadow-2xl border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
      <div className="flex-1">
        <p className="font-semibold mb-1">We use cookies</p>
        <p className="text-white/70 text-sm">
          We use cookies to improve your experience, analyse site traffic, and personalise content. By clicking "Accept All", you consent to our use of cookies.{' '}
          <button className="underline text-orange hover:text-orange/80">Learn more</button>.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <button onClick={onDecline} className="px-4 py-2 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors">Decline</button>
        <button onClick={onAccept} className="px-5 py-2 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange/90 transition-colors">Accept All</button>
      </div>
    </div>
  </div>
);
