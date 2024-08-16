import { prepcohortLogo, prepcohortLogo2 } from "../assets";
import styles, { layout } from "../style";

const Prepcohort = () => {
  return (
    <section
      className={`w-full ${styles.padding} ${styles.marginY} bg-purple-gradient`}>
      <div className={`${styles.paddingX} `}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex flex-col md:mr-10 md:text-left text-center">
            <h2 className="font-lato font-extrabold leading-[35px] text-text-3 text-[40px] mb-6">
              Prepcohort
            </h2>
            <p className="font-poppins font-medium text-[25px] leading-[37px] text-text-3 max-w-[683px]">
              The world's most innovative institutions, colleges, companies use
              our app. One of them is Prepcohort
            </p>
          </div>
          <div className={`${styles.flexCenter} mt-10 md:mt-0`}>
            <img
              src={prepcohortLogo2}
              alt="logo"
              width={216}
              height={214}
              className="w-full h-auto max-w-[216px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepcohort;
