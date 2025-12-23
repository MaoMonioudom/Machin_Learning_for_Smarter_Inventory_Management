import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Nav />

      {/* Banner */}
      <section className="home-banner">
        <h1>Welcome to Gocart</h1>
        <p>
          Your intelligent e-commerce platform for smarter inventory management
          and personalized shopping experiences.
        </p>
        <button className="home-button" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="home-features">
        <div className="feature-card">
          <h3>Smart Inventory</h3>
          <p>Predict and optimize stock effortlessly to stay ahead of demand.</p>
        </div>
        <div className="feature-card">
          <h3>Personalized Shopping</h3>
          <p>Tailored recommendations for each user for a fun shopping experience.</p>
        </div>
        <div className="feature-card">
          <h3>Seamless Experience</h3>
          <p>Enjoy a vibrant and playful UI designed for modern users.</p>
        </div>
        <div className="feature-card">
          <h3>Analytics Dashboard</h3>
          <p>Track performance and sales trends in real-time with detailed charts.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        <div className="stat-card">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Active Sellers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50,000+</div>
          <div className="stat-label">Products Managed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Stock Accuracy</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Gocart helped me avoid stockouts and keep my inventory optimized
            effortlessly!”
          </p>
          <div className="testimonial-user">User 1</div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “I love the personalized recommendations – it made shopping fast and fun.”
          </p>
          <div className="testimonial-user">User 2</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="home-pricing">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>Essential features for new sellers.</p>
          <button>Start Free</button>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>Advanced analytics and recommendations.</p>
          <button>Get Pro</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>Full platform access for large operations.</p>
          <button>Contact Us</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
