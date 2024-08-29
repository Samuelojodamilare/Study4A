import { check, resultImage } from "../assets";
import { result } from "../constant";
import styles, { layout } from "../style";

const Result = () => {
  return (
    <section className={`${styles.paddingX} w-full bg-bg-br relative z-[1]`}>
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <div className="bg-secondary rounded-full sm:px-4 px-2 sm:py-2 py-1 sm:mb-7 mb-4">
            <h2 className={`${styles.heading2}`}>RESULT</h2>
          </div>

          <h3 className={`${styles.heading3} sm:mb-6 mb-0`}>
            Grading and Feedback
          </h3>

          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            Simplify graidng process and provide valuable, constructive feedback
            with our efficient tools which improves the overall learning
            experience
          </p>

          <h3 className="font-poppins font-semibold text-[24px] text-text-2 leading-[35px] sm:mb-6 mb-4 ">
            Result Feature List:
          </h3>

          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {result.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h6 className={`${styles.heading6}`}>{items}</h6>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${layout.sectionImg} max-w-[501px]`}>
          <img src={resultImage} alt="laptop" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Result;
