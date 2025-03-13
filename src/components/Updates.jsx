import React, { useEffect, useState } from "react";
import styles from "../style";
import { ClockIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import { update } from "../constant";

const Updates = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-04-26T00:00:00") - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  return (
    <section className="w-full bg-gradient-to-r from-purple-500 to bg-orange-500">
      <div className="text-white flex flex-col items-center justify-center py-10">
        <div className="flex items-center justify-center gap-2">
          <h2 className={`${styles.heading3} text-[24px] text-center`}>
            Big Updates Coming Soon!
          </h2>
          <RocketLaunchIcon className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <p
          className={`${styles.paragraph} text-[14px] max-w-[350px] text-white text-center mt-2 sm:mt-4`}>
          We are excited to announce that we will soon be ISO 27001, SOC 2,
          SCORM, xAPI, and LRS compliant. This means higher security, better
          data protection, and seamless integration for our users
        </p>
        <div className="flex gap-2 sm:gap-3 mt-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white font-merriweather font-semibold text-black w-[80px] sm:w-28 px-3 sm:px-4 py-1 rounded-md text-center shadow-lg">
              <p className="text-base sm:text-2xl">
                {formatTime(timeLeft[unit])}
              </p>
              <span className="text-[12px] sm:text-sm uppercase">{unit}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
          {update.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 items-center bg-primary/80 p-2 rounded-md shadow-md">
              <p className="font-mono text-[12px] max-sm:font-semibold sm:text-base text-white">
                {item.title}
              </p>
              <ClockIcon className="w-4 h-4 text-yellow-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
