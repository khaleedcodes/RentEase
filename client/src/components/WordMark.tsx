import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
function WordMark() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="RentEase" className="w-[24px] h-[24px]" />
        <p className=" text-first-primary text-2xl font-bold">Rentease</p>
      </Link>
    </div>
  );
}

export default WordMark;
