import { useState, useEffect } from 'react';
import { GITHUB_CONFIG } from '../data/content';

export interface GitHubStats {
  user: {
    avatarUrl: string;
    bio: string;
    followers: number;
    following: number;
    publicRepos: number;
    profileUrl: string;
  };
  repo: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    openIssues: number;
    language: string;
    url: string;
    updatedAt: string;
  };
  isLoading: boolean;
  isFallback: boolean;
}

export function useGitHubData(): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    user: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/190868840?v=4',
      bio: GITHUB_CONFIG.fallbackStats.bio,
      followers: GITHUB_CONFIG.fallbackStats.followers,
      following: GITHUB_CONFIG.fallbackStats.following,
      publicRepos: GITHUB_CONFIG.fallbackStats.publicRepos,
      profileUrl: GITHUB_CONFIG.profileUrl,
    },
    repo: {
      name: GITHUB_CONFIG.featuredRepo.name,
      description: GITHUB_CONFIG.featuredRepo.description,
      stars: 0,
      forks: 0,
      openIssues: 0,
      language: GITHUB_CONFIG.featuredRepo.language,
      url: GITHUB_CONFIG.featuredRepo.url,
      updatedAt: new Date().toISOString(),
    },
    isLoading: true,
    isFallback: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const headers: HeadersInit = {
          Accept: 'application/vnd.github.v3+json',
        };

        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        const [userRes, repoRes] = await Promise.allSettled([
          fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}`, { headers }),
          fetch(`https://api.github.com/repos/${GITHUB_CONFIG.featuredRepo.fullName}`, { headers }),
        ]);

        if (!isMounted) return;

        let userData = null;
        let repoData = null;

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          userData = await userRes.value.json();
        }

        if (repoRes.status === 'fulfilled' && repoRes.value.ok) {
          repoData = await repoRes.value.json();
        }

        setStats((prev) => ({
          user: {
            avatarUrl: userData?.avatar_url || prev.user.avatarUrl,
            bio: userData?.bio || prev.user.bio,
            followers: typeof userData?.followers === 'number' ? userData.followers : prev.user.followers,
            following: typeof userData?.following === 'number' ? userData.following : prev.user.following,
            publicRepos: typeof userData?.public_repos === 'number' ? userData.public_repos : prev.user.publicRepos,
            profileUrl: userData?.html_url || prev.user.profileUrl,
          },
          repo: {
            name: repoData?.name || prev.repo.name,
            description: repoData?.description || prev.repo.description,
            stars: typeof repoData?.stargazers_count === 'number' ? repoData.stargazers_count : prev.repo.stars,
            forks: typeof repoData?.forks_count === 'number' ? repoData.forks_count : prev.repo.forks,
            openIssues:
              typeof repoData?.open_issues_count === 'number' ? repoData.open_issues_count : prev.repo.openIssues,
            language: repoData?.language || prev.repo.language,
            url: repoData?.html_url || prev.repo.url,
            updatedAt: repoData?.pushed_at || repoData?.updated_at || prev.repo.updatedAt,
          },
          isLoading: false,
          isFallback: !userData || !repoData,
        }));
      } catch {
        if (isMounted) {
          setStats((prev) => ({
            ...prev,
            isLoading: false,
            isFallback: true,
          }));
        }
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
}

