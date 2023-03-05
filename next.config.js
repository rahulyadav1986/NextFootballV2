/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' }
      
  //   }
  // },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains: ['www.scorebat.com'],
    // unoptimized: true,
  },
  enviourment : {
    MYFOOTBALLAPIKEY : ['9e21a3cee8mshf98cb345da11a90p17846bjsnff4266b5ca3e'],
    url: 'free-football-soccer-videos.p.rapidapi.com'
  }
}

module.exports = nextConfig
