import { ScrollParallax } from "react-just-parallax";
import { check, roleImage } from "../assets";
import { role } from "../constant";
import styles, { layout } from "../style";

const Role = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`${layout.section} items-center`}>
        <div className={`${layout.sectionInfo}`}>
          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>
            Role/Staff Management
          </h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Schools can efficiently manage staff roles and appointments on
            Study4as, empowering administrators to assign specific roles to
            educators and other staff members
          </p>

          <h3 className="font-poppins font-semibold sm:text-[24px] text-[18px] text-text-2 leading-[35px] sm:mb-6 mb-4 ">
            Role Feature List:
          </h3>

          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {role.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h4 className={`${styles.heading6}`}>{items} </h4>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${layout.sectionImg} max-w-[561px] `}>
          <div className={`${styles.paddingX} relative w-full h-auto`}>
            <img
              src={roleImage}
              alt="three men on a card"
              width={488}
              height={545}
              className="w-full h-auto"
            />
            <ScrollParallax isAbsolutelyPositioned>
              <div className="flex justify-center items-center absolute top-[6%] left-[1%] bg-bg-ct rounded-xl w-[30%] sm-w-[20%] px-2 sm:px-3 py-3 sm:py-4 ">
                <p className="font-merriweather font-semibold text-text-2 text-[10px] sm:text-[16px] leading-[18px] sm:leading-[28px] max-w-[150px]">
                  Enhance staff management
                </p>
              </div>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
              <div className="flex justify-center items-center absolute bottom-[4%] left-[1%] bg-bg-ct rounded-xl w-[35%] px-2 sm:px-3 py-3 sm:py-4 ">
                <p className="font-merriweather font-semibold text-text-2 text-[10px] sm:text-[16px] leading-[18px] sm:leading-[28px] max-w-[150px]">
                  Allows overseeing activities
                </p>
              </div>
            </ScrollParallax>

            <ScrollParallax isAbsolutelyPositioned>
              <div className="flex justify-center items-center absolute top-[40%] right-[0%] bg-bg-ct rounded-xl w-[30%] sm:w-[25%] px-2 sm:px-3 py-3 sm:py-4 ">
                <p className="font-merriweather font-semibold text-text-2 text-[10px] sm:text-[16px] leading-[18px] sm:leading-[28px] max-w-[150px]">
                  Maximum admin role
                </p>
              </div>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;
