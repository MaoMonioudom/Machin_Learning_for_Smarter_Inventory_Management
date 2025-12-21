import { useNavigate } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import Footer from "../../components/Footer/Footer.jsx";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const delivery = JSON.parse(localStorage.getItem("delivery")) || {};

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleConfirmPayment = () => {
    alert("Payment successful!");
    localStorage.removeItem("cart");
    localStorage.removeItem("delivery");
    navigate("/homecustomer");
  };

  return (
    <div className="payment-page">
      <NavCustomer />

      {/* Content wrapper with max-width */}
      <div className="payment-content">
        <h2>Payment Page</h2>

        <section className="payment-section">
          <h3>Delivery Information</h3>
          <p><strong>Name:</strong> {delivery.firstName || "N/A"} {delivery.lastName || ""}</p>
          <p><strong>Phone:</strong> {delivery.phone || "N/A"}</p>
          <p><strong>City / Province:</strong> {delivery.city || "N/A"}</p>
          <p><strong>Address:</strong> {delivery.address || "N/A"}</p>
        </section>

        <section className="payment-section">
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} x {item.qty}</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
        </section>

        <div className="payment-buttons">
          <button onClick={() => navigate("/delivery")}>Back</button>
          <button onClick={handleConfirmPayment}>Confirm Payment</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Payment;
