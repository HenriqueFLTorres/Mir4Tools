/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      '729883301106-26e339aj5f9nj45g2jkoae1om63uauks.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    JWT_SECRET: 'fcd7e552129bfd88f74bd525c9072576',
  },
};

module.exports = nextConfig;
