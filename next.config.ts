// next.config.js
const withNextIntl = require('next-intl/plugin')(
  './next-intl.config.js' // config file path
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone'
};

module.exports = withNextIntl(nextConfig);

