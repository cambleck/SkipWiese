const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
// const cleanCache = require("../middlewares/cleanCache");

const Artwork = mongoose.model("Artwork");

module.exports = (app) => {
  app.post("/api/artwork", requireLogin, async (req, res) => {
    const { title, type, size, price, imageUrl } = req.body;

    const artwork = new Artwork({
      title,
      type,
      size,
      price,
      imageUrl,
    });

    try {
      await artwork.save();
      res.send(artwork);
    } catch (err) {
      res.send(400, err);
    }
  });
};
