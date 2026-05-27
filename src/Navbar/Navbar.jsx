import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `relative cursor-pointer transition text-lg font-medium ${
      isActive(path)
        ? "text-white"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="font-bold text-xl tracking-wide">
            LIBRARY MANAGEMENT
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <button onClick={() => navigate("/")} className={linkClass("/")}>
            Home
            {isActive("/") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-full"></span>
            )}
          </button>

          <button onClick={() => navigate("/about")} className={linkClass("/about")}>
            About
            {isActive("/about") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-full"></span>
            )}
          </button>

          <button onClick={() => navigate("/dashboard")} className={linkClass("/dashboard")}>
            Dashboard
            {isActive("/dashboard") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-full"></span>
            )}
          </button>

          <button onClick={() => navigate("/books")} className={linkClass("/books")}>
            Books
            {isActive("/books") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-full"></span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 text-sm font-medium rounded-full bg-white text-blue-600 hover:bg-gray-100 transition text-center"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 text-sm font-medium rounded-full bg-white text-blue-600 hover:bg-gray-100 transition text-center"
          >
            Register
          </Link>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 transition">
            🔍
          </button>
        </div>
      </div>
    </nav>
  );
}
