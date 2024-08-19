import { operationImage, check } from "../assets";
import { operation } from "../constant";
import styles, { layout } from "../style";

const Operation = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`${layout.sectionReverse} ${styles.paddingY}`}>
        <div className={`${layout.sectionImgReverse}`}>
          <img
            src={operationImage}
            alt=""
            width={483}
            height={482}
            className="w-full h-auto"
          />
        </div>

        <div className={`${layout.sectionInfo}`}>
          <div className="bg-secondary rounded-full sm:px-4 px-2 sm:py-2 py-1 sm:mb-7 mb-4">
            <h2 className={`${styles.heading2}`}>OPERATION</h2>
          </div>

          <h3 className={`${styles.heading3} sm:mb-6 mb-0`}>
            Service Operation Mode
          </h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Operating in a versatile service mode, Study4as offers the
            flexibility of private, public and combined settings, based on
            specific needs and preferences
          </p>

          <h3 className="font-poppins font-semibold text-[24px] text-text-2 leading-[35px] sm:mb-6 mb-4">
            Operation Feature List:
          </h3>

          <ul>
            {operation.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h6 className={`${styles.heading6}`}>{item} </h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Operation;
