import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, CookieBanner } from './components/shared';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgrammesPage from './pages/ProgrammesPage';
import ImpactPage from './pages/ImpactPage';
import BlogPage from './pages/BlogPage';
import NewsPage from './pages/NewsPage';
import ResumeToolPage from './pages/ResumeToolPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('stepup_cookie_consent') as 'accepted' | 'declined' | null;
    if (stored) setCookieConsent(stored);
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('stepup_cookie_consent', 'accepted');
    setCookieConsent('accepted');
  };
  const handleCookieDecline = () => {
    localStorage.setItem('stepup_cookie_consent', 'declined');
    setCookieConsent('declined');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-orange/30 selection:text-navy">
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:rounded-lg focus:font-semibold">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/resume-tool" element={<ResumeToolPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/cookie-policy" element={<CookiePage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      {cookieConsent === null && (
        <CookieBanner onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      )}
    </div>
  );
}
