import React, { useState } from 'react';

export type SuggestionType = 'strength' | 'warning' | 'error';

export interface Suggestion {
  type: SuggestionType;
  title: string;
  detail: string;
}

interface SuggestionsListProps {
  suggestions: Suggestion[];
  missingSkills: string[];
  strengths: string[];
}

const typeConfig = {
  strength: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    dot: 'bg-green-500',
    text: 'text-green-400',
    label: 'Strength',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  warning: {
    bg: 'bg-orange/10',
    border: 'border-orange/30',
    dot: 'bg-orange',
    text: 'text-orange',
    label: 'Improve',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  error: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    dot: 'bg-red-500',
    text: 'text-red-400',
    label: 'Missing',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export default function SuggestionsList({ suggestions, missingSkills, strengths }: SuggestionsListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'strengths' | 'improvements' | 'missing'>('all');

  const tabs = [
    { id: 'all', label: 'All', count: suggestions.length + missingSkills.length + strengths.length },
    { id: 'strengths', label: 'Strengths', count: strengths.length },
    { id: 'improvements', label: 'Improvements', count: suggestions.filter(s => s.type !== 'strength').length },
    { id: 'missing', label: 'Missing Skills', count: missingSkills.length },
  ] as const;

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 mb-5 bg-white/5 rounded-xl p-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-orange text-white shadow-sm'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {tab.label}
            <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
              activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {/* Suggestions */}
        {(activeTab === 'all' || activeTab === 'improvements') &&
          suggestions.filter(s => activeTab === 'improvements' ? s.type !== 'strength' : true).map((s, i) => {
            const cfg = typeConfig[s.type];
            return (
              <div key={i} className={`${cfg.bg} border ${cfg.border} rounded-xl p-4 flex gap-3`}>
                <div className={`${cfg.text} mt-0.5 flex-shrink-0`}>{cfg.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-xs font-bold uppercase tracking-wide ${cfg.text}`}>{cfg.label}</span>
                    <span className="text-white font-medium text-sm">{s.title}</span>
                  </div>
                  <p className="text-white/60 text-sm">{s.detail}</p>
                </div>
              </div>
            );
          })}

        {/* Strengths */}
        {(activeTab === 'all' || activeTab === 'strengths') && strengths.map((s, i) => (
          <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex gap-3">
            <div className="text-green-400 mt-0.5 flex-shrink-0">{typeConfig.strength.icon}</div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-green-400 mr-2">Strength</span>
              <span className="text-white text-sm">{s}</span>
            </div>
          </div>
        ))}

        {/* Missing skills */}
        {(activeTab === 'all' || activeTab === 'missing') && missingSkills.length > 0 && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-red-400">{typeConfig.error.icon}</div>
              <span className="text-xs font-bold uppercase tracking-wide text-red-400">Missing Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {missingSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
