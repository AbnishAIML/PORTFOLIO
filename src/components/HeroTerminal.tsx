import React, { useState, useEffect } from 'react';
import { HERO_TERMINAL_FACTS } from '../data/content';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Terminal, Copy, Check, Play } from 'lucide-react';
import { copyToClipboard } from '../lib/utils';

export const HeroTerminal: React.FC = () => {
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const currentFact = HERO_TERMINAL_FACTS[activeCommandIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedCommand(currentFact.cmd);
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    setDisplayedCommand('');
    let index = 0;
    const target = currentFact.cmd;

    const timer = setInterval(() => {
      index++;
      setDisplayedCommand(target.slice(0, index));
      if (index >= target.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 42);

    return () => clearInterval(timer);
  }, [activeCommandIndex, prefersReducedMotion, currentFact.cmd]);

  const handleCopy = async () => {
    const textToCopy = Array.isArray(currentFact.output)
      ? currentFact.output.join('\n')
      : currentFact.output;
    const ok = await copyToClipboard(textToCopy);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-white/85 dark:bg-[#0c0d14]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-accent-500/35">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent-500" />
            abnish@dev-studio:~
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white px-2 py-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          title="Copy output to clipboard"
          aria-label="Copy terminal output"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Command Tabs */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-zinc-50 dark:bg-black/40 border-b border-zinc-200/60 dark:border-white/5 overflow-x-auto text-xs font-mono">
        <span className="text-zinc-400 text-[11px] mr-1 hidden sm:inline">Run:</span>
        {HERO_TERMINAL_FACTS.map((item, idx) => (
          <button
            type="button"
            key={item.cmd}
            onClick={() => setActiveCommandIndex(idx)}
            className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap transition-colors flex items-center gap-1 ${
              activeCommandIndex === idx
                ? 'bg-accent-500/20 text-accent-600 dark:text-accent-300 font-semibold border border-accent-500/30'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800/60'
            }`}
          >
            <Play className="w-2.5 h-2.5 opacity-60" />
            <span>{item.cmd}</span>
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm min-h-[210px] flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 mb-2.5 flex-wrap">
            <span className="text-emerald-600 dark:text-emerald-400">➜</span>
            <span className="text-cyanaccent-600 dark:text-cyanaccent-400">~</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{displayedCommand}</span>
            {isTyping && <span className="w-2 h-4 bg-accent-500 inline-block animate-pulse align-middle" />}
          </div>

          <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap pl-4 border-l border-zinc-300 dark:border-zinc-800">
            {Array.isArray(currentFact.output) ? (
              currentFact.output.map((line, lIdx) => (
                <div key={lIdx} className="py-0.5 text-xs">
                  {line}
                </div>
              ))
            ) : (
              <pre className="font-mono text-xs overflow-x-auto p-0 m-0 bg-transparent text-inherit">
                {currentFact.output}
              </pre>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-200/50 dark:border-white/5 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>MERN + DSA Workspace • Ready</span>
          </div>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};

