import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/deployApp',
        permanent: true, // use true if it's a permanent redirect
      },
    ];
  },
};

