const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  heading2:
    "font-poppins text-primary font-medium sm:text-[20px] text-[14px] leading-[35px]",
  heading3:
    "font-poppins font-bold sm:text-[48px] text-[20px] text-text-3 sm:leading-[50px] leading-[30px] w-full",
  heading6:
    "font-poppins font-medium sm:text-[18px] text-[14px] leading-9 text-text-1 ml-4",
  paragraph:
    "font-poppins font-normal text-text-1 sm:text-[18px] text-[12px] sm:leading-[30.8px] leading-[20px] sm:max-w-[759px] max-w-[316px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-10",
  padding: "sm:px-16 px-6 sm:py-12 py-6",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex lg:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} lg:mr-10 mr-0 lg:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} lg:ml-10 ml-0 lg:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
