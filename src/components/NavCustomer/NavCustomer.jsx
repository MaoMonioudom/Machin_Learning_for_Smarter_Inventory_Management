import { useNavigate } from "react-router-dom";
import { MdSearch, MdAccountCircle } from "react-icons/md"; // Google Material Icons
import "./NavCustomer.css";
import logo from "../../assets/images/logo.png";

function NavCustomer() {
  const navigate = useNavigate();

  return (
    <nav className="nav-customer">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/homecustomer")}>
        <img src={logo} alt="GoCart Logo" />
      </div>

      {/* Links */}
      <div className="nav-links">
        <button onClick={() => navigate("/homecustomer")}>Home</button>
        <button onClick={() => navigate("/products")}>Products</button>
        <button onClick={() => navigate("/promotion")}>Promotion</button>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </div>

      {/* Right icons */}
      <div className="nav-icons">
        <MdSearch className="icon" />
        <MdAccountCircle className="icon" />
      </div>
    </nav>
  );
}

export default NavCustomer;
