/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'content.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'vadwalamadrisana.org',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
