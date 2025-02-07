import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Slider from "react-slick"; // Slider component
import "slick-carousel/slick/slick.css"; // Slider CSS
import "slick-carousel/slick/slick-theme.css"; // Slider theme
import Discount from "../component/Discount.png";  
import FillEye from "../component/Fill Eye.png";    
import Fivestar from "../component/Five star.png";  
import { ShoppingCartIcon } from "lucide-react";

const ProductSection = () => {
  const navigate = useNavigate();

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Function to add a product to the cart and navigate to the Cart page
  const handleAddToCart = (product) => {
    // Retrieve existing cart from localStorage or initialize a new one
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Check if the product is already in the cart
    const existingItem = cart.find((item) => item.title === product.title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    // Navigate to the Cart page
    navigate("/cart");
  };

  // Array of sample products
  const products = [
    {
      title: "Smart Watch T900 Ultra",
      price: 1800,
      originalPrice: 2500,
      image: "https://fshop.oss-accelerate.aliyuncs.com/20230308110829663598981.png",
    },
    {
      title: "Brown Leather Skeleton For men",
      price: 850,
      originalPrice: 1700,
      image: "https://img.drz.lazcdn.com/static/pk/p/207a0caf5135651225ec0825a8c1cffc.jpg_200x200q80.jpg_.webp",
    },
    {
      title: "Attar Pack of 3 set",
      price: 700,
      originalPrice: 1000,
      image: "https://img.drz.lazcdn.com/static/pk/p/a16dd60068c7e9cbb182a1a7364abf5f.jpg_200x200q80.jpg_.webp",
    },
    {
      title: "Udy Perfume For Men 100-ml",
      price: 700,
      originalPrice: 1100,
      image: "https://img.drz.lazcdn.com/static/pk/p/f03dcfafac4d48bf6002800be555a026.png_200x200q80.png_.webp",
    },
    {
      title: "Track Suit for men",
      price: 2000,
      originalPrice: 2500,
      image: "https://tse2.mm.bing.net/th?id=OIP.GgYwyHx9GjLHfvwTvq4xWwHaHa&pid=Api&P=0&h=220",
    },
  ];

  return (
    <section className="my-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="text-xl text-gray-600">Explore Our Products</p>
      </div>

      {/* Product Slider */}
      <div className="container mx-auto">
        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div
              key={index}
              className="w-[270px] h-[300px] relative p-4 bg-white rounded shadow m-auto"
            >
              {/* Discount Icon */}
              <img
                src={Discount}
                alt="Discount"
                className="absolute top-2 left-2 w-8 h-8"
              />
              {/* View Icon */}
              <img
                src={FillEye}
                alt="View Icon"
                className="absolute top-2 right-2 w-6 h-6"
              />
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-[175px] mx-auto pt-10"
              />
              {/* Add to Cart Button */}
              <button
                className="font-normal w-full text-xl py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
                type="button"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCartIcon size={30} className="mx-auto" />
              </button>
              {/* Product Details */}
              <div className="pt-3 text-center">
                <h3 className="font-bold text-xl">{product.title}</h3>
                <p className="text-red-500 font-medium mt-2">
                  Rs: {product.price}{" "}
                  <span className="ml-4 text-gray-400 line-through">
                    Rs: {product.originalPrice}
                  </span>
                </p>
                <div className="flex justify-center items-center mt-2">
                  <img src={Fivestar} alt="Stars" className="w-20" />
                  <span className="text-green-500 ml-2">in stock</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSection;
