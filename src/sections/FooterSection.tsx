import React from 'react';
import { OWNER } from '../data/content';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-[#08090d]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-base text-zinc-900 dark:text-white">
              {OWNER.name}
            </p>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
              B.Tech CSE (AI/ML) • Full-Stack MERN Developer • Zero Mock Data
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={OWNER.social.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-accent-500 transition"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={OWNER.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-accent-500 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={OWNER.social.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg border border-zinc-200 dark:border-white/10 text-amber-500 hover:border-amber-500/40 transition"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${OWNER.email}`}
              className="p-2 rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-accent-500 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-accent-500/40 transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-400">
          <span>© {new Date().getFullYear()} {OWNER.name}. Built with React, Vite &amp; Tailwind CSS.</span>
          <span>Knowledge Park III, Greater Noida, India</span>
        </div>
      </div>
    </footer>
  );
};

