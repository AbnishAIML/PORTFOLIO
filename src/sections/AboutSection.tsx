import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Avatar } from '../components/Avatar';
import { ABOUT_CONTENT, OWNER } from '../data/content';
import {
  GraduationCap,
  Layers,
  MapPin,
  ShieldCheck,
  Compass,
  Code2,
  ExternalLink,
  Award,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-accent-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-accent-500" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-accent-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-accent-500" />;
      default:
        return <Compass className="w-5 h-5 text-accent-500" />;
    }
  };

  return (
    <section id="about" aria-label="About Abnish Kumar" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="01 // ABOUT & ACADEMICS"
          title="Curiosity, Architecture & Code"
          description="A truthful look into my trajectory as a 2nd-year B.Tech CSE (AI/ML) student, verified academic record, and first-principles engineering mindset."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Avatar imageUrl={OWNER.avatarUrl} />

            <div className="mt-4 w-full max-w-[340px] p-3.5 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">DSA Practice</span>
                  <span className="text-xs font-bold font-mono text-zinc-900 dark:text-white">
                    LeetCode: @ABNISHAIML
                  </span>
                </div>
              </div>
              <a
                href={OWNER.social.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-accent-500 dark:hover:text-accent-400 transition"
                title="View LeetCode Profile"
                aria-label="View LeetCode profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Narrative & Academic Scorecard */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {ABOUT_CONTENT.summary.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-accent-500/30 bg-accent-500/5 dark:bg-zinc-900/75 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-accent-500/20">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-500" />
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    Verified Academic Record
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                  2nd Year Active
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/85 dark:bg-zinc-950/65 border border-zinc-200/60 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Class X</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-white">
                    {OWNER.academics.tenth}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/85 dark:bg-zinc-950/65 border border-zinc-200/60 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Class XII</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-white">
                    {OWNER.academics.twelfth}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/85 dark:bg-zinc-950/65 border border-zinc-200/60 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Sem 1 SGPA</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-accent-600 dark:text-accent-400">
                    {OWNER.academics.sem1Sgpa}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/85 dark:bg-zinc-950/65 border border-zinc-200/60 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Sem 2 SGPA</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-cyanaccent-600 dark:text-cyanaccent-400">
                    {OWNER.academics.sem2Sgpa}
                  </span>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  {OWNER.education.degree} ({OWNER.education.specialization})
                </span>{' '}
                — {OWNER.education.institution} ({OWNER.education.batch})
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_CONTENT.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/65 dark:bg-zinc-900/45 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-500/10 border border-accent-500/20 shrink-0">
                      {getHighlightIcon(item.icon)}
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

