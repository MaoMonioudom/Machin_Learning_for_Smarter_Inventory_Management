import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, name, brand, price }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${id}`); // dynamic route for each product
  };

  return (
    <div className="product-card" onClick={goToDetail}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{brand}</p>
      <p className="price">${parseFloat(price).toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
