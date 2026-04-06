import React, { useContext } from "react";
import { Search, Moon, Sun, User } from "lucide-react";
import { AppContext } from "../context/AppContext";
import logo from "../assets/logo.avif";

const Navbar = () => {
  const { role, setRole, darkMode, setDarkMode } = useContext(AppContext);

  return (
    <nav
      className={`w-full px-6 py-3 flex items-center justify-between shadow-md 
      ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <img src={logo} alt="MyLogo" className="h-10 w-auto" />

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-blue-500 transition">
            Dashboard
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition">
            Transactions
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition">
            Insights
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden sm:flex items-center border rounded-lg px-3 py-1">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 bg-transparent"
          />
        </div>

        {/* Role Dropdown */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-lg px-2 py-1 bg-transparent cursor-pointer"
        >
          <option value="Admin">Admin</option>
          <option value="Viewer">Viewer</option>
        </select>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Profile */}
        <div className="p-2 rounded-full bg-gray-300 cursor-pointer">
          <User size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;