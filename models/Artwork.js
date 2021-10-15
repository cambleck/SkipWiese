const mongoose = require("mongoose");
const { Schema } = mongoose;

const artworkSchema = new Schema({
  title: String,
  urlString: String,
  type: String,
  typeLabel: String,
  height: String,
  width: String,
  description: String,
  saleDescription: String,
  imageUrl: String,
  isFeatured: Boolean,
  price: Number,
});

mongoose.model("Artwork", artworkSchema);
