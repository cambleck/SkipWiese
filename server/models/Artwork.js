const mongoose = require("mongoose");
const { Schema } = mongoose;

const artworkSchema = new Schema({
  title: String,
  type: String,
  size: String,
  price: String,
  imageUrl: String,
});

mongoose.model("Artwork", artworkSchema);
