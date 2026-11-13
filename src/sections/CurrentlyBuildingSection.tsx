import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CURRENTLY_BUILDING } from '../data/content';
import { Brain, Rocket } from 'lucide-react';

export const CurrentlyBuildingSection: React.FC = () => {
  return (
    <section
      id="currently-building"
      aria-label="Currently Building"
      className="py-20 sm:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="04 // ACTIVE FOCUS"
          title="Currently Building & Practicing"
          description="What I am actively shipping, deploying, and practicing right now."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENTLY_BUILDING.map((item, idx) => (
            <div
              key={item.id}
              className="relative rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-accent-500/45 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase text-accent-600 dark:text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-md border border-accent-500/20 font-semibold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>{item.status}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-display text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                  {idx === 0 ? (
                    <Rocket className="w-5 h-5 text-accent-500 shrink-0" />
                  ) : (
                    <Brain className="w-5 h-5 text-cyanaccent-500 shrink-0" />
                  )}
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
                {item.stageBadge && (
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-zinc-500 dark:text-zinc-400">Current Stage:</span>
                    <span className="px-3 py-1 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400 font-semibold border border-accent-500/20">
                      {item.stageBadge}
                    </span>
                  </div>
                )}

                {typeof item.progressPercent === 'number' && (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {item.progressLabel || 'Milestone Completion'}
                      </span>
                      <span className="font-semibold text-accent-600 dark:text-accent-400">
                        {item.progressPercent}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden shadow-inner">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-600 via-accent-500 to-cyanaccent-400 transition-all duration-700"
                        style={{ width: `${item.progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

