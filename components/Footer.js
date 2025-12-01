// components/Footer.js

import Link from 'next/link';
import Image from 'next/image'; // Usaremos el componente Image de Next.js para optimización

/**
 * Componente de Pie de Página (Footer) basado en el diseño de Alethia Decora.
 */
const Footer = () => {
    // Año actual para el copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* 1. SECCIÓN: Información de la Tienda (Columna 1) */}
                <div className="footer-section info">
                    <h4 className="footer-title">
                        {/* Aquí va el logo/nombre de Pestañitas */}
                        👁️ Pestañitas.com
                    </h4>
                    <p>
                        Realza tu mirada con nuestros productos de alta calidad. 
                        Somos tu destino ideal para pestañas, pegamentos y accesorios profesionales.
                    </p>
                    <p>
                        <strong>Email:</strong> contacto@pestanitas.com<br/>
                        <strong>Teléfono:</strong> +54 11 XXXX-XXXX
                    </p>
                    
                    {/* Botones de Redes Sociales (IDÉNTICO a Alethia Decora) */}
                    <div className="social-links-footer">
                        {/* Asegúrate de reemplazar # con tus URLs reales */}
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>

                {/* 2. SECCIÓN: Navegación Rápida (Columna 2) */}
                <div className="footer-section links">
                    <h4 className="footer-title">Navegación</h4>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/tienda">Tienda</Link></li>
                        <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                        <li><Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
                    </ul>
                </div>

                {/* 3. SECCIÓN: Políticas y Legal (Columna 3) */}
                <div className="footer-section links">
                    <h4 className="footer-title">Legal</h4>
                    <ul>
                        <li><Link href="/politica-privacidad">Política de Privacidad</Link></li>
                        <li><Link href="/terminos-servicio">Términos de Servicio</Link></li>
                        <li><Link href="/politica-devolucion">Política de Devolución</Link></li>
                        <li><Link href="/mapa-sitio">Mapa del Sitio</Link></li>
                        <li><a href="mailto:ventas@pestanitas.com">Ventas por Mayor</a></li>
                    </ul>
                </div>
            </div>

            {/* Derechos de Autor y Créditos */}
            <div className="footer-bottom">
                <p>
                    &copy; {currentYear} Pestañitas.com. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;