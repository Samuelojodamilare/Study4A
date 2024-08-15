import { S4ALogo } from "../assets";
import Button from "./Button";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-primary">
      <div className="flex items-center justify-between mx-16 px-1 sm:px-2 py-6">
        <div>
          <a href="#">
            <img src={S4ALogo} alt="S4A" width={145} height={40} />
          </a>
        </div>
        <div className="hidden sm:flex justify-between items-center w-64">
          <a
            href="#"
            className="text-white/50 p-1 hover:text-white transition-colors text-xl leading-7 font-poppins">
            Sign in
          </a>
          <Button href="#" className="border transition hover:border-white/50">
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
