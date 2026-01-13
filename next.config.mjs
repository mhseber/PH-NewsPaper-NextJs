/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [ 'www.aljazeera.com',
  'encrypted-tbn0.gstatic.com',
  'example-cdn.com'], 
  },
   plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default nextConfig;
