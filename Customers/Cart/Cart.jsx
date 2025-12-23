import { useNavigate } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import Footer from "../../components/Footer/Footer.jsx";
import { useState, useEffect } from "react";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const normalizedCart = storedCart.map((item) => ({
      ...item,
      qty: item.qty ?? 1,
      price: Number(item.price),
    }));
    setCartItems(normalizedCart);
    localStorage.setItem("cart", JSON.stringify(normalizedCart));
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemove = (id) => updateCart(cartItems.filter((item) => item.id !== id));
  const increaseQty = (id) =>
    updateCart(cartItems.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  const decreaseQty = (id) =>
    updateCart(cartItems.map((item) => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart-page">
      <NavCustomer />

      {/* Content wrapper with max-width */}
      <div className="cart-content-wrapper">
        <h2>My Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-content">
            <div className="cart-products">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>{item.brand}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="qty-control">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>
                  <div className="item-total">${(item.price * item.qty).toFixed(2)}</div>
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Invoice</h3>
              <div className="summary-row">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={() => navigate("/customer/delivery")}>Checkout</button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
