const path = require('path')
const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com']
  }
})