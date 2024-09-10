import { caret, S4ALogo } from "../assets";
import styles from "../style";

const Demo = ({ onClose }) => {
  return (
    <section
      id="demo"
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 p-6"
      onClick={onClose}>
      <div
        className={`relative w-full max-w-lg sm:max-w-4xl lg:max-w-4xl flex flex-col sm:flex-row bg-Demo-gradient rounded-xl overflow-hidden py-4 sm:py-7 lg:py-10 max-h-full sm:max-h-[100vh]`}
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-[2%] right-[3%] text-white text-[20px] sm:text-[24px] hover:text-gray-400 transition duration-300 ease-in-out"
          onClick={onClose}>
          &times;
        </button>
        <div className="flex flex-col sm:justify-between justify-center items-center w-full sm:w-1/2 lg:p-8 sm:p-5 px-4 py-2 text-white">
          <div>
            <img
              src={S4ALogo}
              alt="S4A logo"
              className="mb-2 lg:w-40 sm:w-32 w-28"
            />
            <h2 className="font-poppins font-semibold lg:text-[75px] sm:text-[50px] text-[30px] text-start leading-[35px] lg:leading-[90px] sm:leading-[50px] sm:mb-4 mb-1 max-w-[360px]">
              Schedule a Demo
            </h2>
            <p className="font-poppins font-normal lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[23.46px] leading-[18px] sm:mb-6 mb-0">
              Let’s get some basic information and then we’ll get you on the
              calendar
            </p>
          </div>

          <div className="sm:flex sm:justify-center w-full hidden max-w-[490px]">
            <p className="font-lato font-normal lg:text-[16px] text-[12px] lg:leading-[21.11px] leading-[18px]">
              By clicking the “Submit Information” Button I confirm, that I have
              read and agree to the{" "}
              <a href="#" className="underline hover:no-underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 lg:p-7 sm:p-5 py-2 px-4">
          <form action="" className="sm:space-y-3 space-y-2">
            <input
              type="text"
              placeholder="Full name*"
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:outline-none"
            />
            <select
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:text-white focus:outline-none appearance-none"
              style={{
                backgroundImage: `url(${caret})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 20px center",

                backgroundSize: "16px",
              }}>
              <option value="disabled selected">Job Role*</option>
              <option value="Administrator">Administrator</option>
              <option value="Principal">Principal</option>
              <option value="Secretary">Secretary</option>
              <option value="Other">Other</option>
            </select>
            <select
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:text-white focus:outline-none appearance-none"
              style={{
                backgroundImage: `url(${caret})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 20px center",
                backgroundSize: "16px",
              }}>
              <option value="disabled selected">Organization Type*</option>
              <option value="Corporate">Corporate</option>
              <option value="Government">Government</option>
              <option value="Higher Education">Higher Education</option>
              <option value="K-12">K-12</option>
              <option value="Not-for-Profit">Not-for-Profit</option>
              <option value="Training Organization">
                Training Organization
              </option>
              <option value="Marketplace">Marketplace</option>
            </select>
            <select
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:text-white focus:outline-none appearance-none"
              style={{
                backgroundImage: `url(${caret})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 20px center",
                backgroundSize: "16px",
              }}>
              <option value="disabled selected">
                Which Best Describes your Project?*
              </option>
              <option value="A Startup">A Startup</option>
              <option value="An Existing Organization">
                An Existing Organization
              </option>
            </select>
            <select
              className="w-full lg:p-4 sm:p-3 p-2 border font-normal font-poppins lg:text-[16px] sm:text-[14px] text-[12px] sm:leading-[21.11px] leading-4 border-bd-3/30 bg-bg-form/20 placeholder-white text-white rounded-md focus:bg-primary/70 focus:text-white focus:outline-none appearance-none"
              style={{
                backgroundImage: `url(${caret})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 20px center",
                backgroundSize: "16px",
              }}>
              <option value="disabled selected">
                Where Did you Get to Know About Us?
              </option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Other">Other</option>
            </select>
            <button
              type="submit"
              className="w-full lg:py-4 sm:py-3 py-1.5 bg-white text-primary lg:text-[20px] sm:text-[18px] text-[14px] font-medium font-poppins sm:leading-[28.15px] leading-[20px] rounded-[10px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-primary/40 hover:text-white hover:border hover:border-white/20">
              Submit Information
            </button>
          </form>
        </div>
        <div className="flex justify-center px-4 w-full sm:hidden max-w-[490px]">
          <p className="font-lato font-normal text-white text-[12px] leading-[18px]">
            By clicking the “Submit Information” Button I confirm, that I have
            read and agree to the{" "}
            <a href="#" className="underline hover:no-underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
