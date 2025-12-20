import NavCustomer from "../../components/NavCustomer/NavCustomer";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import ProductList from "../../components/ProductList/ProductList";
import { productsByCategory } from "../../data/products";
import Footer from "../../components/Footer/Footer.jsx";
import "./Products.css";

function Products() {
  const categories = Object.keys(productsByCategory);

  return (
    <>
      <NavCustomer />

      {/* Wrap both navs in a container */}
      <div className="nav-wrapper">
        <CategoryNav categories={categories} />
      </div>
      <div className="container">
        {/* Product sections */}
        {categories.map((cat) => (
          <section
            id={cat.replace(/\s+/g, "-")}
            key={cat}
            className="category-section"
          >
            <h2>{cat}</h2>
            <ProductList products={productsByCategory[cat]} />
          </section>
        ))}
      </div>
      {/* Product sections */}
      {categories.map((cat) => (
        <section
          id={cat.replace(/\s+/g, "-")}
          key={cat}
          className="category-section"
        >
          <h2>{cat}</h2>
          <ProductList products={productsByCategory[cat]} />
        </section>
      ))}

      <Footer />
    </>
  );
}

export default Products;
