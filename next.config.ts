// next.config.js
const withNextIntl = require('next-intl/plugin')(
  './next-intl.config.js' // config dosyasının yolu
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = withNextIntl(nextConfig);

