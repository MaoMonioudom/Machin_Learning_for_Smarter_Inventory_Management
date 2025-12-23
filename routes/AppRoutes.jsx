import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

/* =======================
   Public Pages
======================= */
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

/* =======================
   Seller Pages
======================= */
import Dashboard from "../sellers/Dashboard/Dashboard";
import Product from "../sellers/Product/Product";
import MLPrediction from "../sellers/MLPrediction/MLPrediction";
import Inbox from "../sellers/Inbox/Inbox";
import Account from "../sellers/Account/Account";

/* =======================
   Customer Pages
======================= */
import HomeCustomer from "../Customers/HomeCustomer/HomeCustomer";
import Products from "../Customers/Products/Products";
import Promotion from "../Customers/Promotion/Promotion";
import ProductDetail from "../Customers/ProductDetail/ProductDetail";
import Cart from "../Customers/Cart/Cart";
import RegisterSeller from "../Customers/RegisterSeller/RegisterSeller";
import CAccount from "../Customers/Account/Account";
import Delivery from "../Customers/Delivery/Delivery";
import Payment from "../Customers/Payment/Payment";

/* =======================
   Admin Pages (RENAMED)
======================= */
import AdminCustomerManagement from "../pages/CustomerManagement";
import AdminSellerManagement from "../pages/SellerManagement";
import AdminMLInsights from "../pages/MLInsights";
import AdminProfilePage from "../pages/ProfilePage";

/* =======================
   App Routes
======================= */
export default function AppRoutes() {
  return (
    <Routes>
      {/* ===== Public Routes ===== */}
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ===== Admin Routes ===== */}
      <Route
        path="/admin/sellers"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminSellerManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/customers"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminCustomerManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/ml-insights"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminMLInsights />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminProfilePage />
          </ProtectedRoute>
        }
      />

      {/* ===== Seller Routes ===== */}
      <Route
        path="/seller/dashboard"
        element={
          <ProtectedRoute allowedRoles={["seller"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/products"
        element={
          <ProtectedRoute allowedRoles={["seller"]}>
            <Product />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/ml-prediction"
        element={
          <ProtectedRoute allowedRoles={["seller"]}>
            <MLPrediction />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/inbox"
        element={
          <ProtectedRoute allowedRoles={["seller"]}>
            <Inbox />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/account"
        element={
          <ProtectedRoute allowedRoles={["seller"]}>
            <Account />
          </ProtectedRoute>
        }
      />

      {/* ===== Customer Routes ===== */}
      <Route
        path="/customer"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <HomeCustomer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/home"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <HomeCustomer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/products"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/promotion"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Promotion />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/product/:id"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <ProductDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/cart"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/register-seller"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <RegisterSeller />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/account"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <CAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/delivery"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Delivery />
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer/payment"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Payment />
          </ProtectedRoute>
        }
      />

      {/* ===== 404 ===== */}
      <Route path="*" element={<div className="p-6">404 - Page Not Found</div>} />
    </Routes>
  );
}
