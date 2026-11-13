import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useGitHubData } from '../hooks/useGitHubData';
import { Github, Users, Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react';

export const GitHubActivitySection: React.FC = () => {
  const { user, repo, isLoading, isFallback } = useGitHubData();

  return (
    <section
      id="github-activity"
      aria-label="GitHub Activity"
      className="py-20 sm:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeader
            badge="05 // OPEN SOURCE"
            title="GitHub Presence"
            description="Live developer profile and repository telemetry directly from GitHub. Transparent, real-time, with graceful fallback."
            className="mb-0 md:mb-0"
          />

          <div className="self-start md:self-end flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-[11px] font-mono text-zinc-500">
            {isLoading ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin text-accent-500" />
                <span>Syncing telemetry...</span>
              </>
            ) : isFallback ? (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Cached Snapshot</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Live API Connected</span>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={user.avatarUrl}
                  alt="AbnishAIML GitHub Avatar"
                  className="w-16 h-16 rounded-2xl border-2 border-accent-500/40 object-cover shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = '/abnish.png';
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">AbnishAIML</h3>
                  <p className="text-xs font-mono text-accent-600 dark:text-accent-400">
                    github.com/AbnishAIML
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-mono">
                {user.bio}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-1">
                    <Users className="w-3.5 h-3.5 text-accent-500" />
                    <span>Followers</span>
                  </div>
                  <span className="text-xl font-bold font-mono text-zinc-900 dark:text-white">
                    {user.followers}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-1">
                    <Code2 className="w-3.5 h-3.5 text-cyanaccent-500" />
                    <span>Public Repos</span>
                  </div>
                  <span className="text-xl font-bold font-mono text-zinc-900 dark:text-white">
                    {user.publicRepos}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={user.profileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-zinc-900 hover:bg-black text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-white/75 dark:bg-zinc-900/65 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-600 dark:text-accent-400">
                  <Github className="w-4 h-4" />
                  <span>Featured Repository</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20">
                  Public
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-zinc-900 dark:text-white mb-2">
                {repo.name}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {repo.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>Stars</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-zinc-900 dark:text-white">
                    {repo.stars}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                    <GitFork className="w-3.5 h-3.5 text-accent-400" />
                    <span>Forks</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-zinc-900 dark:text-white">
                    {repo.forks}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                    <Code2 className="w-3.5 h-3.5 text-cyanaccent-400" />
                    <span>Primary</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold font-mono text-zinc-900 dark:text-white">
                    {repo.language}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-accent-600 hover:bg-accent-700 text-white shadow-md shadow-accent-500/20 transition"
            >
              <span>Inspect {repo.name} Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

