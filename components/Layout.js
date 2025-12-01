// components/Layout.js

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

/**
 * Componente Layout principal. Envuelve todas las páginas.
 * Añade metadatos globales y la estructura (Header, Main, Footer).
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - El contenido de la página actual.
 * @param {string} [props.title] - Título específico de la página.
 * @param {string} [props.description] - Descripción específica de la página para SEO.
 * @param {string} [props.image] - URL de la imagen para compartir (OpenGraph).
 */
const Layout = ({ 
    children, 
    title = 'Pestañitas.com | Productos de Belleza y Accesorios Profesionales', 
    description = 'Descubre las mejores pestañas y accesorios para realzar tu mirada. Envío rápido y calidad garantizada con Pestañitas.', 
    image = '/images/og-image.png' // Asegúrate de colocar una imagen en public/images
}) => {
    return (
        <>
            <Head>
                {/* Metatags SEO/Social Media */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" /> {/* Coloca tu favicon en public/favicon.png */}
                
                {/* Open Graph (OG) Metatags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://www.pestanitas.com" />
                {/* La URL de la imagen debe ser absoluta para OG (Next.js la resolverá localmente) */}
                <meta property="og:image" content={`https://www.pestanitas.com${image}`} />
                <meta property="og:site_name" content="Pestañitas.com" />

                {/* Twitter Card Metatags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`https://www.pestanitas.com${image}`} />
            </Head>

            <div id="layout-wrapper">
                {/* 1. Cabecera */}
                <Header />

                {/* 2. Contenido Principal */}
                <main className="main-content">
                    {/* El contenido de la página se inserta aquí. 
                        Nota: el CSS de Alethia usa un contenedor dentro del body para centrar el contenido. */}
                    <div className="container">
                        {children}
                    </div>
                </main>

                {/* 3. Pie de Página */}
                <Footer />
            </div>
        </>
    );
};

export default Layout;