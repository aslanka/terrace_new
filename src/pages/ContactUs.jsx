import React from "react";
import "./ContactUs.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        {/* Left side */}
        <div className="contact-fields">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Fill out the form and our team will get back to you soon.</p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Topic</label>
              <select>
                <option>Select a topic</option>
                <option>General Inquiry</option>
                <option>Reservations</option>
                <option>Partnerships</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="Write your message here..." />
            </div>

            <div className="form-group checkbox">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">Sign me up for the newsletter</label>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right side */}
        <div className="contact-extra">
          <h2>Stay Connected</h2>
          <p>Follow us on social media for updates and promotions:</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
