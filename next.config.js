const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '**' },
      { protocol: 'https', hostname: 'media.dev.to', pathname: '**' },
    ],
  },
  output: 'export',
  trailingSlash: true,
  // ASSETPREFIX NI O'CHIRING YANA COMMENTGA OLING
  // assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
