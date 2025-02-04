import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type from "../component/type.png";
import web from "../component/web.png";
import img from "../component/img.png";
import our from "../component/our.png";
import Services from "../component/Services.png"
import Servicess from "../component/Servicess.png"
import Servicesss from "../component/Servicesss.png"

const About = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 component at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      {/* Top Section */}


      {/* Slider Section */}
      <section className="lg:pt-16 lg:px-10 lg:flex lg:ml-40  ">

        {[type, web].map((image, index) => (
          <div key={index} className="p-4 bg-white">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=""
            />
          </div>
        ))}

      </section>

      {/* Bottom Section */}
      <section className="  lg:pt-28 lg:flex lg:flex-col lg:items-center  ">
        <img
          src={img}
          alt="Main Content"
          className=" lg:w-[700px] lg:h-auto lg:transition-transform lg:duration-300 lg:hover:scale-105 bg-white"
        />
        <div className="pt-24">
          <img
            src={our}
            alt="Our Image"
            className="w-[600px] h-auto transition-transform duration-300 hover:scale-105 bg-white"
          />
        </div>
        
             <section className="   lg:flex  grid grid-cols-1 justify-around p-8 text-center pt-10 ">
               <div>
              
       <div  className="text-2xl  " >
         <img className="  pl-[65px] lg:pl-[90px]"  src={Services} alt="" />
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
      </section>
    </div>
  );
};

export default About;
