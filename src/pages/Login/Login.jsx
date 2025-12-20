import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import google_icon from "../../assets/images/google-icon.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded accounts
  const customerAccount = { email: "customer@example.com", password: "cust123" };
  const sellerAccount = { email: "seller@example.com", password: "sell123" };
  const adminAccount = { email: "admin@example.com", password: "admin123" };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === customerAccount.email && password === customerAccount.password) {
      navigate("/homecustomer");
    } else if (email === sellerAccount.email && password === sellerAccount.password) {
      navigate("/seller/account");
    } else if (email === adminAccount.email && password === adminAccount.password) {
      navigate("/homeadmin");
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google OAuth integration will go here!");
    navigate("/homecustomer"); // demo
  };

  return (
    <>
      <Nav />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Login</h2>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">Login</button>

          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <img src={google_icon} alt="Google" style={{ width: '20px', height: '20px' }} />
            Continue with Google
          </button>

          <div className="auth-footer">
            Don't have an account? <a href="/register">Sign Up</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;