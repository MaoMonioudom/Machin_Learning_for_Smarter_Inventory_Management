import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import "./NavCustomer.css";
import logo from "../../assets/images/logo.png";

function NavCustomer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const activeStyle = {
    fontWeight: "700",
    color: "#000",
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    navigate(`${location.pathname}?q=${value}`);
  };

  return (
    <nav className="customer-nav">
      {/* Logo */}
      <div className="customer-logo" onClick={() => navigate("/customer/home")}>
        <img src={logo} alt="GoCart" />
      </div>

      {/* Center Links */}
      <div className="customer-links">
        <NavLink
          to="/customer/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          HOME
        </NavLink>

        <NavLink
          to="/customer/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          PRODUCTS
        </NavLink>

        <NavLink
          to="/customer/promotion"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          PROMOTION
        </NavLink>

        {/* Search */}
        <div className="search-box">
          <Search size={18} color="#000" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="customer-right">
        <ShoppingCart
          size={24}
          color="#000"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/customer/cart")}
        />

        <div
          className="profile-btn"
          onClick={() => navigate("/customer/account")}
        >
          👤
        </div>
      </div>
    </nav>
  );
}

export default NavCustomer;
