const CommunicationCard = ({ title, text, icon }) => {
  return (
    <div className="flex flex-col items-start border border-bd-1 shadow-md rounded-lg p-6 m-2 sm:w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
      <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
        <img src={icon} alt={title} />
      </div>
      <h3 className="font-poppins text-[16px] font-semibold leading-[35px] text-text-2 ">
        {title}
      </h3>
      <p className="font-poppins font-medium text-[12px] leading-[15.5px] text-text-1 max-w-[286px] ">
        {text}
      </p>
    </div>
  );
};

export default CommunicationCard;
