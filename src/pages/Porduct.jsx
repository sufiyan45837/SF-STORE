import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import controller from "../component/controller.png";
import keyboard from "../component/keyboard.png";
import moniter from "../component/moniter.png";
import cpu from "../component/cpu.png";
import FillEye from "../component/Fill Eye.png";
import FillHeart from "../component/Fill Heart.png";
import Discount from "../component/Discount.png";
import watch from "../component/watch.png"; // Heart icon for wishlist functionality

const Product = () => {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.title === product.title);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    setShowCart(true);  // Show cart added notification
    setTimeout(() => setShowCart(false), 2000);  // Hide it after 2 seconds

    navigate("/cart");  // Navigate to cart page
  };


  const handleProductDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const toggleWishlist = (product) => {
    const isAlreadyWishlisted = wishlist.some((item) => item.id === product.id);
    let updatedWishlist;
    if (isAlreadyWishlisted) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    image: [controller, keyboard, moniter, cpu][index % 4],
    title: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 5000) + 1000,
    oldPrice: Math.floor(Math.random() * 5000) + 5000,
  }));

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded relative">
            <img src={Discount} alt="Discount" className="" />
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <img
                src={FillEye}
                alt="View Icon"
                className="absolute top-2 right-2 w-8 h-8 cursor-pointer"
                onClick={() => handleProductDetails(product.id)}
              />
              <img
                src={wishlist.some((item) => item.id === product.id) ? FillHeart : "https://img.icons8.com/ios/452/like.png"}
                alt="Wishlist Icon"
                className="absolute bottom-2 right-2 w-8 h-8 cursor-pointer"
                onClick={() => toggleWishlist(product)}
              />
            </div>
            <h2 className="text-lg font-medium mb-2">{product.title}</h2>
            <p className="text-red-500">
              Rs: {product.price}
              <span className="ml-2 text-gray-400 line-through">Rs: {product.oldPrice}</span>
            </p>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
