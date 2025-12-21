import { useNavigate, useLocation } from "react-router-dom";
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import "./NavCustomer.css";
import logo from "../../assets/images/logo.png";

function NavCustomer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // keep user on the same page, just update query
    navigate(`${location.pathname}?q=${value}`);
  };

  return (
    <nav className="nav-customer">
      <div className="logo" onClick={() => navigate("/homecustomer")}>
        <img src={logo} alt="GoCart Logo" />
      </div>

      <div className="nav-links">
        <button onClick={() => navigate("/homecustomer")}>Home</button>
        <button onClick={() => navigate("/products")}>Products</button>
        <button onClick={() => navigate("/promotion")}>Promotion</button>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </div>

      {/* Search */}
      <div className="search-wrapper">
        <MdSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      <div className="nav-icons">
        <MdAccountCircle
          className="icon"
          onClick={() => navigate("/account")}
        />
      </div>
    </nav>
  );
}

export default NavCustomer;
