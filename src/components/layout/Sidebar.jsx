import { NavLink } from "react-router-dom"
import Logo from "../Logo"


export default function Sidebar() {
  return (
    <aside className="w-64 bg-white min-h-screen border-r px-6 py-6">
      <div className="mb-8">
        <Logo />
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm font-medium ${
              isActive
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Seller Management
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm font-medium ${
              isActive
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Customer Management
        </NavLink>

        <NavLink
          to="/ml-insights"
          className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm font-medium ${
              isActive
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          ML Insights
        </NavLink>
      </nav>
    </aside>
  )
}
