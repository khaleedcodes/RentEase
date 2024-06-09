import SearchBar from "../listings-page/SearchBar";
import GuestListings from "./GuestListings";
function LandingPage() {
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center">
        <SearchBar />
        <GuestListings />
      </div>
    </div>
  );
}

export default LandingPage;
