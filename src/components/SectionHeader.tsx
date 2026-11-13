import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('mb-10 sm:mb-12 max-w-3xl', className)}>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-zinc-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

