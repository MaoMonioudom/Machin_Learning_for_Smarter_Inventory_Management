import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import Footer from "../../components/Footer/Footer";
import "./RegisterSeller.css";

function RegisterSeller() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    bankDetails: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Simple validation
    if (!form.storeName || !form.ownerName || !form.email || !form.phone || !form.address) {
      alert("Please fill in all required fields!");
      return;
    }

    // Save or submit form (example: localStorage)
    localStorage.setItem("sellerInfo", JSON.stringify(form));
    alert("Seller registration successful!");
    navigate("/login"); // redirect back to profile
  };

  return (
    <>
      <NavCustomer />

      <div className="register-seller-page">
        <h2>Register as Seller</h2>

        <div className="seller-form">
          <label>
            Store Name*
            <input
              type="text"
              name="storeName"
              value={form.storeName}
              onChange={handleChange}
              placeholder="Your Store Name"
            />
          </label>

          <label>
            Owner Name*
            <input
              type="text"
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </label>

          <label>
            Email*
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
          </label>

          <label>
            Phone Number*
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(000) 000-0000"
            />
          </label>

          <label>
            Address*
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Your address"
            />
          </label>

          <label>
            Bank Details
            <input
              type="text"
              name="bankDetails"
              value={form.bankDetails}
              onChange={handleChange}
              placeholder="Bank account info"
            />
          </label>

          <div className="form-buttons">
            <button onClick={() => navigate("/account")} className="back-btn">Back</button>
            <button onClick={handleSubmit} className="submit-btn">Register</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegisterSeller;
