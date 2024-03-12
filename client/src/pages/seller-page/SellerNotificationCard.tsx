import { Link } from "react-router-dom";
import BellIcon from "../../assets/icons/BellIcon";
function SellerNotificationCard() {
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-center p-4 rounded-lg bg-[#E8F0FE]">
      <div className="flex">
        <BellIcon />
        <p>1 Message(s) from potential clients</p>
      </div>
      <div>
        view notification{" "}
        <Link to="/interests" className="underline text-first-primary">
          here
        </Link>
      </div>
    </div>
  );
}

export default SellerNotificationCard;
