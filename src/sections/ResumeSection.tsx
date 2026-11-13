import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { OWNER, SKILL_CATEGORIES } from '../data/content';
import { FileText, ExternalLink, Download, Printer, CheckCircle2 } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" aria-label="ATS Resume" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="07 // ATS RESUME"
          title="Official Developer Resume (PDF)"
          description="Single-column, ATS-compatible PDF resume synced with my verified academics, VidSphere engineering, hackathon credentials, and full technical stack."
        />

        <div className="rounded-2xl border border-accent-500/30 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-200/80 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-accent-500/15 border border-accent-500/30 text-accent-600 dark:text-accent-400 shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white">
                  {OWNER.name} — ABNISH KUMAR UPDATED RESUME.pdf
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {OWNER.education.degree} ({OWNER.education.specialization}) • {OWNER.education.institution}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ATS Single-Column PDF
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Printer className="w-3.5 h-3.5 text-accent-500" />
                    Ready for Recruiters
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={OWNER.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-500/20 transition"
              >
                <span>Preview Resume (PDF)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={OWNER.resumeUrl}
                download="ABNISH KUMAR UPDATED RESUME.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 transition"
              >
                <Download className="w-4 h-4 text-accent-500" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Stack Summary inside Resume Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="p-3.5 rounded-xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5"
              >
                <span className="text-[11px] font-mono font-bold uppercase text-accent-600 dark:text-accent-400 block mb-1">
                  {cat.title}
                </span>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {cat.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

