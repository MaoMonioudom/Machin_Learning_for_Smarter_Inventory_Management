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

  // Hardcoded accounts with roles
  const accounts = [
    { 
      email: "customer@example.com", 
      password: "cust123", 
      role: "customer", 
      name: "John Customer",
      redirect: "/customer/account" 
    },
    { 
      email: "seller@example.com", 
      password: "sell123", 
      role: "seller", 
      name: "Jane Seller",
      redirect: "/seller/account" 
    },
    { 
      email: "admin@example.com", 
      password: "admin123", 
      role: "admin", 
      name: "Techleng Tang",
      redirect: "/admin/profile" 
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Find matching account
    const matchedAccount = accounts.find(
      account => account.email === email && account.password === password
    );

    if (matchedAccount) {
      // Store user data in localStorage
      const userData = {
        email: matchedAccount.email,
        role: matchedAccount.role,
        name: matchedAccount.name,
        isAuthenticated: true,
        loginTime: new Date().toISOString()
      };
      
      localStorage.setItem("user", JSON.stringify(userData));
      
      // Navigate to appropriate page
      navigate(matchedAccount.redirect);
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleGoogleLogin = () => {
    // For demo purposes, create a customer account with Google
    const googleUser = {
      email: "googleuser@example.com",
      role: "customer",
      name: "Google User",
      isAuthenticated: true,
      loginTime: new Date().toISOString()
    };
    
    localStorage.setItem("user", JSON.stringify(googleUser));
    alert("Google login successful!");
    navigate("/seller/account");
    navigate("/customer/account");
    navigate("/admin/profile");
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
          
          {/* Demo credentials note */}
          <div className="demo-credentials" style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
            <p><strong>Demo Credentials:</strong></p>
            <p>Admin: admin@example.com / admin123</p>
            <p>Seller: seller@example.com / sell123</p>
            <p>Customer: customer@example.com / cust123</p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;