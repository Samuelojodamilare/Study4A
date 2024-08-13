import { heroImage, heroImage2, heroRing } from "../assets";
import Button from "./Button";
import Heroballs from "./design/Heroballs";

const Hero = () => {
  return (
    <section className="w-full relative mt-3 ">
      <Heroballs />
      <div className="relative flex lg:flex-row flex-col sm:py-16 py-6">
        <div className="flex flex-col justify-center lg:items-start items-center sm:px-16 px-6">
          <h1 className="lg:max-w-[549px] font-poppins text-text-3  sm:text-[48px] text-[40px] leading-[65px] font-extrabold">
            An AI powered cloud-based, cohort centric multi-school LMS Software
            Suite
          </h1>
          <p className="lg:max-w-[550px] mt-5 font-poppins text-text-2 font-normal text-[18px] leading-[29.5px]">
            Study4As makes training, managing, tracking and follow-up learners
            individually or as a class super easy. Offering Institutions a
            dynamic data driven and efficient training workflow
          </p>

          <Button
            href="#"
            spanClass="inline-block transition-transform hover:rotate-6 ease-in-out duration-500"
            className="bg-primary py-3.5 px-6 text-lg font-bold mt-5">
            Explore With Us
          </Button>
        </div>

        <div className="relative flex-1 flex justify-center items-center lg:my-5 my-10 md:mx-0 mx-6">
          <div className="relative w-full max-w-[775px] h-auto">
            <img
              src={heroImage2}
              width={775}
              height={620}
              alt="dashboard"
              className="relative z-[5] w-full h-auto"
            />

            <img
              src={heroRing}
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
