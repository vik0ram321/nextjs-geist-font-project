import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/madhav-chat',
        destination: '/api/madhav-chat',
      },
    ];
  },
};

export default nextConfig;
