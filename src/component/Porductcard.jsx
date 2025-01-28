import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ph from "../component/ph.png";
import comp from "../component/comp.png";
import camra from "../component/camra.png";
import head from "../component/head.png";
import smart from "../component/smart.png";
import gaming from "../component/gaming.png";
import FillEye from "../component/Fill Eye.png";  // Replace with your path
import Discount from "../component/Discount.png"; // Replace with your path
import Fivestar from "../component/Five star.png"; // Replace with your path
// import { Wishlist } from "../pages/Wishlist"; // Assuming those are defined somewhere

 const Productcard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // md
      { breakpoint: 768, settings: { slidesToShow: 2 } },  // sm
      { breakpoint: 480, settings: { slidesToShow: 1 } },  // xs or smaller
    ],
  };

  const categories = [
    { type: "Phones", image: ph },
    { type: "Computer", image: comp },
    { type: "Camera", image: camra },
    { type: "Headphones", image: head },
    { type: "Smart Watch", image: smart },
    { type: "Gaming", image: gaming },
  ];

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Item Categories
      </h2>
      <Slider {...sliderSettings} className="pt-12 lg:max-w-screen-lg lg:ml-56">
        {categories.map((category, index) => (
          <div key={index} className="px-4 relative">
            <div className="bg-slate-100 shadow-lg p-4 relative">
              <img src={Discount} alt="Discount" />
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.type}
                  className="pt-7 w-[190px] h-[180px] mx-auto"
                />
                
              </div>
              <div className="text-center">
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Productcard;