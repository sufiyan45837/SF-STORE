import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import my from "../component/my.png";
import th from "../component/th.png";
import user from "../component/user.png";

export default function Header({
  darkMode,
  setDarkMode,
  cartItemCount,
  setShowMenu,
  showMenu,
}) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef();

  // User Menu Toggle
  const handleUserClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  // Logout Logic
  const handleLogout = () => {
    setShowUserMenu(false);
    navigate("/Signup");
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

  const handleCartClick = () => {
    navigate("/Cart");
  };

 

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10 shadow-lg">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl md:text-3xl font-bold px-3">SF Store</h1>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block md:hidden text-xl px-4 py-2"
        >
          {showMenu ? "✖" : "☰"}
        </button>
      </div>

      <nav
        className={`md:flex gap-4 md:gap-8 items-center flex-row mt-4 md:mt-0 ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <Link to="/Home" className="font-bold text-sm md:text-base hover:underline">
          Home
        </Link>
        <Link
          to="/about"
          className="font-bold text-sm md:text-base hover:underline"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="font-bold text-sm md:text-base hover:underline"
        >
          Contact
        </Link>
        <Link
          to="/Whislist"
          className="font-bold text-sm md:text-base hover:underline"
        >
          Whislist
        </Link>
      </nav>

      <div className="relative flex items-center mt-4 md:mt-0 ">
        <input
          type="text"
          placeholder="What are you Looking..."
          className="px-4 py-2 w-60 md:w-72 border rounded-md shadow text-black focus:outline-none"
        />
      </div>
     
      <Link
        to="/Signup"
        className="font-bold text-sm md:text-base bg-slate-600 text-white hover:bg-white hover:text-slate-600 border border-solid border-slate-600 transition-all px-4 py-2 rounded"
      >
        SignUp/Login
      </Link>
      <div className="relative flex items-center gap-4 mt-4 md:mt-0">
        <img src={my} alt="User" className="w-10 h-10" />
        <div className="relative"  onClick={() => navigate("/Whislist")}>
          <img
            src={th}
            alt="Cart"
            className="w-8 h-8 cursor-pointer"
            onClick={handleCartClick}
          />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
              {cartItemCount}
            </span>
          )}
        </div>
        <div className="relative">
          <img
            src={user}
            alt="User"
            className="w-8 h-8 cursor-pointer"
            onClick={handleUserClick}
            ref={userMenuRef}
          />

          {showUserMenu && (
            <div
              className="absolute right-0 mt-2 w-[225px] bg-green-400 rounded-lg shadow-lg z-50"
              style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
            >
              <ul className="py-2">
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-red-800 cursor-pointer"
                  onClick={() => navigate("/Porduct")}
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
    
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border text-sm md:text-base shadow md:ml-4"
      >
        {darkMode ? "☀️ " : "🌙 "}
      </button>
    </header>
  );
}
