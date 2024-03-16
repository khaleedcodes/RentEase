import Listing from "../listings-page/Listing";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListings } from "../../data/listingsdata";

function GuestListings() {
  const [guestListings, setGuestListings] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getListings();
      setGuestListings(data);
    };
    getData();
  }, []);
  return (
    <div className="flex gap-8 p-4 flex-wrap justify-center">
      {guestListings.map(
        ({
          _id,
          mainListingImageSrc,
          otherImages,
          listingLocation,
          listingPrice,
          NoOfBed,
          NoOfBath,
        }) => {
          console.log(_id);
          return (
            <Link
              to={`/listingdetails/${_id}`}
              key={_id}
              className="rounded-xl flex flex-col gap-3 basis-96"
            >
              <Listing
                _id={_id}
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

export default GuestListings;
