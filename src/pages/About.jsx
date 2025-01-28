import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type from "../component/type.png";
import web from "../component/web.png";
import img from "../component/img.png";
import our from "../component/our.png";
import services from "../component/services.png";

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
      <section className="pt-16 px-10 flex ml-40 ">

          {[type, web].map((image, index) => (
            <div key={index} className="p-4">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-[525px] h-[336px] mx-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
     
      </section>

      {/* Bottom Section */}
      <section className="pt-28 flex flex-col items-center">
        <img
          src={img}
          alt="Main Content"
          className="w-[700px] h-auto transition-transform duration-300 hover:scale-105"
        />
        <div className="pt-24">
          <img
            src={our}
            alt="Our Image"
            className="w-[600px] h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="pt-16">
          <img src={services} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
