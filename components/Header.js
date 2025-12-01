// components/Header.js

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Componente de Cabecera (Header) basado en el diseño de Alethia Decora.
 */
const Header = () => {
    const router = useRouter();
    // Estado para el menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Estado para la barra de búsqueda (controlada por React)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchPopupVisible, setIsSearchPopupVisible] = useState(false);

    // Referencia para el input de búsqueda y el popup
    const searchRef = useRef(null);

    // Función para alternar el menú móvil
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    // Función para manejar el cambio en la búsqueda (controlado)
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    // Función para realizar la búsqueda (simulación de la lógica de fetch)
    const fetchSearchResults = useCallback(async (query) => {
        if (query.length < 2) {
            setSearchResults([]);
            setIsSearchPopupVisible(false);
            return;
        }

        try {
            // NOTA IMPORTANTE: Esta URL (api/search) apunta al BACKEND que crearemos en Render.
            // Por ahora, simularemos datos, pero luego debe llamar a tu API REST de Render.
            // Para la Generación Estática de Sitios, esto se hará en el cliente.
            
            // Simulamos una llamada asíncrona a la API (Mock data)
            const mockProducts = [
                { _id: '1', name: `Pestaña efecto volumen para ${query}`, photos: ['/images/product-mock-1.jpg'] },
                { _id: '2', name: `Pegamento profesional de pestañas ${query}`, photos: ['/images/product-mock-2.jpg'] },
            ].filter(p => p.name.toLowerCase().includes(query.toLowerCase()));


            setSearchResults(mockProducts);
            setIsSearchPopupVisible(mockProducts.length > 0);
            
        } catch (err) {
            console.error('Error en búsqueda instantánea:', err);
            setSearchResults([]);
            setIsSearchPopupVisible(false);
        }
    }, []);

    // Efecto que se dispara cada vez que el `searchQuery` cambia
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchSearchResults(searchQuery);
        }, 300); // Debounce de 300ms

        return () => clearTimeout(timeoutId);
    }, [searchQuery, fetchSearchResults]);

    // Función para cerrar el popup al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchPopupVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchRef]);


    // Función para determinar si un enlace está activo (basado en el path de Next.js)
    const isActive = (href) => {
        // La tienda incluye /tienda, /producto/* y /categoria/*
        if (href === '/tienda' && (router.pathname.includes('/tienda') || router.pathname.includes('/producto') || router.pathname.includes('/categoria'))) {
            return true;
        }
        return router.pathname === href;
    };


    return (
        <header className="main-header">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        {/* Adaptando el logo de Alethia Decora a Pestañitas */}
                        {/* Se recomienda colocar un logo de Pestañitas en public/images/logo-pestanitas.png */}
                        {/* El logo URL dinámico de EJS se reemplaza por una ruta estática */}
                        
                        {/* NOTA: He comentado la parte del logoUrl y lo he reemplazado por texto y un placeholder si no hay logo */}
                        {/* Si deseas un logo estático, colócalo en /public/logo.png */}
                        
                        {/* Ejemplo de logo estático: */}
                        {/* <img src="/logo-pestanitas.png" alt="Logo Pestañitas.com" style={{ height: '40px', marginRight: '10px' }} /> */}
                        👁️ PESTAÑITAS.COM
                        
                    </Link>
                </div>

                <nav className="navbar-nav">
                    <Link href="/" className={isActive('/') ? 'active' : ''}>Inicio</Link>
                    <Link href="/tienda" className={isActive('/tienda') ? 'active' : ''}>Tienda</Link>
                    <Link href="/sobre-nosotros" className={isActive('/sobre-nosotros') ? 'active' : ''}>Sobre Nosotros</Link>
                    <Link href="/contacto" className={isActive('/contacto') ? 'active' : ''}>Contacto</Link>
                </nav>

                <div className="navbar-actions">
                    <div className="header-search" ref={searchRef}>
                        <i className="fas fa-search"></i>
                        {/* El formulario POST se convierte en un input controlado */}
                        <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.length > 0) router.push(`/tienda?q=${searchQuery}`); }}>
                            <input 
                                type="text" 
                                name="q" 
                                id="header-search-input" 
                                className="header-search-input" 
                                placeholder="Buscar productos..." 
                                autoComplete="off"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onFocus={() => searchQuery.length >= 2 && searchResults.length > 0 && setIsSearchPopupVisible(true)}
                            />
                        </form>
                        
                        {/* Popup de Resultados */}
                        {isSearchPopupVisible && searchResults.length > 0 && (
                            <div id="search-results-popup" style={{ display: 'block' }}>
                                {searchResults.map(product => (
                                    <Link key={product._id} href={`/producto/${product._id}`} className="search-result-item" onClick={() => setIsSearchPopupVisible(false)}>
                                        <img 
                                            // NOTA: Debes asegurar que esta ruta exista o la imagen no se verá.
                                            src={product.photos[0] || '/images/placeholder-product.png'} 
                                            alt={product.name}
                                        />
                                        <span>{product.name}</span>
                                    </Link>
                                ))}
                                <Link href={`/tienda?q=${searchQuery}`} className="view-all" onClick={() => setIsSearchPopupVisible(false)}>
                                    Ver todos los resultados
                                </Link>
                            </div>
                        )}
                        
                    </div>
                </div>

                <div className="mobile-menu-icon" onClick={toggleMobileMenu} id="mobile-menu-open">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            
            {/* Menú Móvil (Componente lateral) */}
            <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-nav-overlay" onClick={toggleMobileMenu}></div>
            <nav className={`mobile-nav-panel ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-nav-panel">
                <nav className="navbar-nav">
                    <Link href="/" className={isActive('/') ? 'active' : ''} onClick={toggleMobileMenu}>Inicio</Link>
                    <Link href="/tienda" className={isActive('/tienda') ? 'active' : ''} onClick={toggleMobileMenu}>Tienda</Link>
                    <Link href="/sobre-nosotros" className={isActive('/sobre-nosotros') ? 'active' : ''} onClick={toggleMobileMenu}>Sobre Nosotros</Link>
                    <Link href="/contacto" className={isActive('/contacto') ? 'active' : ''} onClick={toggleMobileMenu}>Contacto</Link>
                </nav>
                <div className="dropdown-divider"></div>
                {/* Incluir el buscador en el menú móvil (solo la estructura, el CSS lo oculta en desktop) */}
                <div className="navbar-actions">
                    <div className="header-search">
                        <i className="fas fa-search"></i>
                        <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.length > 0) { router.push(`/tienda?q=${searchQuery}`); toggleMobileMenu(); } }}>
                             <input 
                                type="text" 
                                name="q" 
                                className="header-search-input" 
                                placeholder="Buscar productos..." 
                                autoComplete="off"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;