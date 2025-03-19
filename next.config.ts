import 'dotenv/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/seva32/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
