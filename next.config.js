/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcMinifyDebugOptions: {
      compress: {
        default: true,
        side_effects: false,
      },
    },
  },
};

module.exports = nextConfig;
