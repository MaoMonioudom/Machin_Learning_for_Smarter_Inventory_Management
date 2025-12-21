import { useLocation } from "react-router-dom";
import NavCustomer from "../../components/NavCustomer/NavCustomer";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import ProductList from "../../components/ProductList/ProductList";
import { productsByCategory } from "../../data/products";
import Footer from "../../components/Footer/Footer.jsx";
import "./Products.css";

function Products() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const categories = Object.keys(productsByCategory);

  return (
    <>
      <NavCustomer />

      {/* Category Navigation */}
      <div className="nav-wrapper">
        <CategoryNav categories={categories} />
      </div>

      <div className="container">
        {categories.map((cat) => {
          // 🔍 Filter products per category
          const filteredProducts = productsByCategory[cat].filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );

          // ❌ Hide category if no result
          if (filteredProducts.length === 0) return null;

          return (
            <section
              id={cat.replace(/\s+/g, "-")}
              key={cat}
              className="category-section"
            >
              <h2>{cat}</h2>
              <ProductList products={filteredProducts} />
            </section>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Products;
