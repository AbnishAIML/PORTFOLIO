import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { SKILL_CATEGORIES } from '../data/content';
import { CheckCircle2, Filter, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyVidSphere, setOnlyVidSphere] = useState<boolean>(false);

  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills);
  const totalUsedInVidSphere = allSkills.filter((s) => s.usedInVidSphere).length;

  const displayedCategories = (
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory)
  )
    .map((cat) => ({
      ...cat,
      skills: onlyVidSphere ? cat.skills.filter((s) => s.usedInVidSphere) : cat.skills,
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" aria-label="Technical Skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeader
            badge="02 // TECHNICAL STACK"
            title="Full-Stack & CS Capabilities"
            description="Organized across six engineering domains—zero arbitrary percentage bars. Every competency maps directly to production builds, deployment workflows, or core computer science."
            className="mb-0 md:mb-0"
          />

          <button
            type="button"
            onClick={() => setOnlyVidSphere((prev) => !prev)}
            className={`self-start md:self-end inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-mono transition-colors ${
              onlyVidSphere
                ? 'bg-accent-600 text-white border-accent-500 shadow-sm'
                : 'bg-accent-500/10 border-accent-500/20 text-accent-600 dark:text-accent-400 hover:bg-accent-500/20'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>
              {onlyVidSphere
                ? `Showing VidSphere Stack (${totalUsedInVidSphere})`
                : `${totalUsedInVidSphere} of ${allSkills.length} active in VidSphere`}
            </span>
          </button>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-zinc-400 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Domain:</span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'All'
                ? 'bg-accent-600 text-white font-medium shadow-sm shadow-accent-500/20'
                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            All ({allSkills.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat.title
                  ? 'bg-accent-600 text-white font-medium shadow-sm shadow-accent-500/20'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Categories */}
        {displayedCategories.length === 0 ? (
          <div className="p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-white/15 text-center font-mono text-sm text-zinc-500">
            <Layers className="w-6 h-6 mx-auto mb-2 text-accent-500" />
            No skills in this domain are tagged under VidSphere.{' '}
            <button
              type="button"
              onClick={() => setOnlyVidSphere(false)}
              className="text-accent-500 underline ml-1"
            >
              Show all
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {displayedCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <div className="border-b border-zinc-200/80 dark:border-white/10 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-500 to-cyanaccent-500" />
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                  {category.skills.map((skill) => (
                    <SkillCard key={`${category.title}-${skill.name}`} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

