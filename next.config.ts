import 'dotenv/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: {
      properties: [],
    },
  },
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
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
