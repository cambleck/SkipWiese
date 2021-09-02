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
  imageUrl: String,
  isFeatured: Boolean,
});

mongoose.model("Artwork", artworkSchema);
