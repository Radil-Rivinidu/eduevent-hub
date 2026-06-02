import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const calculateTime = () => {
    const difference = new Date(targetDate) - new Date();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-cyan-400 font-bold">
      {timeLeft.days} Days Left
    </div>
  );
}