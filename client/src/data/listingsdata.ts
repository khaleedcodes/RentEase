import axios from "axios";
async function getListings() {
  try {
    const listings = await axios.get("http://localhost:3001/getListings");
    console.log(listings);
    return listings.data;
  } catch (err) {
    console.log(err);
  }
}
export { getListings };
