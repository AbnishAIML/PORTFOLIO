import React, { useState, useEffect } from 'react';
import { OWNER } from '../data/content';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X, MousePointer, Send, Github, Linkedin, Code2, FileText } from 'lucide-react';

interface NavbarProps {
  cursorEnabled: boolean;
  onToggleCursor: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'VidSphere', href: '#featured-project', id: 'featured-project' },
  { label: 'Building', href: '#currently-building', id: 'currently-building' },
  { label: 'GitHub', href: '#github-activity', id: 'github-activity' },
  { label: 'Milestones', href: '#milestones', id: 'milestones' },
  { label: 'Resume', href: '#resume', id: 'resume' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ cursorEnabled, onToggleCursor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id), 140);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#08090d]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-600 to-cyanaccent-500 flex items-center justify-center text-white font-bold font-mono text-base shadow-md shadow-accent-500/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-accent-500 transition-colors">
                {OWNER.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                B.Tech AI/ML • MERN &amp; DSA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-100/75 dark:bg-zinc-900/65 p-1.5 rounded-full border border-zinc-200/60 dark:border-white/5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                    isActive
                      ? 'bg-accent-600 text-white font-semibold shadow-sm shadow-accent-500/30'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Utilities */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleCursor}
              className={`p-2 rounded-lg text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                cursorEnabled
                  ? 'text-accent-500 bg-accent-500/10 hover:bg-accent-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
              title={cursorEnabled ? 'Custom cursor: ON' : 'Custom cursor: OFF'}
              aria-label="Toggle custom cursor"
            >
              <MousePointer className="w-4 h-4" />
            </button>

            <ThemeToggle />

            <a
              href={OWNER.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 hover:border-accent-500/40 text-zinc-800 dark:text-zinc-200 transition"
            >
              <FileText className="w-3.5 h-3.5 text-accent-500" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-500/20 transition-all duration-200 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-200"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-zinc-200/80 dark:border-white/10 bg-white/95 dark:bg-[#08090d]/95 backdrop-blur-xl px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-accent-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-200/60 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={OWNER.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={OWNER.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={OWNER.social.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-amber-500"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
            <a
              href={OWNER.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-accent-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

