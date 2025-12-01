// pages/index.js

import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

// --- FUNCIONES MOCK: Simulación del Backend de Render (SSG) ---

/**
 * Simula la llamada al API de Render para obtener la configuración y productos.
 * En la vida real, aquí harías un 'fetch' a tu API de Render:
 * const res = await fetch('https://pestanitas-backend.onrender.com/api/homepage-data');
 * const data = await res.json();
 */
async function fetchHomepageData() {
    // NOTA: Reemplaza estas imágenes con banners de pestañitas, ubicados en /public
    const BANNER_URL_BASE = '/images/banners/'; 
    
    // Simulación de datos estáticos
    const mockData = {
        siteConfig: {
            // La URL base del backend se definiría en un .env, no lo usaremos aquí
            whatsappNumber: '5491112345678',
            bannerImages: [
                `${BANNER_URL_BASE}banner-1.jpg`, // Debe existir en public/images/banners/
                `${BANNER_URL_BASE}banner-2.jpg`,
            ],
        },
        categories: [
            { name: 'Pestañas Clásicas', slug: 'clasicas' },
            { name: 'Volumen Ruso', slug: 'volumen-ruso' },
            { name: 'Adhesivos Profesionales', slug: 'adhesivos' },
            { name: 'Kits de Inicio', slug: 'kits' },
        ],
        featuredProducts: [
            // Simulación de productos. Reemplaza _id y datos con los de tu BD.
            { _id: 'p1', name: 'Set de Pestañas Clásicas (Mix)', price: 95000, category: { name: 'Pestañas Clásicas' }, photos: ['/images/p1.jpg'], isForRent: false, isForSale: true },
            { _id: 'p2', name: 'Pinza Curva "Élite"', price: 12000, category: { name: 'Herramientas' }, photos: ['/images/p2.jpg'], isForRent: false, isForSale: true },
            { _id: 'p3', name: 'Adhesivo Ultra Fuerte 10ml', price: 45000, category: { name: 'Adhesivos' }, photos: ['/images/p3.jpg'], isForRent: false, isForSale: true },
            { _id: 'p4', name: 'Cepillos Desechables (50u)', price: 5000, category: { name: 'Accesorios' }, photos: ['/images/p4.jpg'], isForRent: false, isForSale: true },
        ],
    };

    return mockData;
}


// --- LÓGICA DE GENERACIÓN ESTÁTICA (SSG) ---
export async function getStaticProps() {
    const data = await fetchHomepageData();

    return {
        props: {
            siteConfig: data.siteConfig,
            categories: data.categories,
            featuredProducts: data.featuredProducts,
        },
        // Revalidación Incremental Estática (ISR) - Tu clave para Cloudflare Pages
        // Esto le dice a Next.js (y a Cloudflare) que re-genere esta página 
        // cada 60 segundos si recibe una petición, asegurando contenido fresco sin re-deploy.
        // Cuando tu admin en Render haga un cambio, puedes activar un 'web hook' para 
        // que CloudflarePages revalide la página instantáneamente.
        revalidate: 60, 
    };
}


// --- COMPONENTE DE PÁGINA ---
export default function HomePage({ siteConfig, categories, featuredProducts }) {
    
    // --- Lógica del Carrusel (Adaptación del HTML original) ---
    const renderCarousel = () => {
        if (siteConfig.bannerImages && siteConfig.bannerImages.length > 0) {
            // NOTA: Para que el carrusel funcione realmente, necesitarás el JS de Bootstrap 
            // cargado en el cliente (que no es la filosofía de SSG pura). 
            // Lo convertimos a JSX pero la interactividad debe ser añadida aparte (Hydration).

            return (
                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                    
                    <div className="carousel-indicators">
                        {siteConfig.bannerImages.map((_, index) => (
                            <button 
                                key={index}
                                type="button" 
                                data-bs-target="#heroCarousel" 
                                data-bs-slide-to={index} 
                                className={index === 0 ? 'active' : ''} 
                                aria-current={index === 0 ? 'true' : 'false'} 
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <div className="carousel-inner">
                        {siteConfig.bannerImages.map((bannerUrl, index) => {
                            // Simulación de Cloudinary transform (w_1600,h_900)
                            const optimizedUrl = bannerUrl; 

                            return (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div 
                                        className="hero-slide" 
                                        style={{ backgroundImage: `url('${optimizedUrl}')` }}
                                    >
                                        <div className="hero-content">
                                            <h1>PESTAÑITAS.COM</h1>
                                            <p>Realza tu mirada con nuestros productos de alta calidad.</p>
                                            <Link href="/tienda" className="btn btn-primary btn-accent">Ver Tienda</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            );
        } else {
            // Fallback (idéntico al de Alethia)
            return (
                <section 
                    className="hero-section hero-section-fallback" 
                    // NOTA: Reemplaza esta imagen por una de pestañitas.
                    style={{ backgroundImage: "url('/images/placeholder-banner-pestañas.jpg')" }}
                >
                    <div className="hero-content">
                        <h1>El Arte de la Mirada</h1>
                        <p>Encuentra piezas únicas que transformarán tu look profesional.</p>
                        <Link href="/tienda" className="btn btn-primary btn-accent">Ver Tienda</Link>
                    </div>
                </section>
            );
        }
    };


    return (
        <Layout>
            {/* 1. Carrusel/Hero Section */}
            {renderCarousel()}
            
            {/* 2. Categorías Destacadas */}
            {categories && categories.length > 0 && (
                <section className="category-highlight-section" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">Nuestras Categorías</h2>
                    <p className="section-subtitle">Explora nuestras colecciones de productos esenciales.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {categories.map((cat, index) => (
                            <Link 
                                href={`/categoria/${cat.slug || cat.name.toLowerCase().replace(/\s/g, '-')}`} 
                                key={index} 
                                className="btn btn-secondary"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. Productos Destacados */}
            <section className="featured-products">
                <h2 className="section-title">Productos Destacados</h2>
                <p className="section-subtitle">Nuestra selección especial para realzar tu trabajo..</p>

                <div className="product-grid">
                    {featuredProducts && featuredProducts.length > 0 ? (
                        featuredProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <div className="no-results-card">
                            <h3>No hay productos destacados</h3>
                            <p>El administrador aún no ha marcado ningún producto como destacado. Por favor, revisa la Tienda.</p>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}