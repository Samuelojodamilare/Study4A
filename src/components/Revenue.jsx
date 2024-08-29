import { revenueImage } from "../assets";
import { revenue } from "../constant";
import styles, { layout } from "../style";

const Revenue = () => {
  return (
    <section className={`${styles.paddingX} w-full relative overflow-visible`}>
      <div className="flex flex-col items-center w-full relative z-[2]">
        <h3
          className={`font-merriweather font-medium lg:text-[50px] md:text-[48px] text-[20px] text-text-3 leading-[35px]`}>
          Revenue Generation Mode
        </h3>
        <div className={`${layout.sectionReverse}`}>
          <div className={`${layout.sectionImgReverse} max-w-[557px]`}>
            <img src={revenueImage} alt="" width={557} height={598} />
          </div>
          <div className={`${layout.sectionInfo} ml-10`}>
            {revenue.map((items) => (
              <div
                key={items.id}
                className={`flex items-center p-4 shadow-md rounded-lg w-full bg-white border border-bd-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
                  items.id < 3 ? "mb-4" : ""
                }`}>
                <div className="bg-secondary w-[65px] h-[65px] p-2 rounded-full flex items-center justify-center mr-4">
                  <img src={items.iconUrl} alt={items.title} />
                </div>
                <p className="font-poppins font-medium text-text-3 sm:text-[18px] text-[14px] sm:leading-[23.46px] leading-[16.42px] ">
                  {items.title}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden absolute z-[-1] inset-0 lg:flex justify-end items-center overflow-visible">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute w-[900px] h-[900px] xl:w-[900px] border border-primary rounded-full xl:top-[-15%] top-[-15%] xl:right-[-40%] right-[-65%] opacity-30"></div>
          <div className="absolute w-[800px] h-[800px] xl:w-[1000px] xl:h-[1000px] border border-primary rounded-full xl:top-[-7%] top-0 xl:right-[-30%] right-[-35%] opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
