import React, { useState } from 'react';

export interface MatchResult {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: string[];
}

interface JobMatchProps {
  onMatch: (description: string) => Promise<MatchResult>;
}

export default function JobMatch({ onMatch }: JobMatchProps) {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);
  const [isMatching, setIsMatching] = useState(false);
  const [error, setError] = useState('');

  const handleMatch = async () => {
    if (!description.trim()) { setError('Please paste a job description first.'); return; }
    if (description.trim().length < 50) { setError('Job description is too short. Please paste the full description.'); return; }
    setError('');
    setIsMatching(true);
    try {
      const res = await onMatch(description);
      setResult(res);
    } finally {
      setIsMatching(false);
    }
  };

  const scoreColor = result
    ? result.score >= 80 ? '#22c55e' : result.score >= 60 ? '#f97316' : '#ef4444'
    : '#f97316';

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="mb-5">
        <h3 className="text-white font-semibold text-lg">Job Match Analyser</h3>
        <p className="text-white/50 text-sm mt-1">Paste a job description to see how well your CV matches</p>
      </div>

      <textarea
        value={description}
        onChange={e => { setDescription(e.target.value); setError(''); }}
        placeholder="Paste the full job description here…"
        rows={7}
        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white/80 text-sm placeholder:text-white/30 resize-y focus:outline-none focus:border-orange/50 transition-colors duration-200 mb-3"
      />

      {error && (
        <p className="text-red-400 text-sm mb-3 flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}

      <button
        onClick={handleMatch}
        disabled={isMatching}
        className="w-full flex items-center justify-center gap-2 py-3 bg-orange hover:bg-orange/90 disabled:bg-orange/40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200"
      >
        {isMatching ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Matching…
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Match My Resume
          </>
        )}
      </button>

      {result && (
        <div className="mt-6 space-y-4">
          {/* Score */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
                <circle
                  cx="40" cy="40" r="34" fill="none"
                  stroke={scoreColor} strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 34}
                  strokeDashoffset={2 * Math.PI * 34 * (1 - result.score / 100)}
                  style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">{result.score}%</span>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Job Match Score</p>
              <p className="text-white/50 text-sm mt-1">
                {result.score >= 80 ? 'Great match! Your CV aligns well.' : result.score >= 60 ? 'Decent match — a few gaps to address.' : 'Low match — consider tailoring your CV.'}
              </p>
            </div>
          </div>

          {/* Matched keywords */}
          {result.matchedKeywords.length > 0 && (
            <div>
              <p className="text-green-400 text-sm font-semibold mb-2 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Keywords Found ({result.matchedKeywords.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {result.matchedKeywords.map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 bg-green-500/15 border border-green-500/30 rounded-full text-green-300 text-xs">{kw}</span>
                ))}
              </div>
            </div>
          )}

          {/* Missing keywords */}
          {result.missingKeywords.length > 0 && (
            <div>
              <p className="text-red-400 text-sm font-semibold mb-2 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Keywords Missing ({result.missingKeywords.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {result.missingKeywords.map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 bg-red-500/15 border border-red-500/30 rounded-full text-red-300 text-xs">{kw}</span>
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {result.suggestions.length > 0 && (
            <div>
              <p className="text-orange text-sm font-semibold mb-2">Tailoring Suggestions</p>
              <ul className="space-y-2">
                {result.suggestions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
