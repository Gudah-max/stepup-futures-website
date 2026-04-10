import React, { useRef, useState, useCallback } from 'react';

interface UploadBoxProps {
  onFileSelect: (file: File) => void;
  file: File | null;
  isAnalyzing: boolean;
}

export default function UploadBox({ onFileSelect, file, isAnalyzing }: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');

  const validate = (f: File): boolean => {
    const allowed = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const extOk = f.name.endsWith('.pdf') || f.name.endsWith('.docx');
    if (!allowed.includes(f.type) && !extOk) {
      setError('Only PDF or DOCX files are accepted.');
      return false;
    }
    if (f.size > 10 * 1024 * 1024) {
      setError('File must be under 10 MB.');
      return false;
    }
    setError('');
    return true;
  };

  const handleFile = (f: File) => {
    if (validate(f)) onFileSelect(f);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  const fmt = (bytes: number) => bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(1)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

  return (
    <div className="w-full">
      <div
        onClick={() => !isAnalyzing && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`
          relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer
          transition-all duration-300 select-none
          ${dragging ? 'border-orange bg-orange/10 scale-[1.01]' : 'border-white/20 bg-white/5 hover:border-orange/60 hover:bg-orange/5'}
          ${isAnalyzing ? 'cursor-not-allowed opacity-60' : ''}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
          disabled={isAnalyzing}
        />

        {file ? (
          <div className="flex flex-col items-center gap-3">
            {/* File icon */}
            <div className="w-16 h-16 rounded-2xl bg-orange/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="font-semibold text-white text-lg">{file.name}</p>
            <p className="text-white/50 text-sm">{fmt(file.size)} · {file.name.endsWith('.pdf') ? 'PDF' : 'DOCX'}</p>
            {!isAnalyzing && (
              <p className="text-orange/80 text-xs mt-1">Click to replace file</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Drag & drop your CV here</p>
              <p className="text-white/50 text-sm mt-1">or click to browse files</p>
            </div>
            <div className="flex gap-2 mt-1">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium">PDF</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium">DOCX</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium">Max 10 MB</span>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 text-red-400 text-sm">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
