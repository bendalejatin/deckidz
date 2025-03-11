import React from "react";
import "./Styles/Footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTruck,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import logo from "./Images/logo_dec.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_sub">
        <div className="footer-logo">
          <img src={logo} alt="DEC Gaming Studio Logo" className="logo" />
          <h1>Dec Gaming Studio</h1>
        </div>

        <div className="address_main">
          <div className="businesses-container">
            <div className="businesses-title">Businesses</div>
            <ul className="businesses-list">
              <li className="businesses-item">Education</li>
              <li className="businesses-item">Augmented Reality Toys</li>
              <li className="businesses-item">Apps & Games Development</li>
            </ul>
          </div>    
        </div>

        <div className="contact-info">
          <div className="contact-container">
            {/* Track My Order */}
            <div className="contact-item">
              <FaTruck className="contact-icon" />
              <a href="https://deckidz.shiprocket.co/" className="contact-link">
                Track My Order
              </a>
            </div>

            {/* Support Email */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:support@deckidz.com" className="contact-link">
                Support@deckidz.com
              </a>
            </div>

            {/* Phone Number */}
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+917990667314" className="contact-link">
                +91 7990667314
              </a>
            </div>
            <div className="social-media">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaLinkedin className="icon" id="link" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <p>© 2025 by DEC Gaming Studio Pvt Ltd.®</p>
      </div>
    </footer>
  );
};

export default Footer;