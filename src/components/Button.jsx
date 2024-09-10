const Button = ({ className, children, onClick, spanClass }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white text-sm sm:text-xl font-poppins font-medium px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-md cursor-pointer ${className}`}>
      <span className={spanClass}>{children}</span>{" "}
    </button>
  );
};

export default Button;
