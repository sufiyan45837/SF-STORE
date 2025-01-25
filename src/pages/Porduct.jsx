import React from 'react'
import controller from "../component/controller.png";
import Discount from "../component/Discount.png";
import Fivestar from "../component/Five star.png";
import keyboard from "../component/keyboard.png";
import moniter from "../component/moniter.png";
const Porduct = () => {

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
            <img
              src={FillEye}
              alt="View Icon"
              className="absolute top-2 right-2 w-8 h-8 cursor-pointer"
              onClick={() => handleImageClick("/Details")} // Trigger to show the full image
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
  )
}

export default Porduct