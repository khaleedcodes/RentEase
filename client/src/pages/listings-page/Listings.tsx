import Listing from "./Listing";
import { Link } from "react-router-dom";
import { getListings } from "../../data/listingsdata";
import { ListingType } from "../../types/types";
import { useState, useEffect } from "react";
// import axios from "axios";

function Listings() {
  const [listings, setListings] = useState<ListingType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getListings();
      setListings(data);
    };
    getData();
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
          console.log(index);
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
