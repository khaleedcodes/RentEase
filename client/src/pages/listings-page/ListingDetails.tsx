import { useParams } from "react-router-dom";
import { listings } from "../../data/listingsdata";
import SellerListingInfo from "./SellerListingInfo";

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
      <div className=" p-3 max-w-screen-xl w-full flex  flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-8 max-w-5xl ">
          <h1 className="text-3xl font-bold">{listingLocation}</h1>
          <div className="flex gap-2 justify-center rounded-2xl overflow-hidden h-[400px]">
            <div className="w-1/2 h-full">
              <img
                src={mainListingImageSrc}
                alt="FrontView"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 w-1/2 justify-center h-full">
              <div className="flex gap-2 h-1/2 w-full">
                <img
                  src={image1}
                  alt="Interior1"
                  className="w-1/2 h-full object-cover"
                />
                <img
                  src={image2}
                  alt="Interior2"
                  className="w-1/2 h-full object-cover"
                />
              </div>
              <div className="flex gap-2 h-1/2 w-full">
                <img
                  src={image3}
                  alt="Interior3"
                  className="w-1/2 h-full object-cover"
                />
                <img
                  src={image4}
                  alt="Interior4"
                  className="w-1/2 h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="font-bold">
                {NoOfBed} bed(s) · {NoOfBath} bath(s)
              </p>
            </div>
            <div>
              <h2 className="font-bold">{listingPrice} CAD</h2>
            </div>
          </div>
        </div>
        <div className="max-w-5xl gap-2 flex flex-col bg-[#F7F7F7] p-4 rounded-xl">
          <h2 className="font-bold">Description: </h2>
          <p>
            Modern 2-bed apartment with stunning city views. Open-concept living
            area, sleek kitchen, and balcony. Master bedroom with ensuite,
            second bedroom ideal for guests or office. In-unit laundry, secure
            parking, fitness center access. Close to shops and dining. Key
            Features: Modern design City views Open-concept layout Ensuite
            master bedroom Second bedroom or office In-unit laundry Secure
            parking Fitness center access Near shops and dining Location.
          </p>
        </div>
        <div className="w-full flex justify-between max-w-5xl">
          <SellerListingInfo />
          <button
            className="bg-first-primary p-3 text-white rounded-md"
            onClick={() => {
              alert("seller has been notified of your interest");
            }}
          >
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
