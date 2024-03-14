import Listing from "../listings-page/Listing";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListingType } from "../../types/types";
import { getListings } from "../../data/listingsdata";
function Listings() {
  const [listings, setListings] = useState<ListingType[]>([]);
  useEffect(() => {
    const geData = async () => {
      const listings = await getListings();
      setListings(listings);
    };
    geData();
  }, []);
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
