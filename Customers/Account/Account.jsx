import React from "react";
import { useNavigate } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import Footer from "../../components/Footer/Footer";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();

  // Example profile info
  const profile = {
    storeName: "Coconut",
    email: "seller@example.com",
    phone: "(000) 000-0000",
    address: "123 Main Street, Phnom Penh",
    description: "We sell the freshest coconuts in Cambodia.",
    bankDetails: "ACB Bank - 123456789",
    products: 120,
    orders: 3800,
    rating: 4.5,
  };

  const handleLogout = () => {
    localStorage.removeItem("sellerToken");
    navigate("/login");
  };

  return (
    <>
      <NavCustomer />

      <div className="seller-account">
        <h1 className="page-title">My Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar"></div>
            <h2 className="seller-name">{profile.storeName}</h2>
          </div>

          <div className="stats">
            <div className="stat-box">{profile.products} Products</div>
            <div className="stat-box">{profile.orders} Orders</div>
            <div className="stat-box">{profile.rating} Rating</div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Store Name</label>
              <p>{profile.storeName}</p>
            </div>

            <div className="form-group">
              <label>Email</label>
              <p>{profile.email}</p>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <p>{profile.phone}</p>
            </div>

            <div className="form-group">
              <label>Address</label>
              <p>{profile.address}</p>
            </div>

            <div className="form-group">
              <label>Description</label>
              <p>{profile.description}</p>
            </div>

            <div className="form-group">
              <label>Bank Details</label>
              <p>{profile.bankDetails}</p>
            </div>

            <div className="account-buttons">
              <button
                className="register-btn"
                onClick={() => navigate("/registerseller")}
              >
                Register as Seller
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
