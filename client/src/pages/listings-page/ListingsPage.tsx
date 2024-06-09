import SearchBar from "./SearchBar";
import Listings from "./Listings";
function ListingsPage() {
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center">
        <SearchBar />
        <Listings />
      </div>
    </div>
  );
}

export default ListingsPage;
