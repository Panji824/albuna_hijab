import React from 'react';
import { getCloudinaryUrl } from '../utils/cloudinaryUtils';

const formatRupiah = (number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
};

const ProductCard = ({ product }) => {
    const { name, price, tag, image } = product;
    
    // Asumsi: image_url dari API berisi Public ID Cloudinary
    const finalImageUrl = getCloudinaryUrl(image);
    
    const tagClass = tag ? tag.toLowerCase().replace(/ /g, '-') : '';

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img 
                    src={finalImageUrl || '/assets/images/default.jpg'}
                    alt={name} 
                    className="product-image" 
                />
                {tag && (
                    <span className={`product-tag ${tagClass}`}>
                        {tag}
                    </span>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{formatRupiah(price)}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;