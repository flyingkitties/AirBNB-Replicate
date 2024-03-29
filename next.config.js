/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['links.papareact.com', 'lh3.googleusercontent.com'],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoiZmx5aW5na2l0dGllcyIsImEiOiJjbDhrOXJzMWsxODJpM3Ftcm5taWFzN3dqIn0.IHdRF6kXPHAZZ6-1MNrK0A',
  },
};

module.exports = nextConfig;
