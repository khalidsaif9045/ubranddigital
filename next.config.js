const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/ubranddigital' : '',
  assetPrefix: isProd ? '/ubranddigital/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
