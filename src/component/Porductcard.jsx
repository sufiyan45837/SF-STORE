import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discount from "../component/Discount.png";  
import FillEye from "../component/Fill Eye.png";    
import Fivestar from "../component/Five star.png";  
import udy from "../component/udy.png";            
import o from "../component/o.png";               

const Productcard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="pt-12  lg:max-w-screen-lg gap-10 lg:ml-56  ">
      <Slider {...sliderSettings} >

<div className="bg-slate-100 w-[270px] h-[300px]  ">
  <img src={Discount} alt="Discount" />
  <img
    src={FillEye}
    alt="View Icon"
    className="ml-[220px]"
  />
  <img
    src="https://fshop.oss-accelerate.aliyuncs.com/20230308110829663598981.png"
    alt="Smart Watch"
    className="w-[175px] ml-10"
  />
  <button
    className="font-normal w-[255px] text-xl py-2 mt-4 ml-2 mr-10 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
    type="button"
  >
    Add to cart
  </button>
  <div className="pt-3">
    <h3 className="font-bold text-1xl pt-3">Smart Watch T900 Ultra</h3>
    <p className="text-red-500 font-sans text-md pt-6 font-medium">
      Rs: 1800 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
    </p>
    <h3 className="flex pt-3 right-36">
      <img src={Fivestar} alt="Stars" />
      <span className="text-green-500 ml-2">in stock</span>
    </h3>
  </div>
</div>
<div className="bg-slate-100 w-[270px] h-[300px]">
  <img src={Discount} alt="Discount" />
  <img
    src={FillEye}
    alt="View Icon"
    className="ml-[220px]"
  />
  <img src={o} alt="Smart Watch" className="ml-16 w-[130px]" />
  <button
    className="font-normal w-[255px] text-xl py-2 mt-4 ml-2 mr-10 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
    type="button"
  >
    Add to cart
  </button>
  <div className="pt-3">
    <h3 className="font-bold text-1xl pt-3">
      Timex Men's Harborside 42mm Black Leather Strap Watch
    </h3>
    <p className="text-red-500 font-sans text-md pt-6 font-medium">
      Rs: 2500 <span className="ml-4 text-gray-400 line-through">Rs:3000</span>
    </p>
    <h3 className="flex pt-3 right-36">
      <img src={Fivestar} alt="Stars" />
      <span className="text-green-500 ml-2">in stock</span>
    </h3>
  </div>
</div>
<div className="bg-slate-100 w-[270px] h-[300px]">
  <img src={Discount} alt="Discount" />
  <img
    src={FillEye}
    alt="View Icon"
    className="ml-[220px]"
  />
  <img
    src="https://tse1.mm.bing.net/th?id=OIP.o2N5J_KbgJV1iCFRNuULLwHaLH&pid=Api&P=0&h=220"
    alt="Duhnil Perfume"
    className="w-[120px] ml-16"
  />
  <button
    className="font-normal w-[255px] text-xl py-2 mt-4 ml-2 mr-10 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
    type="button"
  >
    Add to cart
  </button>
  <div className="pt-3">
    <h3 className="font-bold text-1xl pt-3">Duhnil desire perfume for men</h3>
    <p className="text-red-500 font-sans text-md pt-6 font-medium">
      Rs: 600 <span className="ml-4 text-gray-400 line-through">Rs:1000</span>
    </p>
    <h3 className="flex pt-3 right-36">
      <img src={Fivestar} alt="Stars" />
      <span className="text-green-500 ml-2">in stock</span>
    </h3>
  </div>
</div>
<div className="bg-slate-100 w-[270px] h-[300px]">
  <img src={Discount} alt="Discount" />
  <img
    src={FillEye}
    alt="View Icon"
    className="ml-[220px]"
  />
  <img
    src={udy}
    alt="Udy Perfume"
    className="w-[205px] ml-[50px]"
  />
  <button
    className="font-normal w-[255px] text-xl py-2 mt-4 ml-2 mr-10 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
    type="button"
  >
    Add to cart
  </button>
  <div className="pt-3">
    <h3 className="font-bold text-1xl pt-3">Udy Perfume For Men 100-ml</h3>
    <p className="text-red-500 font-sans text-md pt-6 font-medium">
      Rs: 700 <span className="ml-4 text-gray-400 line-through">Rs:1100</span>
    </p>
    <h3 className="flex pt-3 right-36">
      <img src={Fivestar} alt="Stars" />
      <span className="text-green-500 ml-2">in stock</span>
    </h3>
  </div>
</div>
<div className="bg-slate-100 w-[270px] h-[300px]">
  <img src={Discount} alt="Discount" />
  <img
    src={FillEye}
    alt="View Icon"
    className="ml-[220px]"
  />
  <img
    src="https://tse2.mm.bing.net/th?id=OIP.GgYwyHx9GjLHfvwTvq4xWwHaHa&pid=Api&P=0&h=220"
    alt="Udy Perfume"
    className="w-[180px]  ml-10"
  />
  <button
    className="font-normal w-[255px] text-xl py-2 mt-4 ml-2 mr-10 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
    type="button"
  >
    Add to cart
  </button>
  <div className="pt-3">
    <h3 className="font-bold text-1xl pt-3">Track Suit for men </h3>
    <p className="text-red-500 font-sans text-md pt-6 font-medium">
      Rs: 2000 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
    </p>
    <h3 className="flex pt-3 right-36">
      <img src={Fivestar} alt="Stars" />
      <span className="text-green-500 ml-2">in stock</span>
    </h3>
  </div>
</div>
</Slider>
    </div>
  );
};

export default Productcard;
