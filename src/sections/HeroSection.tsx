import React, { useState } from 'react';
import { OWNER } from '../data/content';
import { HeroTerminal } from '../components/HeroTerminal';
import { Avatar } from '../components/Avatar';
import {
  ArrowDown,
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  FileText,
  Terminal,
  User,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [rightTab, setRightTab] = useState<'terminal' | 'profile'>('terminal');

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border bg-accent-500/10 border-accent-500/20 text-accent-700 dark:text-accent-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Internships, Hackathons &amp; Collaborations</span>
            </div>

            <div>
              <p className="text-base sm:text-lg font-mono text-accent-600 dark:text-accent-400 font-semibold tracking-wide">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-zinc-900 dark:text-white mt-1">
                {OWNER.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-zinc-700 dark:text-zinc-300">
                {OWNER.headline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {OWNER.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent-500" />
                {OWNER.location}
              </span>
              <span className="hidden sm:inline text-zinc-400">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyanaccent-500" />
                {OWNER.education.institution} • {OWNER.education.currentYear}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#featured-project"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-accent-600 hover:bg-accent-700 text-white shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore VidSphere</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={OWNER.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/80 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyanaccent-500" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/70 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-accent-500" />
                <span>Connect</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-xs font-mono text-zinc-400 mr-1">Channels:</span>
              <a
                href={OWNER.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent-500 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub (@AbnishAIML)"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={OWNER.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent-500 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn (ABNISHAIML)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={OWNER.social.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-amber-500 transition-colors"
                aria-label="LeetCode Profile"
                title="LeetCode (@ABNISHAIML)"
              >
                <Code2 className="w-4 h-4 text-amber-500" />
              </a>
              <a
                href={`mailto:${OWNER.email}`}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-accent-500 transition-colors"
                aria-label="Email directly"
                title={OWNER.email}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Dual-Mode Terminal / Portrait Switcher */}
          <div className="lg:col-span-5 w-full space-y-3">
            <div className="flex items-center justify-center lg:justify-end">
              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setRightTab('terminal')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    rightTab === 'terminal'
                      ? 'bg-accent-600 text-white font-semibold shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Terminal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRightTab('profile')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    rightTab === 'profile'
                      ? 'bg-accent-600 text-white font-semibold shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Portrait</span>
                </button>
              </div>
            </div>

            {rightTab === 'terminal' ? (
              <HeroTerminal />
            ) : (
              <div className="rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-[#0c0d14]/90 backdrop-blur-xl p-6 shadow-2xl flex flex-col items-center">
                <Avatar imageUrl={OWNER.avatarUrl} compact />
                <p className="mt-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 text-center">
                  {OWNER.role} • {OWNER.education.batch}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

