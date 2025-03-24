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
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/photos/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'mars.jpl.nasa.gov',
        port: '',
        pathname: '/msl-raw-images/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'mars.nasa.gov',
        port: '',
        pathname: '/mer/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
