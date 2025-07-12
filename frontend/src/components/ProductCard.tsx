import React from 'react';
import { Product } from '../types/Product';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-price">${product.price}</span>
          <span className="product-stock">
            {product.stockQuantity > 0 ? `${product.stockQuantity} in stock` : 'Out of stock'}
          </span>
        </div>
        <div className="product-footer">
          <span className="product-category">
            {product.category}
          </span>
          {onAddToCart && product.stockQuantity > 0 && (
            <button
              onClick={() => onAddToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 