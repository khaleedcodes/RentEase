import { ListingProp } from "../../types/types";
import BedIcon from "../../assets/icons/BedIcon";
import BathIcon from "../../assets/icons/BathIcon";
function Listing({
  mainListingImageSrc,
  listingLocation,
  listingPrice,
  NoOfBed,
  NoOfBath,
}: ListingProp) {
  return (
    <>
      <div className="h-[254px]">
        <img
          className="rounded-tl-xl rounded-xl w-full h-full object-cover"
          src={mainListingImageSrc}
        />
      </div>
      <div className=" flex flex-col gap-1">
        <div>
          <p className="font-bold">{listingLocation}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex gap-1">
              <BedIcon />
              <p>{NoOfBed}</p>
            </div>
            <div className="flex gap-1">
              <BathIcon />
              <p>{NoOfBath}</p>
            </div>
          </div>
          <div>
            <p className="font-bold">{listingPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
