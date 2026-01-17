/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = nextConfig
