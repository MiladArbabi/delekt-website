// site/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               
  async redirects() {
    return [
      { source: '/preview', destination: '/', permanent: true },
      { source: '/preview/:path*', destination: '/:path*', permanent: true },
      { source: '/preview/thanks.html', destination: '/thanks', permanent: true },
      { source: '/thanks.html', destination: '/thanks', permanent: true },
    ];
  },
};
module.exports = nextConfig;