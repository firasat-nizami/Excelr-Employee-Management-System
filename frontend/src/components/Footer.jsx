import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Description */}
        <div className="footer-section">
          <h3 className="footer-logo">EMS</h3>
          <p className="footer-text">
            Employee Management System – manage employees, track performance, and empower your organization.
          </p>
        </div>

        {/* About Links */}
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/platform">Platform</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Social Media (UPDATED SECTION) */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          {/* Reverting to a div with icon links for a horizontal layout as seen in the image */}
          <div className="footer-socials">
            {/* Using emojis as simple icons/symbols */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶️</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">🔵</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 EMS. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
