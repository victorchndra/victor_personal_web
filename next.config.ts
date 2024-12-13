import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.victor-chandra.com',
        port: '',
        pathname: '/storage/**'
      }
    ]
  }
};

export default nextConfig;
