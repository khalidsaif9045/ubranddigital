const isGitHubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces next export
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubPages
    ? {
        basePath: '/ubranddigital',
        assetPrefix: '/ubranddigital/',
      }
    : {}),
};

module.exports = nextConfig;
