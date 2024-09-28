import { S4ALogo } from "../assets";
import { footer, socials } from "../constant";
import styles from "../style";

const Footer = () => {
  return (
    <section className={` w-full bg-bg-ft`}>
      {/* Top section */}
      <div className={`${styles.paddingY} border-b`}>
        <div
          className={`${styles.paddingX} flex sm:flex-row flex-col justify-evenly items-center sm:items-start `}>
          {/* first column */}
          <div className="flex flex-col justify-center items-center mb-6 sm:mb-0">
            <div className="max-w-[116px] h-[29px] pb-14 border-b">
              <img
                src={S4ALogo}
                width={116}
                height={29}
                alt="study4A logo"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="font-merriweather font-normal text-[14px] leading-[28px] text-white pt-4">
              Data-driven, cohort-first learning
            </p>
          </div>
          {/* second column */}
          <div className="flex flex-col justify-center items-center mb-6 sm:mb-0">
            <h3 className="font-lato font-bold text-[14px] leading-[16px] text-white mb-4">
              CONTACT
            </h3>
            {footer.map((items) => (
              <div key={items.id} className="flex items-center mb-2">
                <img
                  src={items.iconUrl}
                  alt={items.text}
                  className="w-[20px] h-[20px] mr-4"
                />
                <p
                  className={`font-lato font-normal text-[14px] leading-[21px] text-white`}>
                  {items.text}
                </p>
              </div>
            ))}
          </div>
          {/* Third column */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-3">
              {socials.map((items) => (
                <a
                  key={items.id}
                  href={items.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-[25.2px] h-[25.2px] mr-3">
                  <img src={items.iconUrl} alt={items.title} />
                </a>
              ))}
            </div>
            <p className="font-lato font-normal text-[14px] leading-[21px] text-white">
              Copyright © 2024 | All right reserved
            </p>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="flex justify-center items-center py-6">
        <p className="font-lato font-normal text-[14px] leading-[21px] text-white mr-2">
          A Product of Refined Solutions Systems
        </p>
        <div className="max-w-[116px] h-[29px]">
          <img
            src={S4ALogo}
            alt="S4A logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
