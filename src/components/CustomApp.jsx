import { securityBG } from "../assets";
import { app } from "../constant";
import styles from "../style";

const App = () => {
  return (
    <section
      className={`${styles.paddingX} w-full md:bg-cover md:bg-center md:bg-no-repeat bg-none relative z-[1]`}
      style={{ backgroundImage: `url(${securityBG})` }}>
      <div className={`${styles.paddingY}`}>
        <div className={`flex flex-col items-center mb-2`}>
          <h2 className="font-poppins text-center font-bold lg:text-[52px] md:text-[48px] text-[20px] text-white sm:leading-[50px] md:leading-[55px] leading-[30px] sm:mb-5 mb-3">
            Custom Web/Mobile App/AI Deployment
          </h2>
          <p className="font-lato font-normal sm:text-[18px] text-[12px] text-white sm:leading-[30px] leading-[20px] sm:max-w-[816px] max-w-[400px] text-center sm:mb-4 mb-2">
            Built for scalability and security, our battle-tested technology allows you to effortlessly scale your learning. Provide learners with secure, on-the-go access to your training services anytime, anywhere. Enjoy a customizable experience that can be tailored and branded to meet unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:mb-6 mb-4">
          {app.map((items) => (
            <div
              key={items.id}
              className="flex flex-col justify-center items-center bg-white/25 border border-bd-1 shadow-md rounded-lg p-6 m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
              <div className="flex items-center max-w-[150px] h-[114.5px] mb-2">
                <img
                  src={items.iconUrl}
                  width={150}
                  height={114}
                  alt={items.title}
                />
              </div>
              <h3 className="font-poppins text-[16px] text-white font-semibold leading-[30px]">
                {items.title}{" "}
              </h3>
              {items.id === 0 ? (
                <p className="font-poppins text-[14px] text-white font-semibold leading-[35px]">
                  i.e IOS and Android
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
