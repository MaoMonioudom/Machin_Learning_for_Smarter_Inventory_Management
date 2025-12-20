import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate(); // Added useNavigate

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src={Logo} alt="GoCart Logo" className="nav-logo" />
      </div>

      <ul className="nav-menu">
        <li><Link to="/home">Home</Link></li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        {/* Make Login clickable */}
        <span 
          className="login" 
          onClick={() => navigate("/login")} 
          style={{ cursor: "pointer" }}
        >
          Login
        </span>

        {/* Make Get Started button clickable */}
        <button 
          className="nav-button" 
          onClick={() => navigate("/login")}
        >
          <span>Get Started</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
