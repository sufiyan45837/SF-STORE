import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingBag, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import my from "../component/my.png";
import th from "../component/th.png";
import user from "../component/user.png";
import sf from "../component/sf.png";


export default function Header({ darkMode, setDarkMode, cartItemCount, setShowMenu, showMenu }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef();

  // Toggle User Menu
  const handleUserClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  // Logout Function
  const handleLogout = () => {
    setShowUserMenu(false);
    navigate("/Signup");
  };

  

  return (
    <header className="flex flex-wrap items-center justify-between px-6 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl md:text-3xl font-bold">
          <img src={sf} alt="Logo" className="h-[50px]" />
        </h1>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block md:hidden text-2xl p-2"
        >
          {showMenu ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`md:flex gap-6 items-center flex-col md:flex-row w-full md:w-auto font-bold ${showMenu ? "flex" : "hidden"}`}>
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/Signup" className="nav-link">Signup</Link>
      </nav>

      {/* Search Bar */}
      <div className="relative w-full md:w-auto mt-4 md:mt-0">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-4 py-2 w-full md:w-72 border rounded-md shadow text-black focus:outline-none"
        />
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <img src={my} alt="User" className="w-10 h-10" />

        {/* Wishlist & Cart */}
        <div className="relative cursor-pointer" onClick={() => navigate("/Cart")}>
          <img src={th} alt="Cart" className="w-8 h-8" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
              {cartItemCount}
            </span>
          )}
        </div>

        {/* User Profile Dropdown Menu */}
        <div className="relative cursor-pointer">
          <img
            src={user}
            alt="User"
            className="w-8 h-8 cursor-pointer"
            onClick={handleUserClick}
            ref={userMenuRef}
          />

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-[225px] bg-black rounded-lg shadow-lg z-50 text-white">
              <ul className="py-2">
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => navigate("/ManageAccount")}
                >
                  <FaUser /> Manage My Account
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <FaShoppingBag /> My Orders
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <FaTimesCircle /> My Cancellations
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <FaStar /> My Reviews
                </li>
                <li
                  className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-700 cursor-pointer"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border text-sm md:text-base shadow md:ml-4 dark:text-white dark:border-gray-600"
      >
        {darkMode ? "☀️ " : "🌙 "}
      </button>
    </header>
  );
}
