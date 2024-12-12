import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  staticPageGenerationTimeout: 1000,
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '8000',
      //   pathname: '/storage/**'
      // },
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
