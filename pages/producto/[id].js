// pages/producto/[id].js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Para la optimización de imágenes (opcional pero recomendado)
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';


export const runtime = 'experimental-edge';
// ===============================================
// MOCK DATA Y LÓGICA DE SERVIDOR (SSG)
// ===============================================

// Mock de la base de datos de productos (simula la respuesta de Render)
const MOCK_PRODUCTS = [
    { _id: 'p1', name: 'Kit Inicial Volumen Ruso', price: 95000, description: 'Kit profesional completo para iniciar en la técnica de Volumen Ruso. Incluye pinzas, adhesivo de 1s y mix de pestañas 3D.', sku: 'KIT-VOL-001', category: { name: 'Kits' }, photos: ['/images/p1.jpg', '/images/p1-detail-2.jpg', '/images/p1-detail-3.jpg'], isForSale: true, isForRent: false },
    { _id: 'p2', name: 'Pinza Curva de Precisión', price: 12000, description: 'Pinza curva de alta precisión, ideal para separación y colocación de abanicos de volumen.', sku: 'TOOL-PIN-002', category: { name: 'Herramientas' }, photos: ['/images/p2.jpg', '/images/p2-detail-2.jpg'], isForSale: true, isForRent: false },
    { _id: 'p3', name: 'Adhesivo Ultra Rápido 1s (5 ml)', price: 45000, description: 'Adhesivo de secado ultra rápido (1 segundo) con retención de hasta 8 semanas. Bajo nivel de vapores.', sku: 'ADH-ULT-003', category: { name: 'Adhesivos' }, photos: ['/images/p3.jpg'], isForSale: true, isForRent: false },
    { _id: 'p4', name: 'Cepillos Desechables (50u)', price: 5000, description: 'Paquete de 50 cepillos de microfibra, ideales para la limpieza y preparación antes del servicio.', sku: 'ACC-BRUSH-004', category: { name: 'Accesorios' }, photos: ['/images/p4.jpg'], isForSale: true, isForRent: false },
    { _id: 'p5', name: 'Removedor en Crema de Pestañas', price: 30000, description: 'Removedor suave y eficaz en textura crema, ideal para retirar extensiones sin dañar la pestaña natural.', sku: 'REM-CRE-005', category: { name: 'Adhesivos' }, photos: ['/images/p5.jpg'], isForSale: true, isForRent: false },
];

// Función mock para simular el formateo de precio
const formatPrice = (price) => {
    if (!price) return '$0.00';
    const priceInCents = price / 100;
    return priceInCents.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
};

// 1. getStaticPaths: Define qué rutas pre-renderizar
export async function getStaticPaths() {
    // En la vida real, aquí harías un fetch para obtener TODOS los IDs/slugs de tus productos
    const paths = MOCK_PRODUCTS.map(product => ({
        params: { id: product._id },
    }));

    return { 
        paths, 
        // fallback: 'blocking' es mejor para Next.js con Cloudflare
        // Si se pide un producto no generado, Next.js lo genera y cachea (ISR)
        fallback: 'blocking' 
    };
}

// 2. getStaticProps: Obtiene los datos del producto específico
export async function getStaticProps({ params }) {
    const product = MOCK_PRODUCTS.find(p => p._id === params.id);
    
    if (!product) {
        return { notFound: true }; // Muestra la página 404
    }

    // Simular productos recomendados (excluye el producto actual)
    const recommendedProducts = MOCK_PRODUCTS.filter(p => p._id !== params.id).slice(0, 4);

    return {
        props: { 
            product,
            recommendedProducts,
            // Aquí podrías pasar la URL base de WhatsApp del siteConfig si la tuvieras
            whatsappNumber: '5491112345678' 
        },
        revalidate: 60 * 5, // Revalida cada 5 minutos
    };
}


// ===============================================
// COMPONENTE DE LA PÁGINA
// ===============================================

export default function ProductDetail({ product, recommendedProducts, whatsappNumber }) {
    
    // Estado para manejar la imagen principal seleccionada
    const [mainImage, setMainImage] = useState(product.photos[0]);

    if (!product) {
        return <Layout title="Producto No Encontrado"><h1>404 | Producto no encontrado</h1></Layout>;
    }

    const title = `${product.name} | Pestañitas.com`;
    const description = product.description.substring(0, 150) + '...';

    // Función para cambiar la imagen principal al hacer click en la miniatura
    const handleThumbnailClick = (photoUrl) => {
        setMainImage(photoUrl);
    };

    // Generar el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20estoy%20interesado%20en%20el%20producto%20"${product.name}"%20(${product.sku}).%20`;


    return (
        <Layout title={title} description={description} image={product.photos[0]}>

            {/* Breadcrumb simple */}
            <nav style={{ margin: '1rem 0' }}>
                <Link href="/tienda" style={{ color: 'var(--text-muted-color)' }}>Tienda</Link> / 
                <span style={{ fontWeight: '600' }}> {product.name}</span>
            </nav>

            {/* Layout de Detalle de Producto (Grid 1x2 en Desktop) */}
            <div className="product-detail-layout">
                
                {/* 1. Galería de Imágenes */}
                <div className="product-gallery">
                    <div className="main-image">
                        {/* Usamos el tag <img> simple o <Image> de Next.js. 
                           Usamos <img> para facilitar la coincidencia con el CSS original. */}
                        <img 
                            src={mainImage} 
                            alt={`Imagen principal de ${product.name}`} 
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>

                    {/* Miniaturas */}
                    {product.photos.length > 1 && (
                        <div className="product-thumbnails">
                            {product.photos.map((photoUrl, index) => (
                                <img
                                    key={index}
                                    src={photoUrl}
                                    alt={`Miniatura ${index + 1}`}
                                    onClick={() => handleThumbnailClick(photoUrl)}
                                    className={photoUrl === mainImage ? 'active' : ''}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* 2. Información del Producto */}
                <div className="product-info">
                    <h1>{product.name}</h1>

                    <div className="price">{formatPrice(product.price)}</div>

                    <p className="description">
                        {product.description}
                    </p>

                    {/* Botón de WhatsApp (IDÉNTICO a Alethia) */}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-whatsapp btn-block">
                        <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
                        Consultar por WhatsApp
                    </a>
                    
                    {/* Botón secundario para agregar al carrito (si implementas uno) */}
                    <button className="btn btn-secondary btn-block" style={{ marginTop: '10px', fontSize: '1rem' }}>
                        <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i>
                        Añadir al Carrito (Próximamente)
                    </button>


                    {/* Meta Información */}
                    <div className="product-meta">
                        <span><strong>SKU:</strong> {product.sku}</span>
                        <span><strong>Categoría:</strong> <Link href={`/categoria/${product.category.name.toLowerCase()}`}>{product.category.name}</Link></span>
                        {/* Aquí puedes añadir stock, marca, etc. */}
                    </div>

                </div>
            </div>

            {/* 3. Productos Recomendados */}
            {recommendedProducts.length > 0 && (
                <section className="recommended-section">
                    <h2 className="section-title">Te podría interesar</h2>
                    
                    <div className="product-grid">
                        {recommendedProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </section>
            )}
            
        </Layout>
    );
}