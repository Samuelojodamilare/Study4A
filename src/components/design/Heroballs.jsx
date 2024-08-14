import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
const Heroballs = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="absolute inset-0 h-full w-full z-0 pointer-events-none">
      <div className="absolute h-full w-full ">
        <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
          <div className="absolute top-[5%] left-[5%]">
            <div
              className={`w-10 h-10 rounded-full bg-circle-gradient-2  transition-transform duration-500 ease-out${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>

          <div className="absolute top-[8%] left-[10%] ">
            <div
              className={`w-[65px] h-[65px] rounded-full bg-circle-gradient-2 transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>

          <div className="absolute top-[2%] right-[5%] ">
            <div
              className={`w-[53px] h-[53px] rounded-full bg-circle-gradient-2 transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>

          <div className="absolute top-[5%] left-[47%] ">
            <div
              className={`w-[44px] h-[44px] rounded-full bg-circle-gradient-2 transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>

          <div className="absolute bottom-[10%] left-[30%] ">
            <div
              className={`w-[114px] h-[114px] rounded-full bg-circle-gradient-2 transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>

          <div className="absolute bottom-[3%] left-[1%] ">
            <div
              className={`w-[161px] h-[161px] rounded-full bg-circle-gradient-2 transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>

          <div className="absolute bottom-[5%] right-[20%] ">
            <div
              className={`w-[44px] h-[44px] rounded-full bg-circle-gradient-2 transition-transform duration-500 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}></div>
          </div>
        </MouseParallax>
      </div>
    </div>
  );
};

export default Heroballs;
