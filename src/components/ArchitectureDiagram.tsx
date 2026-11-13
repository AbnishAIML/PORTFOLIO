import React, { useState } from 'react';
import { FEATURED_PROJECT } from '../data/content';
import { ArrowRight, ArrowDown, Shield, Server, Database, Globe, Cpu } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const steps = FEATURED_PROJECT.architecture.steps;
  const [activeStepId, setActiveStepId] = useState<string>(steps[0].id);

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'client':
        return <Globe className="w-5 h-5 text-cyanaccent-400" />;
      case 'gateway':
        return <Server className="w-5 h-5 text-accent-400" />;
      case 'middleware':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'controllers':
        return <Cpu className="w-5 h-5 text-accent-400" />;
      case 'storage':
        return <Database className="w-5 h-5 text-cyanaccent-400" />;
      default:
        return <Server className="w-5 h-5 text-accent-400" />;
    }
  };

  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0];

  return (
    <div className="w-full rounded-2xl bg-zinc-950/90 border border-white/10 p-5 sm:p-7 backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyanaccent-400 animate-pulse" />
            <h4 className="text-sm font-mono uppercase tracking-wider text-accent-400 font-semibold">
              Live Architecture Flow
            </h4>
          </div>
          <p className="text-xs text-zinc-400 mt-1 font-mono">
            Client (React + Axios) → Express 5 → JWT Guard → MVC Controllers → MongoDB + Cloudinary
          </p>
        </div>
        <div className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md self-start sm:self-auto border border-white/5">
          Click any node to inspect
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative items-stretch" role="tablist">
          {steps.map((step, idx) => {
            const isSelected = step.id === activeStepId;
            return (
              <React.Fragment key={step.id}>
                <button
                  type="button"
                  onClick={() => setActiveStepId(step.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-accent-500/15 border-accent-500 shadow-lg shadow-accent-500/20'
                      : 'bg-zinc-900/90 border-white/10 hover:border-accent-500/40 hover:bg-zinc-800/80'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 group-hover:text-accent-400">
                      0{idx + 1}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                      {getStepIcon(step.id)}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-sm text-white group-hover:text-accent-300">
                      {step.title}
                    </h5>
                    <p className="text-xs text-accent-400 font-mono mt-0.5">{step.subtitle}</p>
                    <span className="inline-block mt-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                      {step.tech}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-cyanaccent-400 border-2 border-zinc-950" />
                  )}
                </button>

                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center py-1 md:hidden">
                    <ArrowDown className="w-4 h-4 text-accent-500/60 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="hidden md:flex items-center justify-between px-8 mt-4 text-zinc-600">
          {steps.slice(0, -1).map((step) => (
            <div key={step.id} className="flex-1 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-accent-500/70" />
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 rounded-xl bg-zinc-900/90 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-cyanaccent-400">LAYER INSPECTION:</span>
            <span className="text-sm font-bold text-white">
              {activeStep.title} ({activeStep.tech})
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300">{activeStep.details}</p>
        </div>
        <div className="bg-black/50 p-3 rounded-lg border border-white/5 text-xs font-mono text-zinc-400 min-w-[220px]">
          <span className="text-zinc-500 block text-[10px] uppercase">Core Responsibility:</span>
          <span className="text-accent-300 font-medium">{activeStep.role}</span>
        </div>
      </div>
    </div>
  );
};

