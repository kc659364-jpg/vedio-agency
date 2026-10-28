/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    '10.71.110.250',
    'localhost',
    '127.0.0.1',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      },
      {
        protocol: 'https',
        hostname: 'commondatastorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.coverr.co',
      },
    ],
  },
};

export default nextConfig;
