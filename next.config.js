const path = require('path')
const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: false,
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
// module.exports = {
//   reactStrictMode: false,
// }