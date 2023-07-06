/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // config
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io','images.unsplash.com'],
  },
   pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    offlinePage: '/offline', // add the route to your offline page

    disable: process.env.NODE_ENV === 'development',
    scope: '/',
    sw: 'service-worker.js',
    // runtimeCaching,
  },
})