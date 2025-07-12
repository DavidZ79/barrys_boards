import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img
                src="/assets/KEEB/logo_assets/teal_folders/barrys-boards-website-favicon-color.png"
                alt="Barry's Boards"
                className="logo-image"
              />
              <span className="logo-text">Barry's Boards</span>
            </Link>
          </div>
          
          <nav className="nav">
            <div className="nav-list">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/products" className="nav-link">
                Products
              </Link>
              <Link to="/keyboards" className="nav-link">
                Keyboards
              </Link>
              <Link to="/parts" className="nav-link">
                Parts
              </Link>
            </div>
          </nav>
          
          <div className="header-actions">
            <button className="search-button">
              <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/cart" className="cart-link">
              <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="cart-badge">0</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 