/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Configuración estándar de Next.js
  
  // ¡Aquí está la magia!
  // Esto reemplaza tu vercel.json
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        // El destino de tu sitemap de radios
        destination: 'https://lfaftechapi.onrender.com/api/radio/sitemap.xml',
      },
      {
        source: '/robots.txt',
        // También haremos lo mismo para robots.txt
        destination: '/robots_real.txt', // Usaremos un archivo estático
      }
    ];
  },
};

module.exports = nextConfig;