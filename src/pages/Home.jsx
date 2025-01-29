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
import FillHeart from "../component/Fill Heart.png"; // Heart icon for wishlist functionality
import cat from "../component/cat.png"; // Heart icon for wishlist functionality
import ph from "../component/ph.png"; // Heart icon for wishlist functionality
import comp from "../component/comp.png"; // Heart icon for wishlist functionality
import camra from "../component/camra.png"; // Heart icon for wishlist functionality
import head from "../component/head.png"; // Heart icon for wishlist functionality
import smart from "../component/smart.png"; // Heart icon for wishlist functionality
import gaming from "../component/gaming.png"; // Heart icon for wishlist functionality
import watch from "../component/watch.png"; // Heart icon for wishlist functionality
import clock from "../component/clock.png"; // Heart icon for wishlist functionality
import o from "../component/o.webp"; // Heart icon for wishlist functionality
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const navigate = useNavigate();

  // Handle adding product to cart
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

  // Navigate to product details page
  const handleProductDetails = (id) => {
    navigate(`/details/${id}`); // Pass the product ID to the details page
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
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to local storage
  };

  const products = [
    { id: 1, image: controller, title: "HAVIT HV-G92 Gamepad", price: 1000, oldPrice: 2000 },
    { id: 2, image: keyboard, title: "Gaming Keyboard", price: 2000, oldPrice: 3500 },
    { id: 3, image: moniter, title: "HD Monitor", price: 50000, oldPrice: 60000 },
    { id: 4, image: cpu, title: "RGBA Light Desktop HD", price: 80000, oldPrice: 90000 },
    {
      id: 5, image: "https://www.pngall.com/wp-content/uploads/5/Gaming-Headset-PNG-HD-Image-1.png",
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
      {/* Frame and Category Navigation */}
      <div className="items-center">
        <img
          src={Frame}
          alt="Frame"
          className="sm:absolute top-[2%] lg:ml-44 left-1/2 transform -translate-x-1/2 h-auto sm: ml-[43%] md: ml-[45%] "
        />
        <div className="text-xl font-normal lg:ml-5 sm:pl-5 relative z-20">
          {["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"].map((category, index) => (
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
              <img src={Discount} alt="Discount" />
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="pt-7 w-[190px] h-[180px] mx-auto"
                />
                <img
                  src={FillEye}
                  alt="View Icon"
                  className="absolute top-2 right-2 w-8 h-8 cursor-pointer"
                  onClick={() => handleProductDetails(product.id)} // Navigate to details page
                />
                <img
                  src={wishlist.some(item => item.id === product.id) ? FillHeart : "https://img.icons8.com/ios/452/like.png"} // Toggle between filled and empty heart
                  alt="Wishlist Icon"
                  className="absolute top-2 left-2 w-8 h-8 cursor-pointer"
                  onClick={() => toggleWishlist(product)} // Add to wishlist
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

      {/* View all Products Button */}
      <div className="pt-20 flex justify-center">
        <button
          className="bg-red-500 w-[234px] h-[52px] text-white font-medium rounded border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all"
          type="button"
          onClick={() => navigate("/Porduct")} // Go to the main products page
        >
          View all products
        </button>
      </div>
      <div className="pt-28 ml-40 ">

        <img src={cat} />
        <div>
          <div className="flex flex-wrap gap-6 ml-20 w-full max-w-[1170px] h-auto">
            {/* Single Category Block */}
            {[
              { type: "Phones", image: ph },
              { type: "Computer", image: comp },
              { type: "Camera", image: camra },
              { type: "headphones", image: head },
              { type: "smart watch", image: smart },
              { type: "gaming", image: gaming },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center pt-5 mt-8 w-36 h-36 border-2 border-gray-300 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={item.image} alt={item.type} className="w-16 h-16" />
                <button type={item.type} className="mt-4 text-sm font-semibold text-gray-700">
                  {item.type}
                </button>
              </div>
            ))}
            <hr className="w-full mt-12 border-t-2 -right-1/3 border-gray-300" />

          </div>

        </div>
        <main className="px-6 py-8 mr-32 pt-14 w-[1170px] h-[518px]">
  <div className=" justify-between items-center mb-6">
    <div>
      <p className="text-red-500 font-medium text-sm">This Month</p>
      <h2 className="text-2xl font-bold">Best Selling Products</h2>
    </div>
    <button
      className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded hover:bg-red-600"
      onClick={() => navigate("/Porduct")} // Navigate to the main products page
    >
      View All
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Product 1 */}
    <div className="border rounded-lg p-4 shadow hover:shadow-lg h-96">
      <div className="w-full h-64 mb-4 relative">
        <img
          src={watch}
          alt="The North Coat"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-2 right-2 flex space-x-3">
          <img
            src="path/to/eye-icon.png" // Replace with the actual Eye Icon
            alt="View"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="path/to/heart-icon.png" // Replace with the actual Heart Icon
            alt="Add to Wishlist"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">Smart Watch T900 ultra</h3>
      <p className="text-red-500 text-sm font-bold">$260 <span className="line-through text-gray-400">$360</span></p>
      <h3 className="flex justify-center pt-3">
                  <img src={Fivestar} alt="Stars" />
                  <span className="text-green-500 font-semibold mr-2">in Stock</span>
                </h3>
                
      <img
        src="path/to/five-stars-image.png" // Replace with the actual five-star image
        alt="Rating"
        className="w-16 h-4 mt-2"
      />
      <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full mt-4 hover:bg-blue-600">
        Add to Cart
      </button>
    </div>

  
   
  </div>
</main>


      </div>


    </div>
  );
};

export default Home;
