import { useNavigate, useLocation } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import ProductList from "../ProductList/ProductList.jsx";
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
  const filteredProducts = query 
    ? productsData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand?.toLowerCase().includes(query.toLowerCase())
      )
    : productsData;

  // 🧭 Add navigation behavior
  const productsWithNavigation = filteredProducts.map((product) => ({
    ...product,
    onClick: () => navigate(`/product/${product.id}`, { state: { product } }),
  }));

  return (
    <>
      {/* Customer navigation */}
      <NavCustomer />

      {/* Banner */}
      <div className="banner">
        <img src={bannerImage} alt="GoCart Banner" />
      </div>

      {/* Optional search results title */}
      {query && filteredProducts.length > 0 && (
        <div style={{ 
          padding: "1rem 2rem", 
          backgroundColor: "#f5f5f5",
          marginTop: "-1rem"
        }}>
          <h2>Search results for "{query}" ({filteredProducts.length} items)</h2>
        </div>
      )}

      {/* Product list */}
      <ProductList products={productsWithNavigation} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomeCustomer;