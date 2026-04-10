import React, { useState } from 'react';

interface RewritePanelProps {
  rewrittenResume: string;
  isRewriting: boolean;
  onRewrite: () => void;
  onDownload: (text: string) => void;
}

export default function RewritePanel({ rewrittenResume, isRewriting, onRewrite, onDownload }: RewritePanelProps) {
  const [text, setText] = useState(rewrittenResume);
  const [copied, setCopied] = useState(false);

  // Sync when new rewrite arrives
  React.useEffect(() => {
    setText(rewrittenResume);
  }, [rewrittenResume]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">AI-Rewritten CV</h3>
          <p className="text-white/50 text-sm">Optimised for ATS and recruiter readability</p>
        </div>
        <button
          onClick={onRewrite}
          disabled={isRewriting}
          className="flex items-center gap-2 px-4 py-2 bg-orange hover:bg-orange/90 disabled:bg-orange/40 disabled:cursor-not-allowed text-white font-medium rounded-xl text-sm transition-all duration-200"
        >
          {isRewriting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Rewriting…
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Rewrite My CV
            </>
          )}
        </button>
      </div>

      {text ? (
        <>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            rows={18}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white/80 text-sm font-mono resize-y focus:outline-none focus:border-orange/50 transition-colors duration-200"
            spellCheck={false}
          />

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white/80 font-medium rounded-xl text-sm transition-all duration-200"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Text
                </>
              )}
            </button>

            <button
              onClick={() => onDownload(text)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-medium rounded-xl text-sm transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Improved CV
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-14 gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-white/40 text-sm">Click "Rewrite My CV" to generate an AI-optimised version</p>
        </div>
      )}
    </div>
  );
}
