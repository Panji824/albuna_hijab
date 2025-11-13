import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; 
import { fetchHomePageData } from '../utils/apiservice';
const HomePage = ({ data: staticData }) => {
    // Destructuring data statis (untuk fallback dan footer)
    const { heroSection, footer, general, promoSection: staticPromo } = staticData;
    
    // States untuk menyimpan data dinamis (dengan fallback data statis)
    const [products, setProducts] = useState(staticData.products || []);
    const [promotions, setPromotions] = useState(staticPromo);
    const [isLoading, setIsLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState('All Products'); 
    
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            // Panggil fungsi dari API Service
            const apiResult = await fetchHomePageData(); 
            
            if (apiResult.success) {
                // Update state jika pengambilan data berhasil
                if (apiResult.products && apiResult.products.length > 0) {
                    setProducts(apiResult.products);
                }
                if (apiResult.promotion) {
                    setPromotions(apiResult.promotion); 
                }
            } else {
                console.error("Gagal memuat data dinamis. Menggunakan data statis.");
            }
            setIsLoading(false);
        };

        loadData();
    }, []); 

    const newArrivals = products.slice(0, 2); 
    const categories = ['All Products', 'Pashmina', 'Jilbab Segi Empat'];

    const filteredProducts = products.filter(product => {
        if (activeCategory === 'All Products') return true;
        if (activeCategory === product.category) return true;
        return false;
    });

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center', padding: '100px' }}>
                <h2>Memuat data dari server...</h2>
                <p>Pastikan server Django Anda berjalan di http://127.0.0.1:8000</p>
            </div>
        );
    }

    return (
        <div className="home-page-container">
            {/* Section 1: HERO & VISION/MISSION (ID: about) */}
            <section id="about" className="section hero-section">
                <div className="hero-content">
                    <h2 className="hero-main-title">{heroSection.title}</h2>
                    <div className="vision-mission-container">
                        <div className="vision-box">
                            <h3 className="sub-title">Our Vision</h3>
                            <p>{heroSection.vision}</p>
                        </div>
                        <div className="mission-box">
                            <h3 className="sub-title">Our Mission</h3>
                            <p>{heroSection.mission}</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image-col">
                    <img src="../assets/images/model-hero.jpg" alt="Elegance Meets Modesty" className="hero-image" />
                </div>
            </section>

            {/* Section 2: PROMO & NEW ARRIVALS (ID: promo) */}
            <section id="promo" className="promo-new-arrivals-section">
                
                {/* Kolom Kiri: Promo Banner (Menggunakan State/Data Dinamis) */}
                <div className="promo-box">
                    <span className="promo-tag-label">Limited Time Offer</span>
                    <h2 className="promo-offer">{promotions.title || staticPromo.offer}</h2>
                    <p className="promo-tagline">{promotions.tagline || staticPromo.tagline}</p>
                    <p className="promo-description">{promotions.description || staticPromo.description}</p>
                    <a href="#products" className="promo-btn">Shop Now &rarr;</a>
                </div>

                {/* Kolom Kanan: New Arrivals (Menggunakan State/Data Dinamis) */}
                <div className="new-arrivals-container">
                    <h3 className="new-arrivals-title">New Arrivals</h3>
                    <p className="new-arrivals-subtitle">Discover our latest collection</p>
                    <div className="new-arrivals-grid">
                        {newArrivals.map(product => (
                            <ProductCard 
                                key={product.id || product.name} 
                                product={product} 
                                currency={general.currency} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: OUR COLLECTION (ID: products) */}
            <section id="products" className="section products-collection-section">
                <h2 className="section-title">Our Collection</h2>
                
                {/* Filter Buttons */}
                <div className="product-filters">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setActiveCategory(cat)}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Grid Produk yang sudah difilter */}
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard 
                            key={product.id || product.name} 
                            product={product} 
                            currency={general.currency} 
                        />
                    ))}
                </div>
            </section>

            {/* Section 4: FOOTER (ID: contact-us) */}
            <footer id="contact-us" className="footer-section">
                <div className="footer-content">
                    <div className="footer-logo">{general.title}</div>
                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            {footer.quickLinks.map(link => <li key={link}><a href="#top">{link}</a></li>)}
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <p>📍 {footer.address}</p>
                        <p>📞{footer.whatsapp} </p>
                        <p>📧 {footer.email}</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} {general.title}. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default HomePage;