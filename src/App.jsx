import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import HomeCustomer from "./pages/HomeCustomer/HomeCustomer.jsx";
import Products from "./pages/Products/Products.jsx";
// import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homecustomer" element={<HomeCustomer />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
