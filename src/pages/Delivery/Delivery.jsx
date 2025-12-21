import { useNavigate } from "react-router-dom";
import NavCustomer from "../../components/NavCustomer/NavCustomer.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Delivery.css";
import { useState } from "react";

function Delivery() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProceed = () => {
    if (!form.firstName || !form.lastName || !form.phone || !form.city || !form.address) {
      alert("Please fill in all required fields!");
      return;
    }

    // Save delivery info under key "delivery"
    localStorage.setItem("delivery", JSON.stringify(form));
    navigate("/payment"); // go to payment page
  };

  return (
    <>
      <NavCustomer />

      <div className="delivery-page">
        <h2>Delivery Information</h2>

        <div className="delivery-form">
          <label>
            First Name*
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Last Name*
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number*
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            City / Province*
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Address*
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>

          <div className="delivery-buttons">
            <button type="button" onClick={() => navigate("/cart")}>Back</button>
            <button type="button" onClick={handleProceed}>Proceed to Payment</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Delivery;
