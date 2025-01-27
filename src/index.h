import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aro from "../component/aro.png";
import Frame from "../component/Frame.png";
import For from "../component/For.png";
import group from "../component/group.png";
import controller from "../component/controller.png";
import Discount from "../component/Discount.png";
import Fivestar from "../component/Five star.png";
import keyboard from "../component/keyboard.png";
import moniter from "../component/moniter.png";
import cpu from "../component/cpu.png";
import FillEye from "../component/Fill Eye.png";
import FillHeart from "../component/Fill Heart.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Get the cart from localStorage (or an empty array if it doesn't exist)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.title === product.title);
    if (existingProduct) {
      // If product is already in cart, increment quantity
      existingProduct.quantity += 1;
    } else {
      // Otherwise, add the product to the cart
      cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    setShowCart(true);
    setTimeout(() => setShowCart(false), 2000);
    
    // Redirect to the cart page
    navigate("/cart");
  };

  const products = [
    { image: controller, title: "HAVIT HV-G92 Gamepad", price: 1000, oldPrice: 2000 },
    { image: keyboard, title: "Gaming Keyboard", price: 2000, oldPrice: 3500 },
    { image: moniter, title: "HD Monitor", price: 50000, oldPrice: 60000 },
    { image: cpu, title: "RGBA Light Desktop HD", price: 80000, oldPrice: 90000 },
    {
      image: "https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png",
      title: "Gaming Headset",
      price: 4000,
      oldPrice: 4500,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="pt-8 ml-8 relative">
      {/* Frame and Navigation */}
      <div className="items-center">
        <img
          src={Frame}
          alt="Frame"
          className="sm:absolute top-[4%]  lg:ml-56  left-1/2  transform -translate-x-1/2  h-auto  sm: ml-[43%] md: ml-[45%]"
        />
        <div className="text-xl font-normal lg:ml-5 sm:pl-5 relative z-20">
          {[ "Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty" ].map((category, index) => (
            <h1 className="flex items-center pt-3" key={index}>
              {category}
              <img src={aro} alt="" className="w-6 h-6 bg-white" />
            </h1>
          ))}
        </div>
        <div className="pt-40 flex flex-wrap justify-center gap-8 lg:transform -translate-x-1/3">
          <img src={For} alt="For Image" className="w-32 h-auto bg-white" />
          <img src={group} alt="Group" className="h-14 w-auto bg-white" />
        </div>
      </div>

      {/* Products Slider */}
      <Slider {...sliderSettings} className="pt-12 lg:max-w-screen-lg lg:ml-64">
        {products.map((product, index) => (
          <div key={index} className="px-4 relative">
            <div className="bg-slate-100 shadow-lg p-4 relative">
              <img src={Discount} alt="percent" />
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="pt-7 w-[190px] h-[180px] mx-auto"
                />
              </div>
              <div className="text-center">
                <h2 className="font-medium">{product.title}</h2>
                <p className="text-red-500 font-sans text-md pt-6">
                  Rs: {product.price}
                  <span className="ml-4 text-gray-400 line-through">Rs: {product.oldPrice}</span>
                </p>
                <h3 className="flex justify-center pt-3">
                  <img src={Fivestar} alt="Stars" />
                  <span className="ml-2">(88)</span>
                </h3>
                <button
                  className="font-normal w-[210px] text-xl py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
                  type="button"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {showCart && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Product added to cart!
        </div>
      )}
        <div className="pt-20 flex justify-center">
        <button
          className="bg-red-500 w-[234px] h-[52px] text-white font-medium rounded border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all"
          type="button"
          onClick={() => navigate("/all-products")}
        >
          View all products
        </button>
      </div>
    </div>
  );
};

export default Home;
