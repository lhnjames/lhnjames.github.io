/**
 * Site configuration
 * Unified configuration for the portfolio website
 */

export const BLUR_FADE_DELAY = 0.05;

export const siteConfig = {
  url: "https://lhnjames.github.io",
  lastUpdated: "2026.09",
  avatarUrl: "/hanning-lu.jpg",
  blog: {
    /* Number of posts per page on the blog list */
    postsPerPage: 6,
  },
} as const;
