import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';  
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";   
import Dashboard from "./sellers/Dashboard/Dashboard"; // <-- added
import Product from "./sellers/Product/Product";
import MLPrediction from "./sellers/ML Prediction/MLPrediction";
import Inbox from "./sellers/Inbox/Inbox";
import Account from "./sellers/Account/Account";

import HomeCustomer from "./customers/HomeCustomer/HomeCustomer"; // <-- added
import Products from "./customers/Products/Products";
import Promotion from "./customers/Promotion/Promotion";
import ProductDetail from "./customers/ProductDetail/ProductDetail";
import Cart from "./customers/Cart/Cart";
import RegisterSeller from "./customers/RegisterSeller/RegisterSeller";
import CAccount from "./customers/Account/Account";
import Delivery from "./customers/Delivery/Delivery";
import Payment from "./customers/Payment/Payment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller/dashboard" element={<Dashboard />} /> {/* new */}
        <Route path="/seller/account" element={<Account />} />
        <Route path="/seller/products" element={<Product />} />
        <Route path="/seller/ml-prediction" element={<MLPrediction />} />
        <Route path="/seller/inbox" element={<Inbox />} />

        <Route path="/homecustomer" element={<HomeCustomer />} />
        <Route path="/products" element={<Products />} />   
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/product/:id" element={    <ProductDetail />} />
        <Route path="/cart" element={<Cart />} />   
        <Route path="/registerseller" element={<RegisterSeller />} />
        <Route path="/account" element={<CAccount />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
