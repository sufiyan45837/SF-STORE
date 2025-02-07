import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame from "../component/Frame.png";
import Discount from "../component/Discount.png";
import Fivestar from "../component/Five star.png";
import FillEye from "../component/Fill Eye.png";
import FillHeart from "../component/Fill Heart.png";
import speaker from "../component/speaker.png"
import timer from "../component/timer.png"
import { useNavigate } from "react-router-dom";
import Productcard from "../component/Porductcard";
import play from "../component/play.png"
import women from "../component/women.png"
import spea from "../component/spea.png"
import perfume from "../component/perfume.png"
import truck from "../component/truck.png"
import Servicess from "../component/Servicess.png"
import Servicesss from "../component/Servicesss.png"
import CountdownTimer from "../component/CountdownTimer";
import { CarrotIcon, ShoppingCartIcon } from "lucide-react";
import ProductsSection from "../component/ProductsSection";
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

    setShowCart(true);  
    setTimeout(() => setShowCart(false), 2000);  

    navigate("/cart");  
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

  const products = [
    { id: 1, image: "https://img.drz.lazcdn.com/static/pk/p/044c652a4a3a4b2db237ac06735d94db.jpg_200x200q80.jpg_.webp", title: " Sunglasses For Men  Black and Brown", price: 2000, oldPrice: 3000 },
    { id: 2, image: "https://img.drz.lazcdn.com/static/pk/p/b5d072f969860edab34c9850c396cc83.jpg_200x200q80.jpg_.webp", title: "Dlk sport Shoes For Men", price: 2000, oldPrice: 3000 },
    { id: 3, image: "https://tse3.mm.bing.net/th?id=OIP.8O40zWFpTk6cK3bZLs6O9QHaF1&pid=Api&P=0&h=220", title: "Apple raises  (fitness)  Watch Series 8", price: 1800, oldPrice: 2900 },
    { id: 4, image: "https://img.drz.lazcdn.com/static/pk/p/1f153495fd8a788de6b528a5ae768370.jpg_200x200q80.jpg_.webp", title: "Tws Airpod Chargng Case Sport ", price: 1400, oldPrice: 2000 },
    

    {
      id: 5, image: "https://img.drz.lazcdn.com/static/pk/p/4ceb4911e230078dfca4320ff16c42bb.jpg_200x200q80.jpg_.webp",
      title: "Oud Dirham Men  Perfume 100ml",
      price: 900,
      oldPrice: 1900,
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
    <div className="  overflow-x-hidden  pt-11  relative ">
      {/* Frame and Category Navigation */}
      <div className="items-center ">
        <img
          src={Frame}
          alt="Frame"
          className="sm:absolute top-[1%] lg:ml-44 left-1/2 transform -translate-x-1/2 h-auto  ml-[45%] "
        />
        <div className="text-xl font-normal lg:ml-5 sm:pl-5 relative z-20">
          {["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"].map((category, index) => (
            <h1 className="flex items-center pt-3" key={index}>
              {category}
            </h1>
          ))}
        </div>
        <div className="pt-40 flex flex-wrap justify-center gap-8 lg:transform -translate-x-1/3 ">
        <div className="ml-[400px]" >       
           <p className="bg-[#DB4444] w-[20px] h-[40px] lg:ml-28 "><h2 className="text-1xl font-semibold text-[#DB4444] lg:ml-9  lg:pt-3 ">Todays</h2></p>
        </div>

          <h1 className="text-3xl font-semibold  pt-[40px] lg:pr-9 -translate-x-1/3">Flash Sales</h1>
           <CountdownTimer />
        </div>
      </div>

      {/* Products Slider */}
      <Slider {...sliderSettings} className="pt-12 lg:max-w-screen-lg lg:ml-[180px] ">
        {products.map((product, index) => (
          <div key={index} className="px-4 relative">
            <div className=" shadow-lg p-4 relative">
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
                  onClick={() => navigate("/Wishlist")}
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
                  className="font-normal w-[250px] text-xl py-2 mt-4 transition-transform duration-300 hover:bg-black hover:scale-105 hover:text-white"
                  type="button"
                  onClick={() => handleAddToCart(product)}
                >
                   < ShoppingCartIcon size={30} className="ml-28"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {showCart && (
        <div className="fixed top-4 right-4 bg-green-500  px-4 py-2 rounded shadow-lg">
          Product added to cart!
        </div>
      )}

      {/* View all Products Button */}
      <div className="pt-20 flex justify-center mr-[10%] ">
        <button
          className="bg-red-500 w-[234px] h-[52px]  font-medium rounded border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all"
          type="button"
          onClick={() => navigate("/Porduct")} 
        >
          View all products
        </button>
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
              className="bg-red-500  text-sm lg:text-base font-bold px-6 py-2 rounded-lg hover:bg-red-600 transition-all lg:ml-[200%] lg:w-52"
              onClick={() => navigate("/Porduct")}
            >
              View All
            </button>
          </div>
        </div>
      </main>
      <Productcard />
      <div className=" lg:flex lg:pl-[190px]  pt-[60px] lg:pt-[50px] ">
        <div className="font-bold bg-black text-white lg:pl-[60px]  ">
          <h1 className="lg:pl-[1px]  pl-[90px] text-2xl lg:text-3xl text-green-300 lg:pt-[60px] ">Categories</h1>
          <p className=" lg:pl-[1px] pl-[90px] pt-[20px] text-2xl lg:text-5xl lg:pt-[70px] ">Enhence Your <br /> Music Experiance</p>
          <img className=" pt-[60px] lg:pt-[40px]" src={timer} alt="" />
          <div className=" pl-[90px]  lg:pl-[1px] lg:pt-[15px]">
            <button
              className="mt-10 bg-[#00FF66]  px-8 py-3  shadow-md hover:shadow-lg transition"
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
      <ProductsSection />
      <div className=" ">
        {/* Featured Section */}
        <section className="p-8">
          <div className="lg:pt-44">
            <p className="bg-[#DB4444] w-[20px] h-[40px] lg:ml-40">
              <h2 className="text-1xl font-semibold text-[#DB4444] lg:ml-12 w-[106px] h-[20px] lg:pt-3">Featured</h2>
            </p>
            <h1 className="text-5xl font-semibold pt-[15px] lg:ml-40">New Arrival</h1>
          </div>
        </section>
        <div className="lg:flex lg:pl-[80px] lg:gap-4 cursor-pointer">
          <div className="">
            <img src={play} alt="" onClick={() => navigate("/Porduct")} />
          </div>
          <div className="flex gap-4 flex-col">

            <div className=" lg:pt-[0px] pt-[8px]">
              <img src={women} alt="" onClick={() => navigate("/Porduct")} />
            </div>
            <div className="flex gap-4">
              <div >
                <img src={spea} alt="" onClick={() => navigate("/Porduct")} />
              </div>
              <div>
                <img src={perfume} alt="" onClick={() => navigate("/Porduct")} />
              </div>
            </div>


          </div>
        </div>


        <section className="   lg:flex  grid grid-cols-1 justify-around p-8 text-center pt-10 ">
          <div>

            <div className="text-2xl  " >
              <img className="  pl-[65px] lg:pl-[90px]" src={truck} alt="" />
              <h1 className="font-bold">Free and Fast Delivery</h1>
              <p className="text-sm text-gray-500">Free delivery on orders over $149</p>
            </div>
          </div>
          <div>
            <img className="  pl-[65px] lg:pl-[60px]" src={Servicess} alt="" />
            <div className="text-2xl " />
            <h4 className="font-semibold">24/7 Customer Service</h4>
            <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
          </div>
          <div>

            <div className="text-3xl ">
              <img className="   pl-[65px] lg:pl-[100px]" src={Servicesss} alt="" />
              <h4 className="font-semibold">Money Back Guarantee</h4>
              <p className="text-sm text-gray-500">Return money within 30 days</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;