import { assistanceimage } from "../assets";
import { assistance } from "../constant";
import styles, { layout } from "../style";
import { check } from "../assets";

const Assistant = () => {
  return (
    <section className={`${styles.paddingX} w-full relative overflow-visible `}>
      <div className={`${layout.sectionReverse} items-center relative z-[2]`}>
        <div className={`${layout.sectionImgReverse} max-w-[496px]`}>
          <img
            src={assistanceimage}
            alt="A man with a laptop and a robot with a laptop"
            width={496}
            height={259}
            className="w-full h-auto"
          />
        </div>

        <div className={`${layout.sectionInfo} ml-0 sm:ml-10`}>
          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>
            AI Teaching Assistant
          </h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Benefit from intelligent support in various tasks optimizing the
            learning journey for both educators and students
          </p>

          <h3 className="font-poppins font-semibold sm:text-[24px] text-[18px] text-text-2 leading-[35px] sm:mb-6 mb-4">
            {" "}
            Feature List:
          </h3>

          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {assistance.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" height={31} width={31} />
                <h4 className={`${styles.heading6}`}>{items} </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden absolute z-[-1] inset-0 lg:flex justify-start items-end overflow-visible">
        <div className="relative w-[700px] h-[700px]">
          <div className="absolute w-[700px] h-[700px] xl:w-[800px] border border-primary rounded-full xl:bottom-[-35%] bottom-[-7%] xl:left-[-60%] left-[-60%] opacity-30"></div>
          <div className="absolute w-[700px] h-[700px] xl:w-[800px] xl:h-[800px] border border-primary rounded-full xl:bottom-[-32%] bottom-[-2%] xl:left-[-32%] left-[-40%] opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
