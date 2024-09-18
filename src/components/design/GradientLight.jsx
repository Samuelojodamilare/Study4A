import { gradient } from "../../assets";

const GradientLight = ({ className }) => {
  return (
    <div
      className={`flex justify-center items-center absolute right-[20%] top-[1%] max-w-[541px] h-full opacity-60 mix-blend-color-dodge pointer-events-none ${className}`}>
      <img src={`${gradient}`} width={541} height={541} alt="gradient" />
    </div>
  );
};

export default GradientLight;
