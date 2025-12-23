import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b px-10 flex items-center">

      {/* LEFT: LOGO */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* CENTER: NAVIGATION */}
      <nav className="mx-auto flex gap-12">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-xs uppercase tracking-widest transition ${
              isActive
                ? "text-black font-semibold"
                : "text-gray-400 hover:text-black"
            }`
          }
        >
          Seller Management
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `text-xs uppercase tracking-widest transition ${
              isActive
                ? "text-black font-semibold"
                : "text-gray-400 hover:text-black"
            }`
          }
        >
          Customer Management
        </NavLink>

        <NavLink
          to="/ml-insights"
          className={({ isActive }) =>
            `text-xs uppercase tracking-widest transition ${
              isActive
                ? "text-black font-semibold"
                : "text-gray-400 hover:text-black"
            }`
          }
        >
          ML Insights
        </NavLink>
      </nav>

      {/* RIGHT: PROFILE */}
      <Link
        to="/profile"
        className="flex items-center gap-3 cursor-pointer"
      >
        <span className="text-sm text-gray-600">Techleng Tang</span>
        <img
          src="/adminpf.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </Link>
    </header>
  );
}
