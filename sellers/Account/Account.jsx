import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SellerNav from "../SellerNav/SellerNav";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Optional: clear any user session / token
    localStorage.removeItem("sellerToken"); // example, if you store auth token
    navigate("/login"); // redirect to Sign In page
  };

  return (
    <>
      <SellerNav />
      <div className="seller-account">
        <h1 className="page-title">My Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar"></div>
            <h2 className="seller-name">Seller</h2>
          </div>

          <div className="stats">
            <div className="stat-box">120 Products</div>
            <div className="stat-box">3800 Orders</div>
            <div className="stat-box">4.5 Rating</div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Store Name</label>
              <input type="text" placeholder="Your Store name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="seller@example.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="(000) 000-0000" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="Input your address" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Write something about your store"></textarea>
            </div>
            <div className="form-group">
              <label>Bank Details</label>
              <input type="text" placeholder="Bank details" />
            </div>
            <button className="save-btn">Save changes</button>

            {/* Logout Button */}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
