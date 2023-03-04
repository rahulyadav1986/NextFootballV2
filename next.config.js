/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
      
    }
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains: ['www.scorebat.com'],
    unoptimized: true,
  }
}

module.exports = nextConfig
