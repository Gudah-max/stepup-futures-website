import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
  delay?: number;
}

export default function ProgressBar({ label, value, color = '#f97316', delay = 0 }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 100 + delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  const getColor = () => {
    if (value >= 80) return '#22c55e';
    if (value >= 60) return '#f97316';
    return '#ef4444';
  };

  const barColor = color === 'auto' ? getColor() : color;

  return (
    <div className="flex items-center gap-3">
      <span className="text-white/70 text-sm w-36 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${width}%`,
            backgroundColor: barColor,
            transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          }}
        />
      </div>
      <span className="text-white/60 text-sm w-10 text-right flex-shrink-0">{value}%</span>
    </div>
  );
}
