import { prepcohortLogo } from "../assets";
import styles from "../style";

const Prepcohort = () => {
  return (
    <section
      className={`w-full ${styles.padding} ${styles.marginY} bg-purple-gradient`}>
      <div className="lg:px-16 sm:px-10 px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 flex flex-col lg:mr-10 lg:text-left text-center">
            <h2 className="font-lato font-extrabold leading-[35px] text-text-3 sm:text-[40px] text-[24px] mb-6">
              Prepcohort
            </h2>
            <p className="font-poppins font-medium sm:text-[25px] text-[14px] sm:leading-[37px] leading-[24px] text-text-3 max-w-[683px]">
              The world's most innovative institutions, colleges, companies use
              our app. One of them is Prepcohort
            </p>
          </div>
          <div className={`${styles.flexCenter} mt-10 lg:mt-0`}>
            <a
              href="https://www.prepcohort.com"
              className="sm:max-w-[362px] max-w-[300px] h-auto transition-transform duration-500 hover:scale-105 ease-in-out">
              <img
                src={prepcohortLogo}
                alt="logo"
                width={216}
                height={214}
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepcohort;
