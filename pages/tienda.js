// pages/tienda.js

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

// ===============================================
// LÓGICA DE DATOS ESTÁTICOS (SSG)
// ===============================================

/**
 * Simula la obtención de datos estáticos de la Tienda desde el Backend (Render).
 */
async function fetchStoreData() {
    // En la implementación real, aquí se llamaría a tu API de Render para obtener:
    // - Todas las categorías disponibles
    // - Todos los productos (para un sitio de tamaño pequeño/medio que usa SSG)
    
    // --- MOCK DATA ---
    const allProducts = [
        { _id: 'p1', name: 'Kit Inicial de Volumen Ruso', price: 95000, category: { name: 'Kits' }, photos: ['/images/p1.jpg'], isForSale: true, isForRent: false, tags: ['nuevo', 'volumen'] },
        { _id: 'p2', name: 'Pinza Curva de Precisión', price: 12000, category: { name: 'Herramientas' }, photos: ['/images/p2.jpg'], isForSale: true, isForRent: false, tags: ['oferta', 'accesorios'] },
        { _id: 'p3', name: 'Adhesivo Ultra Rápido 1s', price: 45000, category: { name: 'Adhesivos' }, photos: ['/images/p3.jpg'], isForSale: true, isForRent: false, tags: ['top ventas'] },
        { _id: 'p4', name: 'Set Pestañas 3D (Mix)', price: 5000, category: { name: 'Pestañas Clásicas' }, photos: ['/images/p4.jpg'], isForSale: true, isForRent: false, tags: ['nuevo'] },
        { _id: 'p5', name: 'Removedor en Crema', price: 30000, category: { name: 'Adhesivos' }, photos: ['/images/p5.jpg'], isForSale: true, isForRent: false, tags: ['oferta'] },
        { _id: 'p6', name: 'Espejo de Inspección', price: 8000, category: { name: 'Herramientas' }, photos: ['/images/p6.jpg'], isForSale: true, isForRent: false, tags: ['accesorios'] },
    ];

    const allCategories = [...new Set(allProducts.map(p => p.category.name))].map(name => ({ name }));

    return { allProducts, allCategories };
}


// Función que Next.js ejecuta en el servidor (Build time o Revalidación)
export async function getStaticProps() {
    const data = await fetchStoreData();

    return {
        props: {
            // Pasamos todos los datos necesarios a la página para que el cliente filtre
            initialProducts: data.allProducts,
            initialCategories: data.allCategories,
        },
        revalidate: 60, // ISR: Regenera la página cada 60 segundos si hay tráfico
    };
}


// ===============================================
// COMPONENTE DE PÁGINA (LÓGICA DE FILTRADO)
// ===============================================

export default function TiendaPage({ initialProducts, initialCategories }) {
    const router = useRouter();
    // Obtener la query de búsqueda y filtros de la URL (si vienen de getStaticProps o de la navegación)
    const initialQuery = (router.query.q || '').toLowerCase();
    const initialCategory = (router.query.categoria || '').toLowerCase();

    // Estados para filtros en el cliente
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Para el menú móvil
    
    // Estado para filtros colapsables (para simular el comportamiento del CSS de Alethia)
    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(true);

    // Sincronizar estados con la URL después de la carga inicial
    useEffect(() => {
        setSearchQuery(initialQuery);
        setActiveCategory(initialCategory);
    }, [initialQuery, initialCategory]);


    // Filtrado de Productos (Memorizado para rendimiento)
    const filteredProducts = useMemo(() => {
        return initialProducts.filter(product => {
            const matchesQuery = !searchQuery || product.name.toLowerCase().includes(searchQuery);
            const matchesCategory = !activeCategory || product.category.name.toLowerCase() === activeCategory;
            
            return matchesQuery && matchesCategory;
        });
    }, [initialProducts, searchQuery, activeCategory]);


    // Función para manejar el cambio de categoría
    const handleCategoryChange = (categoryName) => {
        const newCategory = categoryName.toLowerCase() === activeCategory ? '' : categoryName.toLowerCase();
        setActiveCategory(newCategory);
        
        // Actualizar la URL (opcional, pero buena práctica)
        const newQuery = { ...router.query, categoria: newCategory };
        if (!newCategory) delete newQuery.categoria;
        router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
    };

    // Función para manejar el cambio de búsqueda (actualiza la URL al presionar Enter o botón)
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const newQuery = { ...router.query, q: searchQuery };
        if (!searchQuery) delete newQuery.q;
        router.push({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
    };

    // --- COMPONENTES INTERNOS ---

    // 1. Sidebar de Filtros
    const StoreSidebar = () => (
        <aside className="store-sidebar">
            <div className="sidebar-search-container">
                <form className="sidebar-search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Buscar en la tienda..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary btn-accent" aria-label="Buscar">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            {/* Botón de filtros para móvil (según el CSS de Alethia) */}
            <button 
                className={`filter-toggle-button ${isSidebarOpen ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'} 
                <i className="fas fa-chevron-down"></i>
            </button>


            <div className={`filters-container ${isSidebarOpen ? 'active' : ''}`} style={isSidebarOpen ? { maxHeight: '1000px' } : {}}>
                
                {/* 1. Filtro de Categorías */}
                <div className="filter-group">
                    <h4 
                        className={`collapsible-trigger ${isCategoryFilterOpen ? 'active' : ''}`} 
                        onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
                    >
                        Categorías <i className="fas fa-plus"></i>
                    </h4>
                    <ul className="collapsible-panel" style={isCategoryFilterOpen ? { maxHeight: '500px' } : {}}>
                        {initialCategories.map((cat, index) => (
                            <li key={index}>
                                <a 
                                    href="#" 
                                    onClick={(e) => { e.preventDefault(); handleCategoryChange(cat.name); }}
                                    className={cat.name.toLowerCase() === activeCategory ? 'active' : ''}
                                >
                                    {cat.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Aquí irían otros filtros: Precio, Stock, Tags, etc. */}
                
            </div>
        </aside>
    );
    
    
    // --- RENDERIZADO DE LA PÁGINA ---
    return (
        <Layout title="Tienda | Pestañitas.com">
            
            <h1 className="section-title" style={{ marginTop: '0' }}>Nuestra Tienda</h1>
            <p className="section-subtitle">Explora nuestro catálogo completo de productos para pestañas.</p>

            <div className="store-layout">
                {/* Sidebar (Filtros) */}
                <StoreSidebar />

                {/* Contenido Principal (Grilla de Productos) */}
                <div className="store-content">
                    {filteredProducts.length > 0 ? (
                        <div className="product-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results-card">
                            <h3>¡Producto no encontrado!</h3>
                            <p>No encontramos resultados para tu búsqueda: <strong>"{searchQuery || activeCategory}"</strong>.</p>
                            <button onClick={() => { setSearchQuery(''); setActiveCategory(''); router.push('/tienda'); }} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                Ver todos los productos
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
        </Layout>
    );
}