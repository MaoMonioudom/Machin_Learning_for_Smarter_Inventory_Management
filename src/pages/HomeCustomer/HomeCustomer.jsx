import { useNavigate, useLocation } from "react-router-dom";
import NavCustomer from "../../components/NavCustomer/NavCustomer.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./HomeCustomer.css";
import bannerImage from "../../assets/images/HomeCustomerBanner.png";
import productsData from "../../data/productsData.js";

function HomeCustomer() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔍 Read search query from URL
  const query = new URLSearchParams(location.search).get("q") || "";

  // 🔍 Filter products based on search
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  // 🧭 Add navigation behavior (same as before)
  const productsWithNavigation = filteredProducts.map((product) => ({
    ...product,
    onClick: () =>
      navigate(`/product/${product.id}`, { state: { product } }),
  }));

  return (
    <>
      {/* Customer navigation */}
      <NavCustomer />

      {/* Banner (keep exactly the same) */}
      <div className="banner">
        <img src={bannerImage} alt="GoCart Banner" />
      </div>

      {/* Optional title (safe to remove if you want) */}
      {/* {query && (
        <h2 style={{ padding: "1rem 2rem" }}>
          Search results for “{query}”
        </h2>
      )} */}

      {/* Product list (same layout as before) */}
      <ProductList products={productsWithNavigation} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomeCustomer;
