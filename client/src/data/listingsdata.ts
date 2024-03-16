import axios from "axios";
async function getListings() {
  try {
    const listings = await axios.get("http://localhost:3001/getListings");
    return listings.data;
  } catch (err) {
    console.log(err);
  }
}
export { getListings };
