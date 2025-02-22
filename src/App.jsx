import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // import useNavigate
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Porduct from "./pages/Porduct";
import ManageAccount from "./pages/ManageAccount";
import Wishlist from "./pages/Wishlist";
import Footer from "./component/Footer";

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
  
  const goToHome = () => {
    navigate("/Home"); 
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
        <Route path="/" element={<Home />} />
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
        
      </Routes>
      <Footer />
    </div>
  );
}
