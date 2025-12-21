import { Link } from "react-router-dom"; // Import Link for navigation

export default function Header() {
  return (
    <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
      <h2 className="text-sm font-medium text-gray-700">Admin Dashboard</h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Techleng Tang</span>

        {/* Profile Icon - Wrap it with Link for navigation */}
        <Link to="/profile">
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
            <img
              src="/adminpf.png" // You can replace this with a dynamic avatar if needed
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
