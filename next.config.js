const path = require('path')
const withPWA = require('next-pwa')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

module.exports = withPWA({
  images: { domains: ['bit.ly', 'images.unsplash.com'] },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  },
  webpack: (config) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    config.resolve.alias['react-fast-compare'] = path.resolve(
      __dirname,
      'node_modules',
      'react-fast-compare'
    )
    config.resolve.alias['react-is'] = path.resolve(
      __dirname,
      'node_modules',
      'next/node_modules/react-is'
    )
    config.resolve.alias['@emotion/is-prop-valid'] = path.resolve(
      __dirname,
      'node_modules',
      '@emotion/is-prop-valid'
    )
    config.resolve.alias['@emotion/memoize'] = path.resolve(
      __dirname,
      'node_modules',
      '@emotion/memoize'
    )
    config.resolve.alias.tslib = path.resolve(
      __dirname,
      'node_modules',
      'tslib'
    )
    config.resolve.alias['strip-ansi'] = path.resolve(
      __dirname,
      'node_modules',
      'next/dist/compiled/strip-ansi'
    )
    config.resolve.alias['@babel/runtime'] = path.resolve(
      __dirname,
      'node_modules',
      '@babel/runtime'
    )
    return config
  }
})
