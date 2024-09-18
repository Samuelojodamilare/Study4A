import { modalLeft, modalRight } from "../../assets";
const ModalGradient = () => {
  return (
    <div>
      <div className="flex justify-center items-center absolute sm:top-[25%] top-[22%] lg:left-[30%] left-[30%] lg:max-w-[50px] sm:max-w-[45px] max-w-[30px] h-auto pointer-events-none opacity-70">
        <img
          src={modalLeft}
          height={50}
          width={50}
          alt="background gradient"
          className="w-full h-auto"
        />
      </div>
      <div className="flex justify-center items-center absolute sm:top-[25%] top-[22%] lg:right-[32%] right-[30%] lg:max-w-[50px] sm:max-w-[45px] max-w-[30px] h-auto pointer-events-none opacity-70">
        <img
          src={modalRight}
          height={50}
          width={50}
          alt="background gradient"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ModalGradient;
