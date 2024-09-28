import { useRef } from "react";
import { heroImage, heroRing2 } from "../assets";
import Button from "./Button";
import Heroballs from "./design/Heroballs";

const Hero = ({ onBookDemoClick }) => {
  const parallaxRef = useRef(null);
  return (
    <section id="hero" className="w-full relative mt-3 ">
      <Heroballs />
      <div
        className="relative flex lg:flex-row flex-col py-6 sm:py-16"
        ref={parallaxRef}>
        <div className="flex flex-col justify-center sm:items-start items-center text-center sm:text-left px-6 sm:px-16">
          <h1 className="lg:max-w-[549px] sm:max-w-[600px] font-poppins text-text-3 text-[24px] sm:text-[40px] leading-[36px] sm:leading-[65px] font-extrabold">
            AI-powered, gamified LMS Software Suite for cohort-based learning
          </h1>
          <p className="sm:max-w-[550px] lg:mt-5 mt-7 font-poppins text-text-2 font-normal sm:text-[18px] text-[16px] leading-[29.5px]">
            Study4As makes training, managing, tracking and follow-up learners
            individually or as a class super easy. Offering Institutions a
            dynamic data driven and efficient training workflow
          </p>

          <Button
            onClick={onBookDemoClick}
            spanClass="inline-block transition-transform hover:rotate-6 ease-in-out duration-500"
            className="bg-primary py-3.5 px-6 text-lg font-bold mt-5 sm:mt-7">
            Explore With Us
          </Button>
        </div>

        <div className="relative flex-1 flex justify-center items-center lg:my-5 my-20 lg:mx-0 mx-12">
          <div className="relative w-full max-w-[775px] h-auto">
            <img
              src={heroImage}
              width={775}
              height={620}
              alt="dashboard"
              className="relative z-[5] w-full h-auto"
            />

            <img
              src={heroRing2}
              width={809.43}
              height={900.54}
              alt="ring"
              className="absolute -top-[22%] left-0 z-[1] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
