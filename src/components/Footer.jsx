import React from 'react';
import './Footer.css';
import logo from '../assets/TK-PNG.png'; // update path if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Terrace Kitchen Logo" />
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Our Menu</li>
            <li>About Us</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Working Hours</h4>
          <p>Mon - Sun: 7:00am - 3:00pm</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>2812 Erwin Rd. Suite 101<br />Durham N.C. 27705</p>
          <p>919 9730028<br />919 9730029</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>Copyright © 2025 Terrace Kitchen, All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
