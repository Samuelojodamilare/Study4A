import { customImg } from "../assets";
import styles, { layout } from "../style";
import CustomAnime from "./design/CustomAnime";

const Customization = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`${layout.section} items-center`}>
        <div className={`${layout.sectionInfo} `}>
          <h2 className="font-poppins font-bold lg:text-[48px] sm:text-[38px] text-[30px] text-primary lg:leading-[35px] sm:leading-[21px] leading-[18px] max-w-[342px] sm:mb-6 mb-4 ">
            Customization
          </h2>
          <p className="font-poppins font-normal text-text-1 lg:text-[24px] sm:text-[18px] text-[12px] lg:leading-[37px] sm:leading-[30.8px] leading-[20px] sm:max-w-[693px] max-w-[500px]">
            Our LMS is designed with flexibility at its core, allowing you to
            tailor it to your exact needs. Whether you want to add specific
            features to enhance functionality or remove elements that don't fit
            your workflow, our platform adapts seamlessly. With a fully
            customizable interface, you can create a learning environment that
            aligns perfectly with your organization's goals, ensuring a
            personalized and optimized user experience for both administrators
            and learners.
          </p>
        </div>
        <div className={`${layout.sectionImg} max-w-[624.82px] h-auto`}>
          <img
            src={customImg}
            alt="Laptop"
            width={624.82}
            height={343}
            className="w-full h-auto"
          />
        </div>
      </div>
      <CustomAnime />
    </section>
  );
};

export default Customization;
