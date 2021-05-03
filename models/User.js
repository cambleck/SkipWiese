const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { collection: "User" }
);

mongoose.model("User", userSchema);
