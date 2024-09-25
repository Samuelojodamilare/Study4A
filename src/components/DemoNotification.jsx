import { useEffect } from "react";
import { modalImg } from "../assets";
import ModalGradient from "./design/ModalGradient";

const DemoNotification = ({ onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="relative bg-bg-not rounded-lg lg:p-8 sm:p-6 p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-[3%] right-[5%] text-text-3 text-[20px] sm:text-[24px] hover:text-gray-400 transition duration-300 ease-in-out"
          onClick={onClose}
          aria-label="Close notification modal">
          &times;
        </button>
        <div className="relative z-10 flex flex-col justify-center items-center lg:mx-4 mx-2">
          <div className="lg:max-w-[128px] sm:max-w-[100px] max-w-[70px] h-auto lg:mb-8 mb-6 ">
            <img
              src={modalImg}
              alt="send"
              width={128}
              height={128}
              className="w-full h-auto"
            />
          </div>
          <div className="lg:mb-6 mb-4 text-center">
            <h2 className="font-poppins font-semibold text-text-3 lg:text-[28px] sm:text-[20px] text-[16px] lg:leading-[32.44px] sm:leading-[28px] leading-[20px] lg:mb-4 mb-2">
              Submission Successful
            </h2>
            <p className="font-poppins font-medium text-text-3 lg:text-[20px] sm:text-[16px] text-[12px] lg:leading-[25.81px] sm:leading-[20px] leading-[16px] lg:max-w-[480px] sm:max-w-[400px] max-w-[280px] lg:mb-4 mb-2">
              Your information has been successfully submitted. Our
              representative will contact you{" "}
            </p>
          </div>

          <button
            className="bg-primary text-white lg:text-lg sm:text-[16px] text-[12px] font-semibold lg:py-3 py-2 lg:px-20 sm:px-16 px-12 rounded-md lg:my-6 sm:my-4 my-2 transition-transform duration-500 ease-in-out transform hover:scale-105"
            onClick={onClose}
            aria-label="Back to Home">
            Back to Home
          </button>
          <ModalGradient />
        </div>
      </div>
    </div>
  );
};

export default DemoNotification;
