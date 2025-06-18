// src/pages/ContactUs.jsx
import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-wrapper centered-only">
      <div className="contact-form">
      <div className="contact-fields">
  <h1>Contact Us</h1>
  <p>Get in touch and let us know how we can help</p>
  <form>
    <div className="form-row">
      <div className="form-group">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" />
      </div>
    </div>
    <div className="form-group">
      <label>Topic</label>
      <select>
        <option>Select a topic</option>
      </select>
    </div>
    <div className="form-group">
      <label>Your message</label>
      <textarea rows="5" />
    </div>
    <div className="form-group checkbox">
      <input type="checkbox" />
      <label>Sign up for newsletter</label>
    </div>
    <button type="submit">Send Message →</button>
  </form>
</div>

<div className="contact-extra">
  <div className="footer-links">
    <p>Follow Us</p>
    <div className="social-icons">
      <a href="#">🔵</a>
      <a href="#">📸</a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default ContactUs;
