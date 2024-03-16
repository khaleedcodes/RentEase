import axios from "axios";
async function getListings() {
  try {
    const listings = await axios.get("http://localhost:3001/getListings");
    // for (const listing of listings.data) {
    //   console.log(listing._id);
    // }
    return listings.data;
  } catch (err) {
    console.log(err);
  }
}
export { getListings };
