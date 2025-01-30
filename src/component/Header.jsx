import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import my from "../component/my.png";
import th from "../component/th.png";
import user from "../component/user.png";

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
    navigate("/Signup"); // Redirect to Signup page on logout
  };

  // Hide user menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10 shadow-lg">
      {/* Logo & Mobile Menu Toggle */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl md:text-3xl font-bold px-3">SF Store</h1>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block md:hidden text-xl px-4 py-2"
        >
          {showMenu ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`md:flex gap-4 md:gap-8 items-center flex-row mt-4 md:mt-0 ${showMenu ? "flex" : "hidden"}`}>
        <Link to="/Home" className="font-bold text-sm md:text-base hover:underline">Home</Link>
        <Link to="/about" className="font-bold text-sm md:text-base hover:underline">About</Link>
        <Link to="/contact" className="font-bold text-sm md:text-base hover:underline">Contact</Link>
        <Link to="/ManageAccount" className="font-bold text-sm md:text-base hover:underline">Manage Account</Link>
      </nav>

      {/* Search Bar */}
      <div className="relative flex items-center mt-4 md:mt-0">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-4 py-2 w-60 md:w-72 border rounded-md shadow text-black focus:outline-none"
        />
      </div>

      {/* Signup/Login Button */}
      <Link
        to="/Signup"
        className="font-bold text-sm md:text-base bg-slate-600 text-white hover:bg-white hover:text-slate-600 border border-solid border-slate-600 transition-all px-4 py-2 rounded"
      >
        SignUp/Login
      </Link>

      {/* Icons Section */}
      <div className="relative flex items-center gap-4 mt-4 md:mt-0">
        <img src={my} alt="User" className="w-10 h-10" />

        {/* Wishlist & Cart */}
        <div className="relative" onClick={() => navigate("/Whislist")}>
          <img
            src={th}
            alt="Cart"
            className="w-8 h-8 cursor-pointer"
          />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
              {cartItemCount}
            </span>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative">
          <img
            src={user}
            alt="User"
            className="w-8 h-8 cursor-pointer"
            onClick={handleUserClick}
            ref={userMenuRef}
          />

          {/* User Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-[225px] bg-green-400 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-red-800 cursor-pointer"
                  onClick={() => navigate("/ManageAccount")}
                >
                  Manage My Account
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-red-800 cursor-pointer">
                  My Orders
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-red-800 cursor-pointer">
                  My Reviews
                </li>
                <li
                  className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border text-sm md:text-base shadow md:ml-4"
      >
        {darkMode ? "☀️ " : "🌙 "}
      </button>
    </header>
  );
}
