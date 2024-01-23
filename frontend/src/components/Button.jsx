import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex  absolute top-2 right-6 text-center mt-4">
      <Link
        to="/blockchain"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-cyan-700 to-cyan-800 text-white px-8 py-2 rounded-md"
      >
        <span> BlockChain UI</span>
        <span>
          <FaArrowAltCircleRight />
        </span>
      </Link>
    </div>
  );
};
export default Button;
