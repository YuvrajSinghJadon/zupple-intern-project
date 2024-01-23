import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className=" sm:absolute sm:top-2 md:top-4 lg:top-6 right-6 text-center mt-4">
      <Link
        to="/blockchain"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-cyan-700 to-cyan-800 text-white px-6 md:px-8 py-2 rounded-md text-sm md:text-base lg:text-lg"
      >
        <span className="hidden md:inline">BlockChain UI</span>
        <span className="inline md:hidden">Blockchain</span>
        <span>
          <FaArrowAltCircleRight />
        </span>
      </Link>
    </div>
  );
};

export default Button;
