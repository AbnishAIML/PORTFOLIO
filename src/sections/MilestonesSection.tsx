import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MILESTONES } from '../data/content';
import {
  Calendar,
  GraduationCap,
  Terminal,
  Layers,
  Rocket,
  Award,
  Clock,
  PlusCircle,
  ExternalLink,
  FileText,
  X,
  ShieldCheck,
  UserCheck,
  Maximize2,
} from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeCertModal) {
        setActiveCertModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertModal]);

  const getMilestoneIcon = (idx: number, isPlaceholder?: boolean) => {
    if (isPlaceholder) return <PlusCircle className="w-4 h-4 text-accent-500" />;
    switch (idx) {
      case 0:
        return <GraduationCap className="w-4 h-4" />;
      case 1:
        return <Terminal className="w-4 h-4" />;
      case 2:
        return <Layers className="w-4 h-4" />;
      case 3:
        return <Rocket className="w-4 h-4" />;
      case 4:
        return <Award className="w-4 h-4 text-amber-300" />;
      case 5:
        return <Clock className="w-4 h-4 text-cyanaccent-300" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  return (
    <section id="milestones" aria-label="Milestones Timeline" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="06 // TIMELINE & HACKATHONS"
          title="Milestones, Code & Credentials"
          description="A transparent semester-by-semester progression—from zero coding in Sem 1 to C programming, full-stack MERN engineering, VidSphere, and hackathons."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-white/10 space-y-10 sm:space-y-12 max-w-4xl mx-auto">
          {MILESTONES.map((milestone, idx) => {
            const isPlaceholder = milestone.isPlaceholder;
            const cert = milestone.certificate;

            return (
              <div key={idx} className="relative group">
                <div
                  className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isPlaceholder
                      ? 'bg-zinc-100 dark:bg-zinc-900 border-dashed border-zinc-400 dark:border-zinc-600 text-zinc-400'
                      : cert?.status === 'Verified'
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 border-white dark:border-[#08090d] text-white shadow-md shadow-amber-500/30'
                      : 'bg-accent-600 border-white dark:border-[#08090d] text-white shadow-md shadow-accent-500/30'
                  }`}
                >
                  {getMilestoneIcon(idx, isPlaceholder)}
                </div>

                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                    isPlaceholder
                      ? 'border-dashed border-zinc-300 dark:border-white/20 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-accent-500/50'
                      : cert?.status === 'Verified'
                      ? 'border-amber-500/30 bg-amber-500/[0.03] dark:bg-zinc-900/70 backdrop-blur-md hover:border-amber-500/50 shadow-sm'
                      : 'border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 backdrop-blur-md hover:border-accent-500/40 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {milestone.year}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                        isPlaceholder
                          ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-300 dark:border-zinc-700'
                          : cert?.status === 'Verified'
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-semibold'
                          : cert?.status === 'Awaiting Issuance'
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      {milestone.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight font-display text-zinc-900 dark:text-white mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3">
                    {milestone.institutionOrContext}
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {milestone.description}
                  </p>

                  {cert && cert.status === 'Verified' && cert.imageUrl && (
                    <div className="mt-5 p-4 sm:p-5 rounded-2xl border border-amber-500/25 bg-amber-500/[0.03] dark:bg-black/40 space-y-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400 border border-accent-500/30 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                            AK
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-mono font-bold text-zinc-900 dark:text-white flex flex-wrap items-center gap-2">
                              <span>Recipient: {cert.recipientName || 'Abnish Kumar'}</span>
                              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                                <UserCheck className="w-3 h-3" />
                                Verified
                              </span>
                            </div>
                            <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                              {cert.recipientCollege || 'I.T.S. Engineering College'} • B.Tech CSE (AI/ML)
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                          <button
                            type="button"
                            onClick={() => setActiveCertModal(cert.imageUrl || null)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 hover:border-accent-500 text-zinc-800 dark:text-zinc-200 transition font-medium"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-accent-500" />
                            <span>Enlarge</span>
                          </button>
                          {cert.pdfUrl && (
                            <a
                              href={cert.pdfUrl}
                              download
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 hover:border-accent-500 text-zinc-800 dark:text-zinc-200 transition font-medium"
                            >
                              <FileText className="w-3.5 h-3.5 text-amber-500" />
                              <span>PDF</span>
                            </a>
                          )}
                          {cert.verificationUrl && (
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-amber-700 dark:text-amber-300 transition font-semibold"
                            >
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Verify</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveCertModal(cert.imageUrl || null)}
                        className="w-full overflow-hidden rounded-xl border border-zinc-200/80 dark:border-white/10 bg-zinc-950/60 group/img block text-left"
                        aria-label="Preview certificate fullscreen"
                      >
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="w-full max-h-72 object-contain mx-auto group-hover/img:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {activeCertModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview"
          onClick={() => setActiveCertModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 border border-white/15 rounded-2xl p-3 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCertModal(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-white/20 text-white flex items-center justify-center shadow-lg"
              aria-label="Close certificate preview"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={activeCertModal}
              alt="Certificate fullscreen preview"
              className="w-full max-h-[82vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

