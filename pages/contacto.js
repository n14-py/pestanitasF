// pages/contacto.js

import Layout from '../components/Layout';
import Link from 'next/link';

// ===============================================
// LÓGICA DE DATOS ESTÁTICOS (SSG)
// ===============================================

/**
 * Simula la obtención de datos de configuración del Backend (Render).
 */
async function getSiteConfig() {
    // En la vida real, se obtendrían estos datos del API de configuración de tu Backend
    return {
        whatsappNumber: '5491112345678', // Coloca aquí tu número real
        email: 'contacto@pestanitas.com', // Coloca aquí tu email
    };
}

// getStaticProps: Genera la página estáticamente
export async function getStaticProps() {
    const siteConfig = await getSiteConfig();
    return {
        props: {
            siteConfig,
        },
        revalidate: 60 * 60, // Revalida cada hora (ISR)
    };
}


// ===============================================
// COMPONENTE DE LA PÁGINA
// ===============================================

export default function ContactoPage({ siteConfig }) {
    const { whatsappNumber, email } = siteConfig;

    return (
        <Layout title="Contacto | Pestañitas.com">
            
            {/* Contenedor estático del diseño de Alethia Decora */}
            <div className="static-page-container">
                
                <h1>Contáctanos</h1>
                <p style={{ textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                    ¿Tienes dudas sobre algún producto o servicio? 
                    ¡Haz click en cualquiera de los iconos de abajo para comunicarte con nosotros!
                </p>

                <div className="contact-info" style={{ maxWidth: '600px', margin: '2.5rem auto 0 auto' }}>
                    
                    <h3 style={{ textAlign: 'center' }}>Nuestros Canales</h3>
                    <p style={{ textAlign: 'center' }}>Puedes contactarnos directamente a través de estos canales:</p>
                    
                    <ul className="contact-icon-list">
                        <li>
                            {/* Usamos la variable obtenida de getStaticProps */}
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </a>
                        </li>
                        <li>
                            {/* Enlace de ubicación mockeado */}
                            <a href="https://www.google.com/maps/place/Alethia+Decora/@-25.3777963,-57.4955249,15z/data=!4m6!3m5!1s0x945db3eb620e908f:0x1d3a0d0d60bd3e0a!8m2!3d-25.381065!4d-57.4935355!16s%2Fg%2F11rhh_vj8v?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" title="Ubicación">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Ubicación</span>
                            </a>
                        </li>
                        {/* Adaptando enlaces a Pestañitas.com (reemplaza # con tus URLs reales) */}
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <i className="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="TikTok">
                                <i className="fab fa-tiktok"></i>
                                <span>TikTok</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="Pinterest">
                                <i className="fab fa-pinterest-p"></i>
                                <span>Pinterest</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="YouTube">
                                <i className="fab fa-youtube"></i>
                                <span>YouTube</span>
                            </a>
                        </li>
                        <li>
                            {/* Usamos la variable obtenida de getStaticProps */}
                            <a href={`mailto:${email}`} title="Email">
                                <i className="fas fa-envelope"></i>
                                <span>Email</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            
        </Layout>
    );
}