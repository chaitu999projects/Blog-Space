/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmos.so',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
