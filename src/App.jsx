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
      </Routes>
    </Router>
  );
};

export default App;
