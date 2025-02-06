import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 23);
    targetDate.setMinutes(targetDate.getMinutes() + 19);
    targetDate.setSeconds(targetDate.getSeconds() + 56);

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4  text-4xl font-bold ml-56">
      <div className="text-center">
        <p>{timeLeft.days.toString().padStart(2, "0")}</p>
        <span className="text-sm ">Days</span>
      </div>
      <span className="text-red-500">:</span>
      <div className="text-center">
        <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
        <span className="text-sm ">Hours</span>
      </div>
      <span className="text-red-500">:</span>
      <div className="text-center">
        <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
        <span className="text-sm ">Minutes</span>
      </div>
      <span className="text-red-500">:</span>
      <div className="text-center">
        <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
        <span className="text-sm ">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
