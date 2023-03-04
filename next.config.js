/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains: ['www.scorebat.com']
  }
}

module.exports = nextConfig
