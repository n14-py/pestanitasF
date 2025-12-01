// pages/_app.js

import '../public/css/style.css'; // Importa los estilos globales modificados de Pestañitas
import Head from 'next/head';

/**
 * Componente principal de la aplicación Next.js. 
 * Aquí cargamos estilos globales y librerías externas.
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Carga de la librería de íconos Font Awesome (Necesaria para que el Header y Footer funcionen) */}
      <Head>
        {/* Metatags y enlaces esenciales aquí */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      {/* Component es la página actual (index.js, tienda.js, etc.) */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;