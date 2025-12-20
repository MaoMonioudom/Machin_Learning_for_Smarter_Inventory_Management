import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />

      {/* Banner */}
      <section className="home-banner">
        <h1>Welcome to Gocart</h1>
        <p>Smarter shopping, smarter selling. Explore products and manage your store easily.</p>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-box">
          <h3>Easy Shopping</h3>
          <p>Browse and buy products quickly with our simple interface.</p>
        </div>
        <div className="about-box">
          <h3>Sell Your Products</h3>
          <p>Manage your store and reach more customers efficiently.</p>
        </div>
        <div className="about-box">
          <h3>Secure Payments</h3>
          <p>Safe and fast payment options for a hassle-free experience.</p>
        </div>
      </section>

      {/* Activity Section */}
      <section className="activity-section">
        <div className="activity-box">
          <h3>New Arrivals</h3>
          <p>Check out the latest products added by sellers.</p>
        </div>
        <div className="activity-box">
          <h3>Top Sellers</h3>
          <p>Explore popular products trending on Gocart.</p>
        </div>
        <div className="activity-box">
          <h3>Exclusive Offers</h3>
          <p>Get discounts and promotions on selected items.</p>
        </div>
      </section>

      {/* Survey Section */}
      {/* Survey / Feedback Section */}
        <section className="survey-section">
        <h2>What Our Customers Say</h2>
        <div className="feedback-container">
            <div className="feedback-card">
            <p>"Gocart makes shopping so easy! I found everything I needed in minutes."</p>
            <h4>- Sarah K.</h4>
            </div>
            <div className="feedback-card">
            <p>"Selling on Gocart increased my sales significantly. Highly recommend it!"</p>
            <h4>- Mark L.</h4>
            </div>
            <div className="feedback-card">
            <p>"The website is clean and easy to navigate. Love the black-and-white theme."</p>
            <h4>- Jenny P.</h4>
            </div>
        </div>
        </section>


      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
