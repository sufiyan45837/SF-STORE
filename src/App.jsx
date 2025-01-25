import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import my from "./component/my.png";
import th from "./component/th.png";
import user from "./component/user.png";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Porduct from "./pages/Porduct";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef();
  const [cartItems, setCartItems] = React.useState([]);
     
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleUserClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  const handleLogout = () => {
    setShowUserMenu(false);
    navigate("/Signup");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBackToHome = () => {
    navigate("/Home");
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <header className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-10 shadow-lg">
        {/* Logo & Menu Button */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-bold px-3">SF Store</h1>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="block md:hidden text-xl px-4 py-2"
          >
            {showMenu ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            showMenu ? "flex" : "hidden"
          } md:flex gap-4 md:gap-8 items-center flex-row mt-4 md:mt-0`}
        >
          <Link
            to="/Signup"
            className="font-bold text-sm md:text-base bg-slate-600 text-white hover:bg-white hover:text-slate-600 border border-solid border-slate-600 transition-all px-4 py-2 rounded"
          >
            SignUp/Login
          </Link>
          <Link
            to="/Home"
            className="font-bold text-sm md:text-base hover:underline"
          >
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
            to="/Checkout"
            className="font-bold text-sm md:text-base hover:underline"
          />
          <Link
            to="/Cart"
            className="font-bold text-sm md:text-base hover:underline"
          />
            <Link
            to="/Details"
            className="font-bold text-sm md:text-base hover:underline"
          >
           
          </Link>
          <Link
            to="/Porduct"
            className="font-bold text-sm md:text-base hover:underline"
          >
           
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-3 py-2 rounded-md border text-sm md:text-base shadow md:ml-4"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <div className="relative flex items-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="What are you Looking..."
            className="px-4 py-2 w-60 md:w-72 border rounded-md shadow text-black focus:outline-none"
          />
        </div>

        {/* User Profile Section */}
        <div className="relative flex items-center gap-4 mt-4 md:mt-0">
          <img src={my} alt="User" className="w-10 h-10" />
          <img src={th} alt="Thumbnail" className="w-8 h-8" />
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
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-red-800 cursor-pointer">
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
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Porduct" element={<Porduct />} />
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-9xl text-orange-900">
              404 Not Found <br />
              <h3 className="text-3xl text-black font-medium pt-8">
                Your visited page is not found. You may go to the home page.
                <br />
                <button
                  type="button"
                  className="bg-red-700 text-white px-4 py-2 rounded"
                  style={{ border: "3px solid black" }}
                  onClick={handleBackToHome}
                >
                  Back To Homepage
                </button>
              </h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
