import { operationImage, check } from "../assets";
import { operation } from "../constant";
import styles, { layout } from "../style";

const Operation = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse}`}>
          <div className="w-[483px] h-auto">
            <img
              src={operationImage}
              alt="lady sitting with a laptop,servicing"
              width={483}
              height={482}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className={`${layout.sectionInfo}`}>

          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>
            Courses Service Mode
          </h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Courses can be offered internally by invitation, made available to the public through the marketplace for subscription, or operate in both capacities.
          </p>

          <h3 className="font-poppins font-semibold sm:text-[24px] text-[18px] text-text-2 leading-[35px] sm:mb-6 mb-4">
            Courses Service Mode:
          </h3>

          <ul>
            {operation.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h4 className={`${styles.heading6}`}>{item} </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Operation;
