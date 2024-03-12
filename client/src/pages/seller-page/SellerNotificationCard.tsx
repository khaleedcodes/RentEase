import BellIcon from "../../assets/icons/BellIcon";
function SellerNotificationCard() {
  return (
    <div className="w-full flex items-center justify-center p-4 rounded-lg bg-[#E8F0FE]">
      <BellIcon />
      <p>0 Messages from potential clients</p>
    </div>
  );
}

export default SellerNotificationCard;
