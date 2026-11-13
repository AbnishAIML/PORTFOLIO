import React from 'react';
import { SkillItem } from '../types';
import {
  Code,
  FileCode,
  Layout,
  Palette,
  Server,
  Cpu,
  Network,
  Database,
  Layers,
  Binary,
  Terminal,
  Globe,
  GitBranch,
  Boxes,
  Sparkles,
  AppWindow,
  CheckCircle2,
  Shield,
  Radio,
  FolderTree,
  Cloud,
  Zap,
  Send,
  Triangle,
  Braces,
} from 'lucide-react';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'javascript':
        return <FileCode className="w-4 h-4 text-amber-400" />;
      case 'python':
        return <Braces className="w-4 h-4 text-sky-400" />;
      case 'c':
        return <Terminal className="w-4 h-4 text-slate-400" />;
      case 'c++':
        return <Binary className="w-4 h-4 text-blue-500" />;
      case 'react':
        return <AppWindow className="w-4 h-4 text-cyan-400" />;
      case 'html5':
        return <Layout className="w-4 h-4 text-orange-400" />;
      case 'css3':
        return <Palette className="w-4 h-4 text-blue-400" />;
      case 'tailwind css':
        return <Sparkles className="w-4 h-4 text-cyanaccent-400" />;
      case 'redux':
        return <Layers className="w-4 h-4 text-purple-400" />;
      case 'axios':
        return <Send className="w-4 h-4 text-indigo-400" />;
      case 'vite':
        return <Zap className="w-4 h-4 text-amber-400" />;
      case 'web design':
        return <Globe className="w-4 h-4 text-fuchsia-400" />;
      case 'node.js':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'express.js':
        return <Cpu className="w-4 h-4 text-zinc-300" />;
      case 'rest api':
        return <Network className="w-4 h-4 text-indigo-400" />;
      case 'jwt':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'websockets':
        return <Radio className="w-4 h-4 text-cyanaccent-400" />;
      case 'mvc':
        return <FolderTree className="w-4 h-4 text-accent-400" />;
      case 'mongodb':
        return <Database className="w-4 h-4 text-green-500" />;
      case 'cloudinary':
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'git':
        return <GitBranch className="w-4 h-4 text-orange-400" />;
      case 'github':
        return <GitBranch className="w-4 h-4 text-zinc-300" />;
      case 'vercel':
        return <Triangle className="w-4 h-4 text-zinc-200" />;
      case 'netlify':
        return <Globe className="w-4 h-4 text-teal-400" />;
      case 'vibe coding':
        return <Sparkles className="w-4 h-4 text-accent-400" />;
      case 'data structures':
        return <Boxes className="w-4 h-4 text-amber-500" />;
      case 'algorithms':
        return <Code className="w-4 h-4 text-cyanaccent-400" />;
      default:
        return <Code className="w-4 h-4 text-accent-400" />;
    }
  };

  return (
    <div className="group relative rounded-xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent-500/45 hover:shadow-lg hover:shadow-accent-500/10 backdrop-blur-sm flex flex-col justify-between">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-white/5 group-hover:scale-105 transition-transform">
          {getIcon(skill.name)}
        </div>
        <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
          {skill.name}
        </span>
      </div>

      <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-2 text-[11px] font-mono">
        <span className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase truncate">
          {skill.category}
        </span>
        {skill.usedInVidSphere ? (
          <span className="inline-flex items-center gap-1 text-accent-600 dark:text-accent-400 font-medium bg-accent-500/10 px-2 py-0.5 rounded-full border border-accent-500/20 shrink-0">
            <CheckCircle2 className="w-3 h-3 text-accent-500" />
            VidSphere
          </span>
        ) : (
          <span className="text-zinc-500 dark:text-zinc-400 text-[10px] bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-full shrink-0">
            {skill.contextLabel}
          </span>
        )}
      </div>
    </div>
  );
};

