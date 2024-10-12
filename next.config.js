/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.decentralized-content.com', 'media.decentralized-content.com'],
  },
}

module.exports = nextConfig
