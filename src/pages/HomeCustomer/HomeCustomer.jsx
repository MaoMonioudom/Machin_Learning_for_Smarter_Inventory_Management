import NavCustomer from "../../components/NavCustomer/NavCustomer.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx";
import "./HomeCustomer.css";
import bannerImage from "../../assets/images/HomeCustomerBanner.png";
import productsData from "../../data/productsData.js";
import Footer from "../../components/Footer/Footer.jsx";
function HomeCustomer() {
  return (
    <>
      {/* Customer navigation */}
      <NavCustomer />

      {/* Banner */}
      <div className="banner">
        <img src={bannerImage} alt="GoCart Banner" />
      </div>

      {/* Product list */}
      <ProductList products={productsData} />

        {/* Footer */}
        <Footer />
    </>
  );
}

export default HomeCustomer;
