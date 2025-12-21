import { useLocation } from "react-router-dom";
import NavCustomer from "../NavCustomer/NavCustomer";
import CategoryNav from "../CategoryNav/CategoryNav";
import ProductList from "../ProductList/ProductList";
import { productsByCategory } from "../../data/products";
import Footer from "../../components/Footer/Footer.jsx";
import "./Products.css";

function Products() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const categories = Object.keys(productsByCategory);

  return (
    <>
      {/* Fixed Navbar */}
      <NavCustomer />

      {/* Scrollable Category Nav */}
      <div className="nav-wrapper">
        <CategoryNav categories={categories} />
      </div>

      {/* Page Content */}
      <div className="container">
        {categories.map((cat) => {
          const filteredProducts = productsByCategory[cat].filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );

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
