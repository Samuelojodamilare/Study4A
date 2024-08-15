import { check, managementImage } from "../assets";
import { management } from "../constant";

const Management = () => {
  return (
    <section className="w-full mt-3">
      <div className="flex flex-col-reverse lg:flex-row items-center sm:items-start px-10 sm:px-16 py-16">
        <div className="w-1/2 max-w-[733px] flex-1 flex justify-center py-12 mb-6 lg:mb-0">
          <img
            src={managementImage}
            alt=""
            width={733}
            height={496}
            className="w-full h-auto max-w-[733px]"
          />{" "}
        </div>

        <div className="w-1/2 flex flex-col items-start">
          <div className="bg-secondary rounded-full sm:px-4 px-2 sm:py-2 py-1 sm:mb-7 mb-4">
            <h2 className="font-poppins text-primary font-medium sm:text-[20px] text-[14px] leading-[35px]">
              MANAGEMENT
            </h2>
          </div>

          <h3 className="text-[20px] sm:text-[48px] leading-[40px] font-poppins text-text-3 font-bold sm:mb-6 mb-0">
            Classroom Management{" "}
          </h3>

          <p className="font-poppins font-normal sm:text-[24px] text-[12px] sm:leading-[37px] leading-[20px] text-text-1 sm:max-w-[759px] max-w-[316px] sm:mb-6 mb-4">
            Study4As equips educators with tools to effortlessly conduct
            classroom lessons, ensuring a smooth and uninterrupted delivery of
            instruction
          </p>
          <h3 className="font-poppins font-semibold text-[24px] text-text-2 leading-[35px] sm:mb-6 mb-4">
            Management Feature List:
          </h3>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
            {management.map((items, index) => (
              <li key={index} className="flex items-center mb-2">
                <img src={check} alt="check" width={31} height={31} />
                <h6 className="font-poppins font-medium text-[18px] leading-9 text-text-1 ml-6">
                  {items}{" "}
                </h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Management;
