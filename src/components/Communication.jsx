import { communication } from "../constant";
import styles from "../style";
import CommunicationCard from "./design/CommunicationCard";
import GradientLight from "./design/GradientLight";

const Communication = () => {
  return (
    <section className={`relative ${styles.paddingX} w-full`}>
      <div className={`relative z-10 flex flex-col ${styles.paddingY}`}>
        <div>
          <h3 className={`${styles.heading3} sm:mb-6 mb-2`}>
            Communication System
          </h3>
          <p className={`${styles.paragraph} sm:mb-6 mb-4`}>
            With Study4As, schools get comprehensive communication system,
            facilitating ideal interaction and collaboration with the virtual
            learning environment
          </p>
        </div>
        <div className="flex flex-wrap justify-start my-6">
          {communication.map((card) => (
            <CommunicationCard key={card.id} {...card} />
          ))}
        </div>
        <GradientLight />
      </div>
    </section>
  );
};

export default Communication;
