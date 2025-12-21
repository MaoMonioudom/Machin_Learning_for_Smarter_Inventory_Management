import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { productsByCategory } from "../../data/products";
import productsData from "../../data/productsData";
import NavCustomer from "../../components/NavCustomer/NavCustomer";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer.jsx";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get product from navigation state if available (Home page click)
  let product = location.state?.product;

  // fallback: find product from productsData or productsByCategory
  if (!product) {
    product = productsData.find((p) => p.id.toString() === id);
  }
  if (!product) {
    const allCategoryProducts = Object.values(productsByCategory).flat();
    product = allCategoryProducts.find((p) => p.id.toString() === id);
  }
  if (!product) return <div>Product not found</div>;

  // Convert price to number
  const numericPrice = Number(product.price);

  // Compute final price (with discount if exists)
  const finalPrice = product.discount
    ? (numericPrice * (1 - product.discount / 100)).toFixed(2)
    : numericPrice.toFixed(2);

  // Add to cart function
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({
        ...product,
        price: Number(finalPrice), // use discounted price
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  // Recommended products (exclude current)
  const recommendedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="product-detail-page">
      <NavCustomer />

      <div className="back-btn-ctn">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>

      {/* ===== TOP PRODUCT BOX ===== */}
      <div className="product-box">
        {/* LEFT – IMAGES */}
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="thumbnail-row">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
        </div>

        {/* MIDDLE – INFO */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="rating">
            ★★★★★ <span>(100)</span>
          </div>

          <h4>Description</h4>
          <p>
            Experience the future of mobile technology with the latest innovation. Stunning visuals, smooth performance, and premium design.
          </p>

          <ul className="specs">
            <li><strong>Material:</strong> Aluminum</li>
            <li><strong>Brand:</strong> {product.brand}</li>
            <li><strong>Color:</strong> Purple</li>
          </ul>

          {/* ⚡ Display discounted price */}
          {product.discount ? (
            <div className="price">
              <span className="old-price">${numericPrice.toFixed(2)}</span>
              <span className="new-price">${finalPrice}</span>
            </div>
          ) : (
            <div className="price">${numericPrice.toFixed(2)}</div>
          )}
        </div>

        {/* RIGHT – CHECKOUT CARD */}
        <div className="checkout-card">
          <h4>Ad Card</h4>

          <div className="checkout-row">
            <span>Ad Status</span>
            <span>Checkout</span>
          </div>

          <div className="checkout-row">
            <span>Published In</span>
            <span>12 June 2025</span>
          </div>

          <div className="checkout-row">
            <span>Price</span>
            <span>${finalPrice}</span>
          </div>

          <div className="checkout-row">
            <span>Address</span>
            <span>Phnom Penh</span>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* ================= PRODUCT INFORMATION ================= */}
      <section className="detail-section">
        <h3>Product Information</h3>
        <div className="info-row">
          <span>Product Dimensions</span>
          <span>3.19 x 5.98 x 8.86 inches</span>
        </div>
        <div className="info-row">
          <span>Item Weight</span>
          <span>174 g</span>
        </div>
        <div className="info-row">
          <span>Release Date</span>
          <span>July 7, 2024</span>
        </div>
      </section>

      {/* ================= RECOMMENDATION ================= */}
      <section id="detail-section">
        <h3>Product Recommendation</h3>
        <div id="recommendation-scroll">
          <ProductList id="product-list" products={recommendedProducts} />
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="detail-section">
        <h3>Suggestion and Review</h3>
        <div className="review-card">
          <strong>Username 1</strong>
          <p>Very smooth and straightforward to use. Everything works as expected.</p>
        </div>
        <div className="review-card">
          <strong>Username 2</strong>
          <p>Beautiful design and great performance.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetail;
