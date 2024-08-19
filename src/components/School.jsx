import React from "react";
import styles from "../style";
import { chart, stars } from "../assets";

const School = () => {
  return (
    <section className={`${styles.paddingX} w-full relative bg-bg-br/50 z-[1]`}>
      <div className={`flex flex-col items-center ${styles.paddingY}`}>
        <h2 className="font-poppins font-extrabold sm:text-[52px] text-[24px] text-text-3 leading-[35px] sm:mb-5 mb-3">
          Multi-school Instances
        </h2>
        <p className="font-lato font-normal sm:text-[20px] text-[18px] text-text-2 sm:leading-[30px] leading-[24px] max-w-[727px] text-center sm:mb-8 mb-6">
          Join our platform as a teacher to connect with a diverse pool of
          students. Expand your reach and impact a broader community of eager
          learners.
        </p>

        <div className="w-full max-w-[1200px] relative">
          <img
            src={chart}
            alt="chart"
            className="w-full h-auto relative z-[2]"
          />
        </div>

        <div className="hidden md:block absolute top-[32%] lg:top-[25%] xl:top-[20%] right-[0%] md:max-w-[190px] lg:max-w-[260px] xl:max-w-[390px] h-auto pointer-events-none">
          <img
            src={stars}
            alt="stars"
            className="w-[full]  h-full opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default School;
