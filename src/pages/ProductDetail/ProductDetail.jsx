import { useParams } from "react-router-dom";
import NavCustomer from "../../components/NavCustomer/NavCustomer.jsx";
import CategoryNav from "../../components/CategoryNav/CategoryNav.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { productsData } from "../../data/products.js"; // your products array
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) return <p style={{ textAlign: "center", marginTop: "150px" }}>Product not found</p>;

  return (
    <>
      <NavCustomer />
      <CategoryNav />

      <div className="product-detail-container">
        {/* Images */}
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          {product.thumbnails && (
            <div className="thumbnails">
              {product.thumbnails.map((thumb, idx) => (
                <img key={idx} src={thumb} alt={`Thumb ${idx}`} />
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="brand">{product.brand}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>

          <div className="purchase-section">
            <label>
              Quantity:
              <input type="number" min="1" defaultValue="1" />
            </label>
            <button onClick={() => alert("Added to cart!")}>Add to Cart</button>
          </div>

          <button className="buy-now-btn" onClick={() => alert("Redirect to checkout")}>
            Buy Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;
