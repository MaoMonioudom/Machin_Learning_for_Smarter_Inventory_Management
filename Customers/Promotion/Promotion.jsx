import { useLocation } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import Footer from "../../components/Footer/Footer";
import ProductList from "../ProductList/ProductList";
import productsData from "../../data/productsData";
import promoBanner from "../../assets/images/HomeCustomerBanner.png";
import "./Promotion.css";

function Promotion() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  // Add discount info only for promotion page
  const promoProducts = productsData
    .map((p) => ({
      ...p,
      discount: 20, // 20% OFF
    }))
    // 🔍 filter by search query
    .filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className="promotion-page">
      <NavCustomer />

      <div className="promo-banner">
        <img src={promoBanner} alt="Promotion Banner" />
      </div>

      <h2 className="promo-title">🔥 Special Promotions</h2>

      {/* Show products normally (same UI as before) */}
      <ProductList products={promoProducts} isPromotion />

      <Footer />
    </div>
  );
}

export default Promotion;
