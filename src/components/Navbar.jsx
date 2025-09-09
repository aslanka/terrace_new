import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/TK-PNG.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Terrace Kitchen Logo" className="brand-logo" />
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><a href="https://online.skytab.com/d36ac840d8b7d537272c95f31ebec377/order-settings" target="_blank" rel="noreferrer">Online Order</a></li>
        <li><a href="https://302s20904633717.s4shops.com" target="_blank" rel="noreferrer">Gift Card</a></li>

        <li className="dropdown">
          <span className="menu-label" onClick={() => setDropdownOpen(!dropdownOpen)}>Menu ▾</span>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Breakfast & Lunch</Link></li>
              <li><Link to="/specials" onClick={() => setMenuOpen(false)}>Chef Specialties</Link></li>
              <li><Link to="/drinks" onClick={() => setMenuOpen(false)}>Drinks & Cocktails</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
  