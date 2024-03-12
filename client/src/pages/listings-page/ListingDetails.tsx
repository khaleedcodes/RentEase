import { useParams } from "react-router-dom";
import {listings} from "../../data/listingsdata";

function ListingDetails() {
  let { id } = useParams();
  id = id ? id : "0";

  const {
    mainListingImageSrc,
    otherImages,
    listingLocation,
    listingPrice,
    NoOfBed,
    NoOfBath,
  } = listings[Number(id)];

  const [image1, image2, image3, image4] = otherImages;
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center border border-red-500">
        <div className="w-full border border-red-500 flex flex-col gap-4">
          <h1 className="text-3xl">{listingLocation}</h1>
          <div className="flex gap-2 border border-red-400 justify-center">
            <div className="">
              <img src={mainListingImageSrc} alt="FrontView" width="500" />
            </div>

            <div className="">
              <div className="grid grid-cols-2 gap-2">
                <img src={image1} alt="Interior1" width="240" />
                <img src={image2} alt="Interior2" width="240" />
                <img src={image3} alt="Interior3" width="240" />
                <img src={image4} alt="Interior4" width="240" />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p>
                {NoOfBed} beds · {NoOfBath} baths
              </p>
            </div>

            <div>
              <h2>{listingPrice} CAD</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
