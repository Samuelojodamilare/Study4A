import { contact } from "../constant";
import styles from "../style";

const Contact = () => {
  return (
    <section className={`${styles.paddingX} w-full relative z-[2]`}>
      <div className={`${styles.paddingY} flex flex-col`}>
        <div className="text-center mb-10">
          <h2 className="font-poppins font-bold lg:text-[50px] md:text-[48px] text-[30px] text-text-3 leading-[35px] mb-4">
            Contact Us
          </h2>
          <p className="font-poppins font-normal sm:text-[20px] text-[14px] text-text-2 sm:leading-[26px] leading-[20px] max-w-[727px] mx-auto">
            Your satisfaction and success with Study4as are our top priorities.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center md:items-start items-center w-full mt-10 ">
          {contact.map((items) => (
            <div
              key={items.id}
              className="relative flex flex-col text-center items-center border m-3 rounded-lg bg-bg-ct p-6 w-full sm:w-[30%] max-w-[350px] transition-transform duration-300 hover:scale-105 hover:shadow-lg mb-6 sm:mb-0"
              style={{ minHeight: "250px" }}>
              <div className=" transform translate-y-[-85%] flex justify-center items-center p-4 bg-primary rounded-full lg:w-[70px] w-[60px] lg:h-[70px] h-[60px]">
                <div className="max-w-[50px] h-auto">
                  <img
                    src={items.iconUrl}
                    alt={items.text}
                    width={50}
                    height={50}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-poppins font-medium lg:text-[26px] sm:text-[20px] leading-[30px] text-text-3 lg:leading-[35px] mb-3">
                  {items.text}
                </h3>
                {items.text === "Email Us" ? (
                  <a
                    href={`mailto: ${items.content}`}
                    className="font-poppins font-medium lg:text-[20px] md:text-[14px] text-[16px] lg:leading-[30px] leading-[25px] text-[#0067A6] hover:underline">
                    {items.content}
                  </a>
                ) : Array.isArray(items.content) ? (
                  items.content.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel: ${phone}`}
                      className="font-poppins block font-medium lg:text-[18px] md:text-[14px] text-[16px] lg:leading-[30px] leading-[20px] text-[#0067A6] hover:underline max-w-[175px]">
                      {phone}
                    </a>
                  ))
                ) : (
                  <p className="font-poppins font-medium lg:text-[18px] md:text-[14px] text-[16px] lg:leading-[30px] leading-[25px] text-text-2 max-w-[306px]">
                    {items.content}{" "}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
