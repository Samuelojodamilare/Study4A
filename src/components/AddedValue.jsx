import { check, valueImg } from "../assets";
import { addedValue } from "../constant";
import styles, { layout } from "../style";

const AddedValue = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>
            Added Value and Features
          </h3>
          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Tools crafted to foster dialogue among students and between them and
            their instructors, mirroring the interactive nature of traditional
            classroom learning.
          </p>
          <h3 className="font-poppins font-semibold text-[18px] sm:text-[24px] text-text-2 leading-[35px] sm:mb-6 mb-4 ">
            Added Feature List:
          </h3>

          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {addedValue.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h4 className={`${styles.heading6}`}>{items}</h4>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${layout.sectionImg} max-w-[500px] h-auto`}>
          <img
            src={valueImg}
            alt="laptop, table and pencil"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AddedValue;
