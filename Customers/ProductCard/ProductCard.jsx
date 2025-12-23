import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, image, name, brand, price, discount }) {
  const navigate = useNavigate();

  // Ensure price is always a number
  const numPrice = Number(price);

  // Calculate final price if discount exists
  const finalPrice = discount
    ? (numPrice * (1 - discount / 100)).toFixed(2)
    : numPrice.toFixed(2);

  return (
    <div className="product-card" onClick={() => navigate(`/customer/product/${id}`)}>
      
      {/* IMAGE WRAPPER */}
      <div className="product-image-wrapper">
        {discount && <span className="discount-badge">-{discount}%</span>}
        <img src={image} alt={name} />
      </div>

      {/* PRODUCT INFO */}
      <h3>{name}</h3>
      <p>{brand}</p>

      {/* PRICE DISPLAY */}
      {discount ? (
        <p className="price">
          <span className="old-price">${numPrice.toFixed(2)}</span>
          <span className="new-price">${finalPrice}</span>
        </p>
      ) : (
        <p className="price">${numPrice.toFixed(2)}</p>
      )}
    </div>
  );
}

export default ProductCard;