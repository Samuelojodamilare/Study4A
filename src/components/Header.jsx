import { useState, useEffect } from "react";
import { S4ALogo, S4ALogo2 } from "../assets";
import Button from "./Button";
const Header = ({ onBookDemoClick }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroTop = heroSection.getBoundingClientRect().top;
        console.log("heroSection top", heroTop);
        if (heroTop <= 0) {
          console.log("header should be blur now");
          setIsBlurred(true);
        } else {
          setIsBlurred(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40  ${
        isBlurred ? "backdrop-blur-md bg-primary/75" : "bg-primary"
      } transition-all duration-300`}>
      <div className="flex items-center justify-between lg:mx-16 sm:mx-10 mx-6 px-1 sm:px-2 sm:py-6 py-4">
        <div className="hidden sm:flex  max-w-[130px] sm:max-w-[145px] h-auto">
          <a href="#">
            <img
              src={S4ALogo}
              width={145}
              height={40}
              alt="S4A"
              className="w-full h-auto object-contain"
            />
          </a>
        </div>
        <div className="sm:hidden flex max-w-[130px] sm:max-w-[145px] h-auto">
          <a href="#">
            <img
              src={S4ALogo2}
              alt="S4A"
              className=" w-full h-8 object-contain"
            />
          </a>
        </div>

        <div className="flex justify-between items-center">
          {/* <a
            href="#"
            className="text-white/50 p-1 hover:text-white transition-colors text-xl leading-7 font-poppins">
            Sign in
          </a> */}
          <Button
            onClick={onBookDemoClick}
            className="border transition hover:border-white/50">
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
