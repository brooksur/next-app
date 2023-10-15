/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'bit.ly',
        protocol: 'https'
      }
    ]
  }
}

module.exports = nextConfig
