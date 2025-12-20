import { useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/images/logo.png"; // <-- import the image

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      {/* Logo on the left */}
      <img
        src={logo}             // <-- use imported logo
        alt="Gocart Logo"
        className="logo-img"
        onClick={() => navigate("/")}
      />

      {/* Invisible nav buttons in the center */}
      <div className="center-buttons">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/products")}>Products</button>
        <button onClick={() => navigate("/about")}>About Us</button>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </div>

      {/* Login and Sign Up buttons on the right */}
      {/* Right side buttons */}
        <div className="right-buttons">
            <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="signup-btn" onClick={() => navigate("/register")}>Sign Up</button>
        </div>

    </nav>
  );
}

export default Nav;
