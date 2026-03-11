/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['outstatic'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
