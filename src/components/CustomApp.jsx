import { app } from "../constant";
import styles from "../style";

const App = () => {
  return (
    <section className={`${styles.paddingX} w-full`}>
      <div className={`flex flex-col items-center ${styles.paddingY}`}>
        <h2 className="font-poppins font-extrabold sm:text-[52px] text-[24px] text-text-3 leading-[35px] sm:mb-5 mb-3">
          Custom Web/Mobile App
        </h2>
        <p className="font-lato font-normal sm:text-[20px] text-[18px] text-text-2 sm:leading-[30px] leading-[24px] max-w-[727px] text-center sm:mb-4 mb-2">
          Institution gets exclusive application deployed just for them. They
          will enjoy customized experience which they can brand to their own
          unique needs
        </p>
      </div>

      <div className="flex flex-wrap justify-center sm:mb-6 mb-4">
        {app.map((items) => (
          <div
            key={items.id}
            className="flex flex-col items-center border border-bd-1 shadow-md rounded-lg p-6 m-2 sm:w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
            <div className="max-w-[143px] h-[114.5px]">
              <img src={items.iconUrl} alt={items.title} />
            </div>
            <h3 className="font-poppins text-[16px] font-semibold leading-[35px] text-text-2 ">
              {items.title}{" "}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
