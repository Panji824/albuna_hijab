// src/components/ProductCard.jsx
import React from 'react';

// Fungsi untuk format harga ke IDR
const formatRupiah = (number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
};

const ProductCard = ({ product, currency }) => {
    // Destructuring data produk
    const { name, price, tag, image_url } = product;
    // Kelas tag disesuaikan untuk CSS Vanilla
    const tagClass = tag ? tag.toLowerCase().replace(/ /g, '-') : '';

    return (
        <div className="product-card">
            {/* Kontainer Gambar */}
            <div className="product-image-container">
                {/* Placeholder gambar, ganti dengan path sebenarnya di folder public/assets/images/ */}
                <img 
                        src={image_url || `/assets/images/${product.image || 'default.jpg'}`} // Fallback untuk dev statis
                        alt={name} 
                        className="product-image" 
                    />
                {/* Tag produk (New, Sale, dll) */}
                {tag && (
                    <span className={`product-tag ${tagClass}`}>
                        {tag}
                    </span>
                )}
            </div>
            {/* Informasi Produk */}
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{formatRupiah(price)}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;