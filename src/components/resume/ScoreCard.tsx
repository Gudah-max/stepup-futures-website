import React, { useEffect, useRef, useState } from 'react';

interface ScoreCardProps {
  label: string;
  value: number;
  max?: number;
  unit?: string;
  color?: string;
  icon: React.ReactNode;
  description: string;
}

export default function ScoreCard({ label, value, max = 100, unit = '', color = '#f97316', icon, description }: ScoreCardProps) {
  const [displayed, setDisplayed] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let start: number | null = null;
    const duration = 1400;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);

  const pct = (value / max) * 100;
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (circumference * (displayed / max));

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 hover:bg-white/8">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/60 text-sm font-medium">{label}</p>
          <p className="text-white/40 text-xs mt-0.5">{description}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange">
          {icon}
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Circular progress */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle
              cx="48" cy="48" r="42" fill="none"
              stroke={color} strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * (displayed / max))}
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">{displayed}</span>
            <span className="text-white/50 text-xs">{unit || `/${max}`}</span>
          </div>
        </div>

        {/* Grade badge */}
        <div>
          <div
            className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-2"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {pct >= 90 ? 'Excellent' : pct >= 75 ? 'Good' : pct >= 60 ? 'Fair' : 'Needs Work'}
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 w-28">
            <div
              className="h-1.5 rounded-full transition-all duration-1000"
              style={{ width: `${(displayed / max) * 100}%`, backgroundColor: color }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
