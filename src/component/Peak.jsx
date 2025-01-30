import React, { useState, useEffect } from "react";
import speaker from "../component/speaker.png";
const Peak = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, days: 5, minutes: 59, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="  lg:flex lg:items-center justify-center bg-black text-white lg:p-10 lg:w-[1170px] lg:h-[550px] lg:ml-[130px] lg:mt-28  ">
      <div className="w-1/2">
        <span className="px-3 py-1 rounded text-2xl text-green-400">Categories</span>
        <h1 className="text-6xl font-bold mt-4">Enhance Your <br /> Music Experience</h1>
        <div className="flex gap-4 mt-6 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white text-black p-3 rounded-md">
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm">{unit}</p>
            </div>
          ))}
        </div>
        <div className="pl-[40px]">
        <button className="mt-6  bg-[#00FF66] px-6 py-3 rounded text-black font-semibold hover:bg-white transition"   onClick={() => navigate("/Porduct")}>
          Buy Now!
        </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className=" lg:p-2 rounded-lg">
          <img src={speaker}alt="Speaker" className="h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Peak;
