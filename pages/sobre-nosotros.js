// pages/sobre-nosotros.js

import Layout from '../components/Layout';
import Link from 'next/link';

/**
 * Función de Next.js para generar la página estáticamente.
 * No necesitamos datos dinámicos, pero getStaticProps asegura que se genere 
 * el HTML durante la compilación.
 */
export async function getStaticProps() {
    return {
        props: {
            // Puedes cargar contenido estático desde aquí si lo deseas
        },
        revalidate: 60 * 60 * 24, // Revalida una vez al día
    };
}


/**
 * Componente de la página "Sobre Nosotros" basado en el layout estático de Alethia Decora.
 */
export default function SobreNosotrosPage() {
    return (
        <Layout title="Sobre Nosotros | Pestañitas.com">
            
            {/* Contenedor de página estática, idéntico al que usa Alethia */}
            <div className="static-page-container">
                
                <h1 style={{ marginBottom: '2rem' }}>Nuestra Misión en Pestañitas.com</h1>
                
                <p>
                    En Pestañitas.com, creemos que cada mirada es una obra de arte. 
                    Nuestra misión es empoderar a lashistas, estilistas y entusiastas de la belleza 
                    proporcionándoles las herramientas y los productos de la más alta calidad en el mercado. 
                    Desde pestañas de volumen ruso hasta adhesivos de grado profesional, 
                    cada artículo está seleccionado bajo estrictos estándares de calidad.
                </p>

                <h2 style={{ marginTop: '2rem', fontSize: '1.8rem', textAlign: 'left' }}>Nuestra Historia</h2>
                
                <p>
                    Fundada por profesionales de la belleza, Pestañitas.com nació de la necesidad de tener acceso fácil 
                    a productos confiables y de rendimiento superior. Antes de nosotros, encontrar el equilibrio entre 
                    calidad, seguridad y precio era un desafío. Hoy, hemos simplificado ese proceso, 
                    convirtiéndonos en el proveedor de confianza para cientos de estudios de belleza en toda la región.
                </p>

                <h2 style={{ marginTop: '2rem', fontSize: '1.8rem', textAlign: 'left' }}>Compromiso con la Calidad</h2>
                
                <p>
                    Sabemos que el arte de las extensiones de pestañas requiere precisión. 
                    Por eso, nuestros adhesivos tienen tiempos de secado consistentes y una retención superior, 
                    mientras que nuestras pestañas están fabricadas con materiales que imitan la suavidad y el brillo natural. 
                    Tu éxito es nuestro compromiso.
                </p>
                
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/contacto" className="btn btn-primary btn-accent" style={{ fontSize: '1.1rem' }}>
                        ¡Contáctanos!
                    </Link>
                </div>
            </div>

        </Layout>
    );
}