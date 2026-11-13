import React, { useState } from 'react';
import { OWNER } from '../data/content';
import { Circle, Square, GraduationCap, CheckCircle2 } from 'lucide-react';

interface AvatarProps {
  imageUrl?: string;
  className?: string;
  compact?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl = OWNER.avatarUrl,
  className,
  compact = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [shape, setShape] = useState<'square' | 'circle'>('circle');

  return (
    <div className={`relative group select-none flex flex-col items-center ${className || ''}`}>
      {/* Frame Toggle */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 mb-4 text-xs font-mono">
        <span className="text-zinc-400 text-[11px] px-2">Frame:</span>
        <button
          type="button"
          onClick={() => setShape('circle')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            shape === 'circle'
              ? 'bg-accent-600 text-white font-semibold shadow-sm shadow-accent-500/30'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
          }`}
          aria-label="Switch to circular frame"
        >
          <Circle className="w-3.5 h-3.5" />
          <span>Circle</span>
        </button>
        <button
          type="button"
          onClick={() => setShape('square')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
            shape === 'square'
              ? 'bg-accent-600 text-white font-semibold shadow-sm shadow-accent-500/30'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
          }`}
          aria-label="Switch to square frame"
        >
          <Square className="w-3.5 h-3.5" />
          <span>Square</span>
        </button>
      </div>

      {/* Glow & Frame */}
      <div className="relative">
        <div
          className={`absolute -inset-2 bg-gradient-to-tr from-accent-600 via-accent-500 to-cyanaccent-500 opacity-35 blur-xl group-hover:opacity-65 transition-all duration-500 ${
            shape === 'circle' ? 'rounded-full' : 'rounded-3xl'
          }`}
          aria-hidden="true"
        />

        <div
          className={`relative aspect-square overflow-hidden bg-zinc-900 border-2 border-accent-500/40 shadow-2xl transition-all duration-500 ${
            compact ? 'w-52 sm:w-60' : 'w-64 sm:w-72 md:w-80'
          } ${shape === 'circle' ? 'rounded-full' : 'rounded-3xl'}`}
        >
          {!imageError ? (
            <img
              src={imageUrl}
              alt="Abnish Kumar — B.Tech CSE (AI/ML)"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-900 text-white">
              <div className="w-20 h-20 rounded-2xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center mb-3">
                <GraduationCap className="w-10 h-10 text-accent-400" />
              </div>
              <h4 className="font-bold font-mono text-base">{OWNER.name}</h4>
              <p className="text-xs text-zinc-400 font-mono mt-1">2nd Year B.Tech CSE (AI/ML)</p>
            </div>
          )}

          <div
            className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15 ${
              shape === 'circle' ? 'rounded-full' : 'rounded-3xl'
            }`}
          />
        </div>

        <div className="absolute -bottom-2 -right-2 sm:bottom-1 sm:right-1 bg-white dark:bg-zinc-900 border border-accent-500/40 rounded-full px-3 py-1 shadow-lg flex items-center gap-1.5 text-[11px] font-mono text-accent-600 dark:text-accent-400 z-10">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500" />
          <span className="font-semibold">2nd Year AI/ML</span>
        </div>
      </div>

      {!compact && (
        <div className="mt-5 w-full max-w-[340px] grid grid-cols-2 gap-2 text-center text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-white/75 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 backdrop-blur-sm">
            <span className="text-zinc-400 block text-[10px]">Sem 1 SGPA</span>
            <span className="font-bold text-accent-600 dark:text-accent-400">{OWNER.academics.sem1Sgpa}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/75 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 backdrop-blur-sm">
            <span className="text-zinc-400 block text-[10px]">Sem 2 SGPA</span>
            <span className="font-bold text-cyanaccent-600 dark:text-cyanaccent-400">{OWNER.academics.sem2Sgpa}</span>
          </div>
        </div>
      )}
    </div>
  );
};

