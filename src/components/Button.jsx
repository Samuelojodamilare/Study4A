import { useEffect } from "react";

const Button = ({ className, children, onClick, spanClass }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.body.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(link);
    };
  }, []);

  const handleCalendly = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/oodeyinka-study4as/60min",
    });
    return false;
  };
  return (
    <button
      onClick={handleCalendly}
      className={`text-white text-sm sm:text-xl font-poppins font-medium px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-md cursor-pointer ${className}`}>
      <span className={spanClass}>{children}</span>{" "}
    </button>
  );
};

export default Button;
