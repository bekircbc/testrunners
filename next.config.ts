// next.config.js
const withNextIntl = require('next-intl/plugin')(
  './next-intl.config.js' // config file path
);

// OWASP Security Headers Configuration
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }, // Enforce HTTPS
  { key: 'X-Frame-Options', value: 'DENY' }, // Prevents Clickjacking attacks
  { key: 'X-Content-Type-Options', value: 'nosniff' }, // Prevents MIME-sniffing vulnerabilities
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' } // Restricts hardware access
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Applies security headers to all application routes
  async headers() {
    return [
      {
        source: '/(.*)', // Applies to all routes
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);

