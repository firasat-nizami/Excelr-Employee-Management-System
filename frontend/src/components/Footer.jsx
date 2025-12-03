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

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#" aria-label="Website">🌐</a>
            <a href="#" aria-label="Facebook">👍</a>
            <a href="#" aria-label="Twitter">🐦</a>
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
