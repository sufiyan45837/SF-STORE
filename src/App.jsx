import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // import useNavigate
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Porduct from "./pages/Porduct";
import ManageAccount from "./pages/ManageAccount";
import Wishlist from "./pages/Wishlist";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showMenu, setShowMenu] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); 

  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  
  // Define the function for navigating back to home
  const goToHome = () => {
    navigate("/Home");  // This will navigate to the Home page
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartItemCount={cartItemCount}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Porduct" element={<Porduct />} />
        <Route path="/ManageAccount" element={<ManageAccount />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="*"
          element={
            <div className="text-9xl ml-[22%] pt-52 font-bold">
              404 Not Found
              <h2 className="text-3xl ml-20 pt-10 text-amber-900">
                Your visited page not found. You may go home page.
              </h2>
              <button
                type="button"
                className="text-2xl bg-orange-900 ml-60"
                style={{ border: "3px solid black" }}
                onClick={goToHome}  // Call the goToHome function
              >
                Back To Homepage
              </button>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
