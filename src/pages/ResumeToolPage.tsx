import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Upload, Cpu, Download, ArrowRight, ChevronDown } from 'lucide-react';
import UploadBox from '../components/resume/UploadBox';
import ScoreCard from '../components/resume/ScoreCard';
import ProgressBar from '../components/resume/ProgressBar';
import SuggestionsList from '../components/resume/SuggestionsList';
import RewritePanel from '../components/resume/RewritePanel';
import JobMatch from '../components/resume/JobMatch';
import { analyzeResume, rewriteResume, matchJob, downloadAsText, type AnalysisResult, type MatchResult } from '../lib/resumeApi';

type Step = 'idle' | 'analyzing' | 'results';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-navy/8 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-navy font-semibold text-sm hover:bg-navy/2 transition-colors"
        aria-expanded={open}
      >
        {question}
        <ChevronDown className={`w-4 h-4 text-orange flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pt-1 text-navy/60 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Icon helpers ─── */
const IconScore = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const IconATS = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

export default function ResumeToolPage() {
  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState<Step>('idle');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [rewrittenText, setRewrittenText] = useState('');
  const [isRewriting, setIsRewriting] = useState(false);
  const [demoActive, setDemoActive] = useState(false);

  const handleAnalyze = async (f?: File) => {
    const target = f || file;
    if (!target) return;
    setStep('analyzing');
    setResult(null);
    setRewrittenText('');
    try {
      const res = await analyzeResume(target);
      setResult(res);
      setRewrittenText(res.rewrittenResume);
      setStep('results');
    } catch {
      setStep('idle');
    }
  };

  const handleFileSelect = (f: File) => {
    setFile(f);
    setStep('idle');
    setResult(null);
  };

  const handleDemo = async () => {
    setDemoActive(true);
    // Create a fake File object for the demo
    const demoFile = new File(['demo'], 'sample-cv.pdf', { type: 'application/pdf' });
    setFile(demoFile);
    await handleAnalyze(demoFile);
    setDemoActive(false);
  };

  const handleRewrite = async () => {
    setIsRewriting(true);
    try {
      const text = await rewriteResume(file, rewrittenText);
      setRewrittenText(text);
    } finally {
      setIsRewriting(false);
    }
  };

  const handleJobMatch = async (description: string): Promise<MatchResult> => {
    return matchJob(rewrittenText || 'resume text', description);
  };

  const handleDownload = (text: string) => {
    downloadAsText(text, file ? file.name.replace(/\.(pdf|docx)$/i, '-improved.txt') : 'improved-cv.txt');
  };

  const handleReset = () => {
    setFile(null);
    setStep('idle');
    setResult(null);
    setRewrittenText('');
  };

  return (
    <>
    <Helmet>
      <title>AI CV Optimiser (Coming Soon) | StepUp Futures CIC</title>
      <meta name="description" content="StepUp Futures CIC is building a free AI-powered CV optimiser for UK job seekers — ATS scoring, skill gap analysis, rewrite, and job match. Coming soon." />
      <meta property="og:title" content="AI CV Optimiser (Coming Soon) | StepUp Futures CIC" />
      <meta property="og:description" content="Free AI CV tool for UK job seekers — coming soon from StepUp Futures CIC." />
      <link rel="canonical" href="https://www.stepupfutures.org/resume-tool" />
    </Helmet>

    {/* ── LANDING HERO ── */}
    <section className="bg-navy pt-32 pb-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange text-xs font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          Coming Soon · Free Tool
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl md:text-5xl font-bold text-white font-heading mb-5">AI CV Optimiser — launching soon.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
          className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          We're building a free AI-powered CV tool for UK job seekers — analysing your CV for ATS compatibility, language impact, and keyword gaps. Preview the demo below.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3">
          {['Free to use', 'No login required', 'Built for UK jobs'].map(badge => (
            <span key={badge} className="flex items-center gap-1.5 px-4 py-2 bg-white/8 border border-white/15 text-white/50 text-sm font-medium rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" /> {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section className="py-16 px-4" style={{ backgroundColor: '#0a2035' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-orange mb-2">How it will work</p>
        <p className="text-center text-white/40 text-sm mb-10">When the tool launches, here's how easy it'll be to use:</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Upload className="w-6 h-6" />, step: '1', title: 'Upload your CV', desc: 'Drag & drop or browse your PDF or Word file. Max 10MB.' },
            { icon: <Cpu className="w-6 h-6" />, step: '2', title: 'AI analyses it instantly', desc: 'Our AI scores your CV on ATS compatibility, impact, clarity, and keywords.' },
            { icon: <Download className="w-6 h-6" />, step: '3', title: 'Download your improved version', desc: 'Get a fully rewritten CV and detailed suggestions. Download in seconds.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center opacity-75">
              <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center text-orange mx-auto mb-4">{item.icon}</div>
              <p className="text-orange text-xs font-bold mb-2">Step {item.step}</p>
              <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div className="min-h-screen" style={{ backgroundColor: '#0f2a44' }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            Key Innovation · Demo Preview
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            AI-Powered CV &{' '}
            <span style={{ color: '#f97316' }}>Resume Optimisation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            This is a demo of the tool we're building. Try it out below — the full version launches soon, completely free for UK job seekers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button
              onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange/30"
              style={{ backgroundColor: '#f97316' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Resume
            </button>
            <button
              onClick={handleDemo}
              disabled={demoActive}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 disabled:opacity-50"
            >
              {demoActive ? (
                <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Loading demo…</>
              ) : (
                <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Try Demo</>
              )}
            </button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {['ATS Score', 'AI Rewrite', 'Job Matching', 'Skill Gap Analysis', 'Instant Download'].map((f, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-white/60 text-sm">
                ✓ {f}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section id="upload-section" className="max-w-6xl mx-auto px-4 pb-24">

        {/* ── UPLOAD ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white font-bold text-xl">Upload Your CV</h2>
              <p className="text-white/50 text-sm mt-1">PDF or DOCX · Max 10 MB</p>
            </div>
            {step === 'results' && (
              <button onClick={handleReset} className="text-white/40 hover:text-white/70 text-sm flex items-center gap-1.5 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Start over
              </button>
            )}
          </div>

          <UploadBox onFileSelect={handleFileSelect} file={file} isAnalyzing={step === 'analyzing'} />

          {file && step !== 'analyzing' && step !== 'results' && (
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => handleAnalyze()}
              className="mt-5 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-orange/20"
              style={{ backgroundColor: '#f97316' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Analyse My CV
            </motion.button>
          )}
        </motion.div>

        {/* ── ANALYZING STATE ── */}
        <AnimatePresence>
          {step === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center mb-8"
            >
              <div className="flex justify-center mb-5">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-orange border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Analysing your CV…</h3>
              <p className="text-white/50 text-sm">Our AI is reviewing your resume for ATS compatibility, keyword density, impact, and structure.</p>
              <div className="flex justify-center gap-2 mt-6">
                {['Parsing document', 'Checking ATS', 'Scoring impact', 'Generating insights'].map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.4] }}
                    transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
                    className="px-3 py-1 rounded-full bg-white/8 text-white/50 text-xs"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── RESULTS ── */}
        <AnimatePresence>
          {step === 'results' && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Score cards */}
              <motion.div variants={fadeUp} initial="hidden" animate="show">
                <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-orange inline-block" />
                  Analysis Dashboard
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ScoreCard
                    label="Overall CV Score"
                    value={result.score}
                    description="Holistic quality rating"
                    icon={<IconScore />}
                    color="#f97316"
                  />
                  <ScoreCard
                    label="ATS Compatibility"
                    value={result.ats}
                    description="Applicant tracking system pass rate"
                    icon={<IconATS />}
                    color="#22c55e"
                  />
                </div>
              </motion.div>

              {/* Progress bars */}
              <motion.div
                variants={fadeUp} custom={1} initial="hidden" animate="show"
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-orange inline-block" />
                  Detailed Breakdown
                </h2>
                <div className="space-y-4">
                  <ProgressBar label="Clarity & Readability" value={result.clarity} color="auto" delay={0} />
                  <ProgressBar label="Impact & Achievements" value={result.impact} color="auto" delay={80} />
                  <ProgressBar label="Formatting & Structure" value={result.formatting} color="auto" delay={160} />
                  <ProgressBar label="Keywords & ATS" value={result.keywords} color="auto" delay={240} />
                  <ProgressBar label="ATS Pass Rate" value={result.ats} color="auto" delay={320} />
                </div>
              </motion.div>

              {/* AI Insights */}
              <motion.div
                variants={fadeUp} custom={2} initial="hidden" animate="show"
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-orange inline-block" />
                  AI Insights
                </h2>
                <SuggestionsList
                  suggestions={result.suggestions}
                  missingSkills={result.missingSkills}
                  strengths={result.strengths}
                />
              </motion.div>

              {/* Rewrite panel */}
              <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show">
                <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-orange inline-block" />
                  AI Rewrite
                </h2>
                <RewritePanel
                  rewrittenResume={rewrittenText}
                  isRewriting={isRewriting}
                  onRewrite={handleRewrite}
                  onDownload={handleDownload}
                />
              </motion.div>

              {/* Job match */}
              <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show">
                <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-orange inline-block" />
                  Job Match Analyser
                </h2>
                <JobMatch onMatch={handleJobMatch} />
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fadeUp} custom={5} initial="hidden" animate="show"
                className="rounded-2xl p-8 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 100%)', border: '1px solid rgba(249,115,22,0.2)' }}
              >
                <h3 className="text-white font-bold text-xl mb-2">Want personalised careers support?</h3>
                <p className="text-white/60 mb-5 text-sm max-w-md mx-auto">Our expert advisers at StepUp Futures can help you put these CV improvements into practice and land your next role.</p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: '#f97316' }}
                >
                  Speak to an Adviser
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── EMPTY STATE ── */}
        {step === 'idle' && !file && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
          >
            {[
              { icon: '⚡', title: 'Instant Analysis', desc: 'Get a detailed score and feedback in under 30 seconds.' },
              { icon: '🎯', title: 'ATS Optimised', desc: 'We check against the filters used by 95% of UK employers.' },
              { icon: '✍️', title: 'AI Rewrite', desc: 'Receive a fully rewritten CV with stronger language and impact.' },
            ].map((card, i) => (
              <div key={i} className="bg-white/4 border border-white/8 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{card.icon}</div>
                <p className="text-white font-semibold mb-1">{card.title}</p>
                <p className="text-white/50 text-sm">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        )}
      </section>
    </div>

    {/* ── FAQ ── */}
    <section className="py-20 px-4 bg-light-grey">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-orange mb-3">FAQ</p>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-navy font-heading mb-10">Common questions</h2>
        <div className="space-y-3">
          {[
            { q: 'When will this tool be available?', a: 'We\'re currently in the demo phase and are actively developing the full version. Sign up to our newsletter on the homepage to be the first to know when it launches.' },
            { q: 'Will it really be free?', a: 'Yes, completely free at the point of use. StepUp Futures CIC is a Community Interest Company — we reinvest everything back into helping young people. The AI CV tool is part of that commitment.' },
            { q: 'What file types will I be able to upload?', a: 'The full tool will accept PDF and DOCX files up to 10MB — the two most common CV formats, covering 99% of cases.' },
            { q: 'Will this work for UK jobs?', a: 'Yes. The tool is being built specifically for the UK job market — using UK ATS patterns, employer expectations, and industry-standard CV formatting guidelines.' },
            { q: 'Will my CV be stored anywhere?', a: 'No. When the tool launches, your CV will be processed in your session only. We will not store, share, or retain any CV data after your session ends.' },
          ].map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>

    {/* ── HUMAN CTA ── */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mx-auto mb-5">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-3">Want a real careers expert to review your CV?</h2>
        <p className="text-navy/60 text-base leading-relaxed mb-7 max-w-lg mx-auto">
          While the AI tool is in development, our careers advisers at StepUp Futures are available now. Book a session and get personalised, expert feedback on your CV and job applications.
        </p>
        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-orange/90 transition-colors"
        >
          Book a session <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
    </>
  );
}
