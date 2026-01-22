/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Allow local logo images
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    // Temporarily ignore ESLint during builds until config is fixed
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on type errors during development
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
