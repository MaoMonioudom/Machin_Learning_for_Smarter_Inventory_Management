import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import "./ProfilePage.css"; // We'll add CSS like SellerNav
import LogoImg from "../assets/images/logo.png";


export default function ProfilePage() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    name: "Techleng Tang",
    email: "techleng@gocart.com",
    role: "Admin",
    avatar: "/adminpf.png", // Put this in public folder
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) navigate("/login");
    else setAdmin(user);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const activeStyle = {
    fontWeight: "700",
    color: "#000",
  };

  return (
    <>
      {/* HEADER LIKE SELLER NAV */}
      <nav className="seller-nav">
        {/* LEFT: Logo */}
         <div className="seller-logo">
          <img src={LogoImg} alt="GoCart" />
        </div>

        {/* CENTER: NAV LINKS */}
        <div className="seller-links">
          <NavLink
            to="/admin/sellers"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SELLERS
          </NavLink>
          <NavLink
            to="/admin/customers"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CUSTOMERS
          </NavLink>
          <NavLink
            to="/admin/ml-insights"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ML INSIGHTS
          </NavLink>
        </div>

        {/* RIGHT: PROFILE */}
        <div className="seller-right">
          <Bell size={24} />
          <div
            className="seller-user-profile"
            onClick={() => navigate("/admin/profile")}
          >
            <div className="seller-user">
              <p className="user-name">{admin.name}</p>
              <p className="user-role">{admin.role}</p>
            </div>
            <img
              src={admin.avatar}
              alt="Admin"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </nav>

      {/* PROFILE PAGE CONTENT */}
      <div className="admin-account">
        <h1 className="page-title">My Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <img src={admin.avatar} alt="Admin" className="avatar" />
            <h2 className="admin-name">{admin.name}</h2>
          </div>

          <div className="stats">
            <div className="stat-box">11,040 Customers</div>
            <div className="stat-box">474 Sellers</div>
            <div className="stat-box">392 Active</div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Admin Name</label>
              <input type="text" value={admin.name} readOnly />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={admin.email} readOnly />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input type="text" value={admin.role} readOnly />
            </div>
            <div className="form-group">
              <label>System Notes</label>
              <textarea placeholder="Admin internal notes"></textarea>
            </div>
            <button className="save-btn">Save changes</button>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
