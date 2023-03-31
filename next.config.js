/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
   experimental: {
     appDir: true
   },
  // trailingSlash: true,
  // productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
