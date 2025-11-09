import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-content">
                <div className="footer-section about">
                    <h3>TuRadio.lat</h3>
                    <p>El portal de radios #1 de Latinoamérica. Sintoniza miles de estaciones en vivo. Una plataforma de LFAF Tech.</p>
                </div>
                <div className="footer-section links">
                    <h4>Navegación</h4>
                    <ul>
                        {/* Estos <Link> arreglan tu bug de navegación */}
                        <li><Link href="/">Radios Populares</Link></li>
                        <li><Link href="/generos">Buscar por Género</Link></li>
                        <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
                        <li><Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
                        <li><Link href="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-section links-legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link href="/politica-privacidad">Política de Privacidad</Link></li>
                        <li><Link href="/terminos">Términos y Condiciones</Link></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h4>Síguenos</h4>
                    {/* React necesita que 'style' sea un objeto (doble llave) */}
                    <ul style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                        {/* Enlaces externos siguen siendo <a> */}
                        <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} TuRadio.lat | Una plataforma de <a href="https://lfaftech.com" target="_blank" rel="noopener noreferrer">LFAF Tech</a>
            </div>
        </footer>
    );
}