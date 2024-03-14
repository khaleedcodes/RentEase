import SearchIcon from "../../assets/icons/SearchIcon";
import FilterIcon from "../../assets/icons/FilterIcon";

function SearchBar() {
  return (
    <div className=" flex gap-4 p-4 items-center border rounded-3xl">
      <SearchIcon />
      <form className="grow">
        <input
          placeholder="Search for a city"
          className="w-full min-h-8 border-none outline-none"
        ></input>
      </form>
      <FilterIcon />
    </div>
  );
}

export default SearchBar;
