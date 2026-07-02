const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <-- This creates the ultra-lightweight build for your 2GB Hetzner RAM
  
  // You can add any other custom Next.js configurations here if needed
};

module.exports = withNextIntl(nextConfig);
