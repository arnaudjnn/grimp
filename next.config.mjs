/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.grimp.io',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: `https://www.grimp.io`,
      },
      {
        source: '/blog/:path*',
        destination: `https://www.grimp.io/blog/:path*`,
      },
    ];
  },
};

export default nextConfig;
