/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server-mode für Scalingo (nicht Static Export)
  output: 'standalone',
  reactStrictMode: false,
  images: {
    unoptimized: false,  // Image Optimization API aktiviert für Server
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
};

module.exports = nextConfig;
