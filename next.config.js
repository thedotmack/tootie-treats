/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['instagram.com', 'linktr.ee'],
    unoptimized: true,
  },
}

module.exports = nextConfig