/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.fairu.app',
      },
    ],
  },
  transpilePackages: ['@fairu/sdk'],
};

module.exports = nextConfig;
