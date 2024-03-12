import Listing from "./Listing";
import { Link } from "react-router-dom";
import {listings} from "../../data/listingsdata";

function Listings() {
  return (
    <div className="flex gap-8 p-4 flex-wrap justify-center">
      {listings.map(
        (
          {
            mainListingImageSrc,
            otherImages,
            listingLocation,
            listingPrice,
            NoOfBed,
            NoOfBath,
          },
          index
        ) => {
          return (
            <Link
              to={`/listingdetails/${index}`}
              key={index}
              className="rounded-xl flex flex-col gap-3 basis-96"
            >
              <Listing
                mainListingImageSrc={mainListingImageSrc}
                otherImages={otherImages}
                listingLocation={listingLocation}
                listingPrice={listingPrice}
                NoOfBed={NoOfBed}
                NoOfBath={NoOfBath}
              />
            </Link>
          );
        }
      )}
    </div>
  );
}

export default Listings;
