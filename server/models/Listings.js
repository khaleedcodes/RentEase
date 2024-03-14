const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  mainListingImageSrc: String,
  otherImages: [String],
  listingLocation: String,
  listingPrice: String,
  NoOfBed: Number,
  NoOfBath: Number,
});

const listingModel = mongoose.model("listings", listingSchema);
module.exports = listingModel;
