import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Bell } from "lucide-react";
import "./SellerNav.css";
import Logo from "../../assets/images/logo.png";

const SellerNav = () => {
  const navigate = useNavigate();

  // Active link style
  const activeStyle = {
    fontWeight: "700", // bold
    color: "#000",     // optional: keep same color or change
  };

  return (
    <nav className="seller-nav">
      {/* Logo */}
      <div className="seller-logo">
        <img src={Logo} alt="GoCart" />
      </div>

      {/* Navigation Links */}
      <div className="seller-links">
        <NavLink
          to="/seller/dashboard"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          HOME
        </NavLink>

        <NavLink
          to="/seller/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          PRODUCTS
        </NavLink>

        <NavLink
          to="/seller/ml-prediction"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ML PREDICTIONS
        </NavLink>

        {/* Optional Search Icon */}
        <div className="search-box">
          <Search size={18} color="#000" />
        </div>
      </div>

      {/* Right Section */}
      <div className="seller-right">
        {/* Icons */}
        <div className="seller-icons">
          <NavLink to="/seller/inbox">
            <ShoppingCart size={24} color="#000" />
          </NavLink>
          <Bell size={24} color="#000" />
        </div>

        {/* User Info + Profile */}
        <div className="seller-user-profile">
          <div className="seller-user">
            <p className="user-name">User Merchant</p>
            <p className="user-role">Seller Account</p>
          </div>
          <div
            className="profile-btn"
            onClick={() => navigate("/seller/account")}
          >
            👤
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SellerNav;
