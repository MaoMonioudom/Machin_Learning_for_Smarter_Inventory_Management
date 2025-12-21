import React from 'react';
import './Footer.css';
import Logo from "../../assets/images/logo.png"; // your new path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={Logo} alt="GoCart Logo" className="footer-logo" />
          <p className="footer-description">
            High level experience in web design and development knowledge, producing quality work.
          </p>
          <div className="footer-socials">
            <span className="social-icon fb">FB</span>
            <span className="social-icon ig">IG</span>
            <span className="social-icon yt">YT</span>
            <span className="social-icon ln">IN</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <h4>Product</h4>
            <p>Landing Page</p>
            <p>Popup Builder</p>
            <p>Web-design</p>
            <p>Content</p>
            <p>Integrations</p>
          </div>
          <div className="link-section">
            <h4>Use Cases</h4>
            <p>Web-designers</p>
            <p>Marketers</p>
            <p>Small Business</p>
            <p>Website Builder</p>
          </div>
          <div className="link-section">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Teams</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 - 2026 GoCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
