import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { productApi } from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await productApi.getAllProducts();
        // Show first 6 products as featured
        setFeaturedProducts(products.slice(0, 6));
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', product);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Custom Mechanical Keyboards
            </h1>
            <p className="hero-subtitle">
              Build your dream keyboard with premium parts and expert craftsmanship
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="hero-button-primary">
                Shop Now
              </Link>
              <Link to="/keyboards" className="hero-button-secondary">
                View Keyboards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="featured-header">
          <h2 className="featured-title">Featured Products</h2>
          <p className="featured-subtitle">Discover our most popular mechanical keyboard parts</p>
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link to="/products" className="view-all-button">
            View All Products
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-container">
          <div className="categories-header">
            <h2 className="categories-title">Shop by Category</h2>
            <p className="categories-subtitle">Find exactly what you need for your build</p>
          </div>

          <div className="categories-grid">
            {[
              { name: 'Keyboards', category: 'keyboards', icon: '⌨️' },
              { name: 'Switches', category: 'switches', icon: '🔄' },
              { name: 'Keycaps', category: 'keycaps', icon: '🔤' },
              { name: 'Parts', category: 'parts', icon: '🛠️' },
            ].map((cat) => (
              <Link
                key={cat.category}
                to={`/${cat.category}`}
                className="category-card"
              >
                <div className="category-icon">{cat.icon}</div>
                <h3 className="category-name">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 