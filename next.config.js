/** @type {import('next').NextConfig} */


import withPWA from 'next-pwa'



const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io','images.unsplash.com'],
  },
  pwa: {
    dest: 'public', // this will be used to output service-worker.js
    register: true,
    skipWaiting: true,
    offlinePage: '/offline', // add the route to your offline page
  },
}


export default nextConfig
