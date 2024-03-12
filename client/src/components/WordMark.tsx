import { Link } from "react-router-dom";

function WordMark() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className="">
        <p className=" text-first-primary text-2xl font-bold">RentEase</p>
      </Link>
    </div>
  );
}

export default WordMark;
