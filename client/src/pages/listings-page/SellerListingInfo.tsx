import sellerProfile from "../../assets/images/seller-profile.png";
function SellerListingInfo() {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <img src={sellerProfile} alt="seller-profile" className="w-10 h-10" />
      </div>
      <div className="flex flex-col ">
        <p className="font-bold">Listed by Seller</p>
        <p className="text-sm">1 year of listing</p>
      </div>
    </div>
  );
}

export default SellerListingInfo;
