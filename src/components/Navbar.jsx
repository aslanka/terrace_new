import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/TK-PNG.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Terrance Kitchen Logo" className="brand-logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><a href="https://online.skytab.com/d36ac840d8b7d537272c95f31ebec377/order-settings" target='blank'>Online Order</a></li>
        <li><a href="https://302s20904633717.s4shops.com" target='blank'>Gift Card</a></li>

        {/* Dropdown Menu */}
        <li className="dropdown"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}>
          <span className="menu-label">Menu ▾</span>
          {menuOpen && (
            <ul className="dropdown-content">
              <li><Link to="/menu">Breakfast & Lunch</Link></li>
              <li><Link to="/specials">Chef Specialites</Link></li>
              <li><Link to="/drinks">Drinks & Cocktails</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
