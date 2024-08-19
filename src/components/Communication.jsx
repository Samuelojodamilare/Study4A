import { communication } from "../constant";
import styles from "../style";
import CommunicationCard from "./design/CommunicationCard";

const Communication = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`flex flex-col ${styles.paddingY}`}>
        <div>
          <h3 className={`${styles.heading3} sm:mb-6 mb-0`}>
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
      </div>
    </section>
  );
};

export default Communication;
