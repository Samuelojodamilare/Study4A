import { check, managementImage } from "../assets";
import { management } from "../constant";
import styles, { layout } from "../style";

const Management = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse}`}>
          <div className="w-[600px] h-auto">
            <img
              src={managementImage}
              alt="management features image"
              width={733}
              height={496}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className={`${layout.sectionInfo}`}>
          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>Cohort First</h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Study4As equips educators with tools to effortlessly conduct
            classroom lessons, ensuring a smooth and uninterrupted delivery of
            instruction
          </p>
          <h3 className="font-poppins font-semibold sm:text-[24px] text-[18px] text-text-2 leading-[35px] sm:mb-6 mb-4">
            Management Feature List:
          </h3>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {management.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h4 className={`${styles.heading6}`}>{items} </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Management;
