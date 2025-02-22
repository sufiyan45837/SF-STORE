import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Frame from "../component/Frame.png";
import aro from "../component/aro.png";

const Swi = () => {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.MccdQaFarKtQiNl-S0MSdwHaEK&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.Whg0dwZ9BF4Izc4EXtJOsQHaE7&pid=Api&P=0&h=220",
    Frame,
   
  ];

  return (
    <div className="relative max-w-4xl mx-auto ml-[60%]">
         <div className="text-xl font-normal lg:ml-5 sm:pl-5 relative z-20">
                  {["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"].map((category, index) => (
                    <h1 className="flex items-center pt-3" key={index}>
                      {category}
                      <img src={aro} alt="" className="w-6 h-6 bg-white" />
                    </h1>
                  ))}
                </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className=""
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="" />
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  );
};

export default Swi;
