import { Routes, Route } from "react-router-dom"
import SellerManagement from "../pages/SellerManagement"
import CustomerManagement from "../pages/CustomerManagement"
import MLInsights from "../pages/MLInsights"
import ProfilePage from "../pages/ProfilePage" // Import the ProfilePage component

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SellerManagement />} />
      <Route path="/customers" element={<CustomerManagement />} />
      <Route path="/ml-insights" element={<MLInsights />} />
      <Route path="/profile" element={<ProfilePage />} /> 
    </Routes>
  )
}
