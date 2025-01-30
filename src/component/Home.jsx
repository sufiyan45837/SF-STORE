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
import ca from "../component/ca.png"; // Heart icon for wishlist functionality // Heart icon for wishlist functionality
import pic from "../component/pic.png"; // Heart icon for wishlist functionality
 // Heart icon for wishlist functionality
 import speaker from "../component/speaker.png"
import timer from "../component/timer.png"
import { useNavigate } from "react-router-dom";
import Productcard from "../component/Porductcard";
import play from "../component/play.png"
import women from "../component/women.png"
import spea from "../component/spea.png"
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
    { id: 1, image: controller, title: " Shoes for Men Comfortable Walking", price: 2000, oldPrice: 3000 },
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
  const component = [
    "",
    "",
    "https://tse3.mm.bing.net/th?id=OIP.GMR62fOuaozAynix4Hyn0gHaEo&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.hF7QTj2zZqAf4Mu0SpB6MgHaE_&pid=Api&P=0&h=220",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? component.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === component.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <div className="  overflow-x-hidden  pt-8 ml-8 relativ  ">
      {/* Frame and Category Navigation */}
      <div className="items-center ">
        <img
          src={Frame}
          alt="Frame"
          className="sm:absolute top-[1%] lg:ml-44 left-1/2 transform -translate-x-1/2 h-auto sm: ml-[43%] md: ml-[45%] "
        />
        <div className="text-xl font-normal lg:ml-5 sm:pl-5 relative z-20">
          {["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"].map((category, index) => (
            <h1 className="flex items-center pt-3" key={index}>
              {category}
              <img src={aro} alt="" className="w-6 h-6 bg-white" />
            </h1>
          ))}
        </div>
        <div className="pt-40 flex flex-wrap  gap-8 lg:transform -translate-x-1/3 justify-center">
          <img src={For} alt="For Image" className="w-32 h-auto bg-white ml-[50px]" />
          <img src={group} alt="Group" className="h-14 w-auto bg-white  ml-[50px]" />
        </div>
      </div>

      {/* Products Slider */}
      <Slider {...sliderSettings} className="pt-12 lg:max-w-screen-lg lg:ml-[290px] ">
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
      <div className="pt-20 flex justify-center mr-[10%] ">
        <button
          className="bg-red-500 w-[234px] h-[52px] text-white font-medium rounded border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all"
          type="button"
          onClick={() => navigate("/Porduct")} // Go to the main products page
        >
          View all products
        </button>
      </div>
      <div className="pt-28 lg:pl-[100px] ">

        <img src={ca}  />
        </div>
        <div>

        </div>

        <main className="px-8 py-12 lg:mr-32 lg:pt-32 sm:max-w-screen-sm lg:pl-32  ">

  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 space-y-4 lg:space-y-0 ">
  
   <div>
      <p className="text-red-500 font-medium text-2xl lg:text-3xl  lg:w-96">This Month</p>
    
      <h2 className="text-3xl lg:text-5xl font-bold leading-tight lg:w-96">Best Selling Products</h2>
      
    </div>
    <div className="lg:pl-36">
    <button
      className="bg-red-500 text-white text-sm lg:text-base font-bold px-6 py-2 rounded-lg hover:bg-red-600 transition-all lg:ml-[200%] lg:w-52"
      onClick={() => navigate("/Porduct")}
    >
      View All
    </button>
    </div>
    
   
  </div>
</main>
      

      <Productcard/>
      <div className=" lg:flex lg:pl-[190px]  pt-[60px] lg:pt-[50px] "> 
          <div className="font-bold bg-black text-white lg:pl-[60px]  ">
            <h1 className="lg:pl-[1px]  pl-[90px] text-2xl lg:text-3xl text-green-300 lg:pt-[60px] ">Categories</h1>
            <p className=" lg:pl-[1px] pl-[90px] pt-[20px] text-2xl lg:text-5xl lg:pt-[70px] ">Enhence Your <br /> Music Experiance</p>
            <img  className=" pt-[60px] lg:pt-[40px]" src={timer} alt="" />
            <div className=" pl-[90px]  lg:pl-[1px] lg:pt-[15px]">
            <button
          className="mt-10 bg-[#00FF66] text-white px-8 py-3  shadow-md hover:shadow-lg transition"
          onClick={() => navigate("/Porduct")}
        >
          Buy Now!
        </button>
        </div>
          </div>
          <div className="bg-black lg:pt-[50px] ">
          <img src={speaker} alt="" />
          </div>

</div>
    
    {/* productssss */}
       
  
    <section className="m-4 md:m-6 lg:m-9">
    <div className="lg:pt-44">
        <p className="bg-[#DB4444] w-[20px] h-[40px] lg:ml-52 "><h2 className="text-1xl font-semibold text-[#DB4444] lg:ml-12 w-[106px] h-[20px] lg:pt-3 ">Our Products</h2></p>
        <h1 className="text-5xl font-semibold lg:ml-52 pt-[15px] ">Explore Our Products</h1>
     
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:pt-20">
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src={speaker} alt="Smart Watch" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Smart Watch T900 Ultra</h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 1800 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="http://cdn2.jomashop.com/media/catalog/product/h/u/hublot-classic-fusion-18k-gold-black-dial-men_s-watch-511.ox.1180.lr.jpg" alt="Hublot" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Hblot Black Dial Men's Watch</h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 2500 <span className="ml-4 text-gray-400 line-through">Rs:3500</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="https://toppng.com/uploads/preview/submariner-date-rolex-submariner-date-116618-11563269252pzhbhoa1cx.png" alt="rolex" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Rolex Submariner Blue</h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 5000<span className="ml-4 text-gray-400 line-through">Rs:6000</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="https://shopnow.com.pk/wp-content/uploads/2023/02/Airpods-Pro-6-Wireless.png" alt="pro 6 airpod" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Airpods Pro 6 Wireless </h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 1500 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="https://tse2.mm.bing.net/th?id=OIP.y1sgc113SuKd2wzJ5rW2PQHaHa&pid=Api&P=0&h=220" alt="girls glasses" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Square Frame glasses for girls</h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 1000 <span className="ml-4 text-gray-400 line-through">1800</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="https://down-my.img.susercontent.com/file/0c6a90ac961b8fc329728a569302c449" alt="square glasses" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Square plastic sun glasses for men,boys</h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 1800 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="https://tse2.mm.bing.net/th?id=OIP.xQOjVxov-h_O9d47MtLuxQAAAA&pid=Api&P=0&h=220" alt="shoes" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Shoes addidas for mens,boys and girl</h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 1800 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="bg-slate-100 w-full max-w-xs mx-auto p-4 rounded-lg shadow-md">
      <img src={Discount} alt="Discount" className="w-8 h-8" />
      <div className="relative">
        <img src={FillEye} alt="View Icon" className="absolute top-2 right-2 w-6 h-6" />
        <img src="https://tse4.mm.bing.net/th?id=OIP.UjVumT0Aa-WcgXpf_NihSQHaH7&pid=Api&P=0&h=220" alt="Slaonica bed sheet" className="w-40 mx-auto h-40" />
      </div>
      <button
        className="w-full text-lg py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
        type="button"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <div className="pt-3 text-center">
        <h3 className="font-bold text-lg pt-3">Slaonica bed sheet king size </h3>
        <p className="text-red-500 font-medium pt-2">
          Rs: 2000 <span className="ml-4 text-gray-400 line-through">Rs:2500</span>
        </p>
        <h3 className="flex justify-center items-center pt-3">
          <img src={Fivestar} alt="Stars" className="w-20" />
          <span className="text-green-500 ml-2">in stock</span>
        </h3>
      </div>
    </div>
    <div className="lg:ml-[170%] lg:pt-10">
    <button
          className="bg-red-500 w-[234px] h-[52px] text-white font-medium rounded border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all"
          type="button"
          onClick={() => navigate("/Porduct")} // Go to the main products page
        >
          View all products
        </button>
        </div>
  </div>
</section>
    <div className="w-full">
<div className="lg:pt-44  ">
        <p className="bg-[#DB4444] w-[20px] h-[40px] lg:ml-40 "><h2 className="text-1xl font-semibold text-[#DB4444] lg:ml-12 w-[106px] h-[20px] lg:pt-3 ">Featured</h2></p>
        <h1 className="text-5xl font-semibold pt-[15px] lg:ml-40">New Arrival</h1>
     
        </div>
         <div className="lg:pt-8 lg:ml-44 cursor-pointer lg:flex "       onClick={() => navigate("/Porduct")} >
          <img src={play} alt=""  />
          <img src={women} alt=""  className="lg:w-[570px] lg:h-[300px]  lg:ml-10"/>
         </div>
        </div>
        
    </div>
  );
};

export default Home;
