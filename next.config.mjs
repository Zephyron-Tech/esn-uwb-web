/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['outstatic'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'buddy.zcu.cz',
      },
    ],
  },
};

export default nextConfig;
