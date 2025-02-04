import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discount from "../component/Discount.png";  
import FillEye from "../component/Fill Eye.png";    
import Fivestar from "../component/Five star.png";  
import udy from "../component/udy.png";            
import o from "../component/o.png";               

const Productcard = () => {
  const navigate = useNavigate(); // Initialize navigate hook

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

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.title === product.title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart"); // Navigate to the cart page
  };

  // Define products array
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
    <div className="pt-12 lg:max-w-screen-lg gap-10 lg:ml-56 ">
      <Slider {...sliderSettings}>
        {products.map((product, index) => (
          <div key={index} className="bg-slate-100 w-[270px] h-[300px]">
            <img src={Discount} alt="Discount" />
            <img src={FillEye} alt="View Icon" className="ml-[220px]" />
            <img src={product.image} alt={product.title} className="w-[175px] ml-10" />
            <button
              className="font-normal w-[255px] text-xl py-2 mt-4 ml-2 mr-10 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
              type="button"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
            <div className="pt-3">
              <h3 className="font-bold text-1xl pt-3">{product.title}</h3>
              <p className="text-red-500 font-sans text-md pt-6 font-medium">
                Rs: {product.price} <span className="ml-4 text-gray-400 line-through">Rs: {product.originalPrice}</span>
              </p>
              <h3 className="flex pt-3 right-36">
                <img src={Fivestar} alt="Stars" />
                <span className="text-green-500 ml-2">in stock</span>
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Productcard;
