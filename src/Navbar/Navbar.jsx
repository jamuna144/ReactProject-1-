import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">


        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-15 h-15 rounded-full object-cover"
          />
          <h1 className="font-bold text-xl tracking-wide">
            LIBRARY MANAGEMENT
          </h1>
        </div>


        <ul className="hidden md:flex gap-7 font-medium ml-16">
          <li className="hover:text-gray-200 transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-200 transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-gray-200 transition">
            <a href="/books">Books</a>
          </li>
          <li className="hover:text-gray-200 transition">
            <a href="/books">Dashboard</a>
          </li>
          <li className="hover:text-gray-200 transition">
            <a href="/books">Admin Panel</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">


          <button className="px-5 py-2 text-sm font-medium rounded-full bg-white text-blue-600 hover:bg-gray-100 transition">
            Sign In
          </button>

          <button className="px-5 py-2 text-sm font-medium rounded-full bg-white text-blue-600 hover:bg-gray-100 transition">
            Register
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 transition">
            🔍
          </button>

        </div>

      </div>
    </nav>
  );
}