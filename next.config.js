/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"]
   
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiZmx5aW5na2l0dGllcyIsImEiOiJjbDhrOXJzMWsxODJpM3Ftcm5taWFzN3dqIn0.IHdRF6kXPHAZZ6-1MNrK0A"
  }
};




module.exports = nextConfig
