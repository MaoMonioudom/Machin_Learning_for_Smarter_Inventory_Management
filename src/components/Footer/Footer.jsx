import { useNavigate } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo & Description */}
        <div className="footer-column">
            <div onClick={() => navigate("/homecustomer")}>
              <img className="logo" src={logo} alt="GoCart Logo" />
            </div>
          <p>Gocart is your all-in-one marketplace. Buy, sell, and explore products with ease and safety.</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>
          <a href="/">Landing</a>
          <a href="/home">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
        </div>

        {/* Column 3: Support */}
        <div className="footer-column">
          <h3>Support</h3>
          <a href="/faq">FAQ</a>
          <a href="/help">Help Center</a>
          <a href="/terms">Terms & Privacy</a>
        </div>

        {/* Column 4: Social / Contact */}
        <div className="footer-column">
          <h3>Connect with Us</h3>
          <a href="https://www.facebook.com/share/1MPdCXfbi1/?mibextid=wwXIfr" target="_blank">Facebook</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="mailto:support@gocart.com">Email</a>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Gocart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
    