import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SpotlightCard } from '../components/SpotlightCard';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { FEATURED_PROJECT } from '../data/content';
import { Github, Clock, Layers, ShieldCheck, CheckCircle2, PlayCircle } from 'lucide-react';

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section
      id="featured-project"
      aria-label="Featured Project: VidSphere"
      className="py-20 sm:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <SectionHeader
            badge="03 // FLAGSHIP PROJECT"
            title={FEATURED_PROJECT.title}
            description={FEATURED_PROJECT.tagline}
            className="mb-0 md:mb-0"
          />

          <div className="self-start md:self-end flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Demo: Coming Soon (Finalizing Hosting)</span>
          </div>
        </div>

        <div className="space-y-8">
          <SpotlightCard className="border-accent-500/30 dark:border-accent-500/20 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-600 text-white">
                    <PlayCircle className="w-3.5 h-3.5" />
                    {FEATURED_PROJECT.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    MVC + MERN + Cloudinary
                  </span>
                </div>

                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {FEATURED_PROJECT.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-accent-500" />
                    Production Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_PROJECT.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={FEATURED_PROJECT.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 transition shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source on GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Highlights */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
                {FEATURED_PROJECT.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50/90 dark:bg-zinc-900/75 border border-zinc-200/70 dark:border-white/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-semibold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent-500 shrink-0" />
                        {feat.title}
                      </h5>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {feat.description}
                    </p>
                    {feat.highlight && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent-600 dark:text-accent-400">
                        <CheckCircle2 className="w-3 h-3" />
                        {feat.highlight}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
};

