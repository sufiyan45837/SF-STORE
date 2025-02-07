import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from "../component/web.png"
import our from "../component/our.png"
import truck from "../component/truck.png"
import Servicess from "../component/Servicess.png"
import Servicesss from "../component/Servicesss.png"
const About = () => {
  return (
    <div className="container mx-auto p-6 w-full">
      {/* Hero Section */}
      <section className="text-center lg:flex lg:items-center lg:justify-between">
        <div className="">
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="mt-4  w-[500px] font-extrabold text-1xl">
          Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <img
          src={web}
          alt="Our Story"
          className="lg:w-1/2 mt-6 lg:mt-0 rounded-lg shadow-lg"
        />
      </section>

      {/* Stats Section */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "10.5k", label: "Sellers active on site" },
          { value: "33k", label: "Monthly product sale", highlight: true },
          { value: "45.5k", label: "Customer active on site" },
          { value: "25k", label: "Annual gross sale on site" },
        ].map((stat, index) => (
          <div key={index} className={`p-6 border rounded-lg ${stat.highlight ? "bg-red-500 text-white" : ""}`}>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </section > 
     
      
      <section className="mt-16">
      <img src={our}alt="" className="w-full "/>
      </section>

  <section className="   lg:flex  grid grid-cols-1 justify-around p-8 text-center pt-[100px] ">
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
  );
};

export default About;
