const mongoose = require("mongoose");
const { Schema } = mongoose;

const artworkSchema = new Schema({
  title: String,
  type: String,
  typeLabel: String,
  height: String,
  width: String,
  description: String,
  imageUrl: String,
});

mongoose.model("Artwork", artworkSchema);
