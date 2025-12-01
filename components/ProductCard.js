// components/ProductCard.js

import Link from 'next/link';

// Función mock para simular el formateo de precio (puedes reemplazarla luego)
// Asume que el precio viene como un número y lo formatea a moneda (ej: ARS)
const formatPrice = (price) => {
    if (!price) return '$0.00';
    // Se recomienda usar el servidor (getStaticProps) para obtener el precio ya formateado
    // o usar un paquete Intl.NumberFormat si el formato es fijo.
    const priceInCents = price / 100;
    return priceInCents.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
};


const ProductCard = ({ product }) => {
    // 1. Manejo de error si no hay datos
    if (!product || !product.category) {
        return (
            <div className="product-card">
                <div className="card-content">
                    <h3 className="card-title">Error al cargar producto</h3>
                </div>
            </div>
        );
    }

    // 2. Lógica de la imagen (manteniendo el formato de Cloudinary del original)
    let thumbnailUrl = '/images/placeholder-product.png'; // Placeholder local
    if (product.photos && product.photos.length > 0) {
        let base = product.photos[0];
        const thumbnailTransforms = 'w_400,h_300,c_fill,g_auto,q_auto,f_auto';
        
        // Simula la transformación de la URL de Cloudinary para mantener la estructura de Alethia.
        // En tu entorno de Next.js real, puedes usar el componente <Image> de Next.js.
        thumbnailUrl = base.replace('/upload/', `/upload/${thumbnailTransforms}/`);
    }

    // 3. Lógica del Badge (Venta/Alquiler)
    let badgeText = null;
    if (product.isForRent && !product.isForSale) {
        badgeText = 'Alquiler';
    } else if (product.isForSale && !product.isForRent) {
        badgeText = 'Venta';
    } else if (product.isForSale && product.isForRent) {
        badgeText = 'Venta/Alquiler';
    }
    
    const productLink = `/producto/${product._id}`;

    return (
        <div className="product-card">

            <Link href={productLink} className="card-image-link">
                <img
                    src={thumbnailUrl} 
                    alt={`Producto: ${product.name}`}
                    className="product-card-image"
                    // Next.js maneja la carga perezosa automáticamente, pero lo mantenemos por consistencia
                    loading="lazy"
                />
                
                {badgeText && (
                    <span className="card-badge">{badgeText}</span>
                )}
            </Link>

            <div className="card-content">
                <div className="card-category">
                    {product.category.name}
                </div>

                <h3 className="card-title">
                    <Link href={productLink}>{product.name}</Link>
                </h3>

                <div className="card-price">
                    {formatPrice(product.price)}
                </div>

                <Link href={productLink} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;