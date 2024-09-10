import { check, trackingImage } from "../assets";
import { tracking } from "../constant";
import styles, { layout } from "../style";
import GradientLight from "./design/GradientLight";

const Tracking = () => {
  return (
    <section className={`relative ${styles.paddingX} w-full`}>
      <div className={`relative z-10 ${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <div className="bg-secondary rounded-full sm:px-4 px-2 sm:py-2 py-1 sm:mb-7 mb-4">
            <h2 className={`${styles.heading2}`}>TRACKING</h2>
          </div>

          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>Study Tracking</h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Efficiently monitor and analyze student progress. Educators get
            valuable insights into individual learning journeys for optimized
            teaching strategies
          </p>

          <h3 className="font-poppins font-semibold text-[18px] sm:text-[24px] text-text-2 leading-[35px] sm:mb-6 mb-4 ">
            Tracking Feature List:
          </h3>

          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {tracking.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h4 className={`${styles.heading6}`}>{items} </h4>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${layout.sectionImg} max-w-[550px] h-auto`}>
          <img
            src={trackingImage}
            width={550}
            height={501.02}
            alt="laptop"
            className="w-full h-auto"
          />
        </div>
        <GradientLight className="top-[-20%] right-[30%]" />
      </div>
    </section>
  );
};

export default Tracking;
