/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      }, {
        protocol: 'http',
        hostname: 'localhost:3000',
      },
    ],
  },
};

export default nextConfig;
