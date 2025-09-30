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
  // XATOLARNI CHEKLAB O'TISH UCHUN:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // QO'SHIMCHA XAVFSIZLIK:
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Productionda console ni olib tashlash
  },
  // STATIC FAKLLAR UCHUN:
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
};

module.exports = nextConfig;
