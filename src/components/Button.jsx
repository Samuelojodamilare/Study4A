const Button = ({ className, children, href, spanClass }) => {
  return (
    <a href={href} className="inline-block">
      <button
        className={`text-white text-xl font-poppins font-medium px-4 py-2.5 rounded-md cursor-pointer ${className}`}>
        <span className={spanClass}>{children}</span>{" "}
      </button>
    </a>
  );
};

export default Button;
