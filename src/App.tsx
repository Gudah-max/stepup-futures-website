import React, { useState, useEffect } from 'react';
import { Navbar, Footer, CookieBanner } from './components/shared';
import HomePage from './pages/HomePage';
import ImpactPage from './pages/ImpactPage';
import BlogPage from './pages/BlogPage';
import NewsPage from './pages/NewsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import TermsPage from './pages/TermsPage';
import ResumeToolPage from './pages/ResumeToolPage';

type Page = 'home' | 'impact' | 'blog' | 'news' | 'privacy' | 'cookie' | 'terms' | 'resume-tool';

const pageTitles: Record<Page, string> = {
  home: 'StepUp Futures CIC | Careers & Employability for Young People | Coventry, West Midlands',
  impact: 'Our Impact | StepUp Futures CIC',
  blog: 'Blog & Insights | StepUp Futures CIC',
  news: 'News & Announcements | StepUp Futures CIC',
  privacy: 'Privacy Policy | StepUp Futures CIC',
  cookie: 'Cookie Policy | StepUp Futures CIC',
  terms: 'Terms of Service | StepUp Futures CIC',
  'resume-tool': 'Free AI CV Optimiser | StepUp Futures CIC',
};

const pageDescriptions: Record<Page, string> = {
  home: 'StepUp Futures CIC is a specialist careers and employability organisation in Coventry, West Midlands, supporting young people to transition confidently into employment, apprenticeships, and university.',
  impact: 'Discover the measurable impact StepUp Futures CIC has made — over 10,000 students guided, 50+ schools supported, and 500+ workshops delivered across the West Midlands.',
  blog: 'Expert articles and resources on careers education, employability, apprenticeships, and youth development from StepUp Futures CIC.',
  news: 'Latest news, press releases, and announcements from StepUp Futures CIC, the West Midlands careers and employability organisation.',
  privacy: 'Read the StepUp Futures CIC Privacy Policy to understand how we collect, use, and protect your personal data.',
  cookie: 'Read the StepUp Futures CIC Cookie Policy to understand how we use cookies on our website.',
  terms: 'Read the StepUp Futures CIC Terms of Service governing use of our website and services.',
  'resume-tool': 'Upload your CV and get instant AI-powered feedback — ATS scoring, skill gap analysis, an AI rewrite, and job match analysis. Free from StepUp Futures CIC.',
};

function updateMeta(page: Page) {
  document.title = pageTitles[page];
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', pageDescriptions[page]);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', pageTitles[page]);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', pageDescriptions[page]);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pageFromPath(): Page {
  const path = window.location.pathname;
  if (path.startsWith('/impact')) return 'impact';
  if (path.startsWith('/blog')) return 'blog';
  if (path.startsWith('/news')) return 'news';
  if (path.startsWith('/privacy')) return 'privacy';
  if (path.startsWith('/cookie')) return 'cookie';
  if (path.startsWith('/terms')) return 'terms';
  if (path.startsWith('/resume-tool')) return 'resume-tool';
  return 'home';
}

const pageToPath: Record<Page, string> = {
  home: '/',
  impact: '/impact',
  blog: '/blog',
  news: '/news',
  privacy: '/privacy-policy',
  cookie: '/cookie-policy',
  terms: '/terms',
  'resume-tool': '/resume-tool',
};

export default function App() {
  const [page, setPage] = useState<Page>(pageFromPath);
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('stepup_cookie_consent') as 'accepted' | 'declined' | null;
    if (stored) setCookieConsent(stored);
  }, []);

  const navigate = (p: Page | string) => {
    const target = p as Page;
    setPage(target);
    updateMeta(target);
    window.history.pushState({}, '', pageToPath[target] || '/');
  };

  useEffect(() => {
    const onPop = () => {
      const p = pageFromPath();
      setPage(p);
      updateMeta(p);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('stepup_cookie_consent', 'accepted');
    setCookieConsent('accepted');
  };
  const handleCookieDecline = () => {
    localStorage.setItem('stepup_cookie_consent', 'declined');
    setCookieConsent('declined');
  };

  const renderPage = () => {
    switch (page) {
      case 'impact': return <ImpactPage />;
      case 'blog': return <BlogPage />;
      case 'news': return <NewsPage />;
      case 'privacy': return <PrivacyPage />;
      case 'cookie': return <CookiePage />;
      case 'terms': return <TermsPage />;
      case 'resume-tool': return <ResumeToolPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-orange/30 selection:text-navy">
      <Navbar navigate={navigate} currentPage={page} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      {cookieConsent === null && (
        <CookieBanner onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      )}
    </div>
  );
}
